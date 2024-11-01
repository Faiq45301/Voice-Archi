from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from whisper import load_model
import os
import tempfile  # More secure temp file handling
import logging  # Optional: For better debugging/logging

# Initialize the Whisper model once (base size)
model = load_model("base")

# Set up logging (optional for debugging)
logger = logging.getLogger(__name__)

@csrf_exempt
def transcribe_audio(request):
    if request.method == 'POST':
        # Get the uploaded audio file
        audio_file = request.FILES.get('audio')

        if not audio_file:
            return JsonResponse({'error': 'No audio file uploaded'}, status=400)

        try:
            # Use tempfile for a more secure temporary file storage
            with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_audio:
                for chunk in audio_file.chunks():
                    temp_audio.write(chunk)

                temp_audio_path = temp_audio.name  # Store the file path

            # Use Whisper to transcribe the audio
            transcription = model.transcribe(temp_audio_path)

            # Optionally log the transcription for debugging
            logger.info(f"Transcription: {transcription['text']}")

            # Return the transcription result as JSON
            return JsonResponse({'transcription': transcription['text']})

        except Exception as e:
            logger.error(f"Error during transcription: {str(e)}")
            return JsonResponse({'error': 'Transcription failed'}, status=500)

        finally:
            # Always clean up the temporary file
            if os.path.exists(temp_audio_path):
                os.remove(temp_audio_path)

    # If request method is not POST, return an error
    return JsonResponse({'error': 'Invalid request method'}, status=400)
