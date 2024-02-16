import React, { useState } from 'react';
import './SpeakerInp.css';

const SpeakerInp = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleStartStopClick = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      const recognition = new window.webkitSpeechRecognition(); // Using polyfill
      recognition.lang = 'en-US';
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscription(transcript);
      };
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className='speak_container'>
      <div className='center__items'>
        <h1 className='speak_title'>TAP to speak!!!</h1>
        <button onClick={handleStartStopClick} className='speak_button'>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
      </div>
      <div className='trans_box'>
        <h2 className='speak_trans'>Transcription:</h2>
        <div className='box'>
          <p>{transcription}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInp;
