import React, { useState } from 'react';
import axios from 'axios';
import './Translation.css'

const Translation = () => {
  const [inputText, setInputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('');
  const [apiKey] = useState('61d8b4b0cbmsh7b5b5bf5f02628dp1ff914jsne2c8a58e9e8d');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSourceLanguageChange = (e) => {
    setSourceLanguage(e.target.value);
  };

  const handleTargetLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', inputText);
      encodedParams.set('target', targetLanguage);
      encodedParams.set('source', sourceLanguage);

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className=''>
      <h1 className='col-lg'><img src="/image/up-and-down-arrow.png" height="50px" width="50px" alt='An image is here' />
        Translate It!</h1>
      <div className='col-lg d-flex justify-content-center'>
        <div className='source-text'>
          <label>Source :</label>
          <input
            type="text"
            value={sourceLanguage}
            onChange={handleSourceLanguageChange}
          />
        </div>
        <div className='target-text'>
          <label>Target : </label>
          <input
            type="text"
            value={targetLanguage}
            onChange={handleTargetLanguageChange}
          />
        </div>
      </div>
      <div className='translate-text'>
        <textarea
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div className='button-class'>
        <button type='button' className='btn btn-secondary btn-lg' onClick={handleTranslate}>Translate</button>
      </div>
      {translatedText && (
        <div className='translated'>
          <h5>Translated Text:</h5>
          <p>{translatedText}</p>
        </div>
      )}

    </div>
  );
};

export default Translation;
