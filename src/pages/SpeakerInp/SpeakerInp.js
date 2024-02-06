import React, { useState } from 'react';
import './SpeakerInp.css'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

export const SpeakerInp = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleStartStopClick = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setTranscription(transcript);
  };

  recognition.onend = () => {
    if (isListening) {
      recognition.start();
    }
  };

  return (
    <div>
      <h1>TAP to speak!!!</h1>
      <button onClick={handleStartStopClick}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <div>
        <h2>Transcription:</h2>
        <div class="box">
        <p>{transcription}</p>
        </div>
        
      </div>
    </div>
  );
};

export default SpeakerInp;
