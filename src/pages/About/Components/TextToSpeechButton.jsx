import React, { useState, useEffect } from 'react';

const TextToSpeechButton = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [utterance, setUtterance] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fetchVoices = () => {
    const availableVoices = speechSynthesis.getVoices();
    setVoices(availableVoices);

    if (!selectedVoice && availableVoices.length > 0) {
      setSelectedVoice(availableVoices[0]);
    }
  };

  const handleSpeak = () => {
    const specificContent = document.getElementById('readable-content');

    if (specificContent && specificContent.innerText.trim()) {
      const newUtterance = new SpeechSynthesisUtterance(specificContent.innerText);
      newUtterance.lang = 'en-US';
      newUtterance.voice = selectedVoice;
      newUtterance.rate = 1;
      newUtterance.pitch = 1;
      newUtterance.volume = 1;

      setUtterance(newUtterance);
      setIsSpeaking(true);

      speechSynthesis.speak(newUtterance);

      newUtterance.onend = () => {
        setIsSpeaking(false);
      };
    } else {
      alert('No readable content found.');
    }
  };

  const handlePause = () => {
    if (isSpeaking) {
      speechSynthesis.pause();
      setIsSpeaking(false);
    }
  };

  const handleResume = () => {
    if (!isSpeaking && utterance) {
      speechSynthesis.resume();
      setIsSpeaking(true);
    }
  };

  const handleRestart = () => {
    if (utterance) {
      speechSynthesis.cancel();
      handleSpeak(); 
    }
  };

  useEffect(() => {
    fetchVoices();
    speechSynthesis.onvoiceschanged = fetchVoices;
  }, []);

  return (
    <div>
      <label htmlFor="voiceSelect">Choose a Voice: </label>
      <select
        id="voiceSelect"
        value={selectedVoice ? selectedVoice.name : ''}
        onChange={(e) => {
          const selected = voices.find((voice) => voice.name === e.target.value);
          setSelectedVoice(selected);
        }}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      <br />
      <button onClick={handleSpeak}>Read Specific Content</button>
      <button onClick={handlePause} disabled={!isSpeaking}>
        Pause
      </button>
      <button onClick={handleResume} disabled={isSpeaking}>
        Resume
      </button>
      <button onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default TextToSpeechButton;




