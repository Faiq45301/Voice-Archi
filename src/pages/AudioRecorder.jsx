import React, { useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import './AudioRecorder.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcription, setTranscription] = useState(''); // To store transcription
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
      })
      .catch(err => console.error('Microphone access denied', err));
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setIsRecording(true);
      mediaRecorder.ondataavailable = (e) => {
        const url = URL.createObjectURL(e.data);
        setAudioURL(url);
        setAudioBlob(e.data); // Save the audio blob
      };
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const sendForTranscription = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio-file.wav');

    try {
      const response = await axios.post('http://localhost:8000/api/transcribe/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setTranscription(response.data.transcription); // Set transcription data
      navigate('/chat', { state: { userMessage: 'Your voice message', botMessage: response.data.transcription } }); // Pass messages to Chat page
    } catch (error) {
      console.error('Error sending audio for transcription:', error);
    }
  };

  return (
    <div className="recorder-container">
      <div className="mic-container">
        <div
          className={`mic-button ${isRecording ? 'recording' : ''}`}
          onClick={isRecording ? stopRecording : startRecording}
        >
          <FaMicrophone size={70} />
        </div>
        <p>{isRecording ? 'Recording... Speak Now' : 'Tap to Speak'}</p>
      </div>

      {audioURL && (
        <div className="audio-player">
          <audio controls src={audioURL}></audio>
        </div>
      )}

      {audioBlob && (
        <div className="transcription-section">
          <button className="send-button" onClick={sendForTranscription}>
            Send Audio for Transcription
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
