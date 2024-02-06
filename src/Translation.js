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

          <h5><b><i>{translatedText}</i></b></h5>
        </div>
      )}
      <div>
        <ul className=''>
          <li> Afrikaans af</li>
          <li>Albanian sq</li>
          <li>Amharic am</li>
          <li>Arabic ar</li>
          <li>Armenian hy</li>
          <li>Azerbaijani az</li>
          <li>Basque eu</li>
          <li>Belarusian be</li>
          <li>Bengali bn</li>
          <li>Bosnian bs</li>
          <li>Bulgarian bg</li>
          <li>Catalan ca</li>
          <li>Cebuano ceb (ISO-639-2)</li>
          <li>Chinese (Simplified) zh-CN (BCP-47)</li>
          <li>Chinese (Traditional) zh-TW (BCP-47)</li>
          <li>Corsican co</li>
          <li>Croatian hr</li>
          <li>Czech cs</li>
          <li>Danish da</li>
          <li>Dutch nl</li>
          <li>English en</li>
          <li>Esperanto eo</li>
          <li>Estonian et</li>
          <li>Finnish fi</li>
          <li>French fr</li>
          <li>Frisian fy</li>
          <li>Galician gl</li>
          <li>Georgian ka</li>
          <li>German de</li>
          <li>Greek el</li>
          <li>Gujarati gu</li>
          <li>Haitian Creole ht</li>
          <li>Hausa ha</li>
          <li>Hawaiian haw (ISO-639-2)</li>
          <li>Hebrew he**</li>
          <li>Hindi hi</li>
          <li>Hmong hmn (ISO-639-2)</li>
          <li>Hungarian hu</li>
          <li>Icelandic is</li>
          <li>Igbo ig</li>
          <li>Indonesian id</li>
          <li>Irish ga</li>
          <li>Italian it</li>
          <li>Japanese ja</li>
          <li>Javanese jw</li>
          <li>Kannada kn</li>
          <li>Kazakh kk</li>
          <li>Khmer km</li>
          <li>Korean ko</li>
          <li>Kurdish ku</li>
          <li>Kyrgyz ky</li>
          <li>Lao lo</li>
          <li>Latin la</li>
          <li>Latvian lv</li>
          <li>Lithuanian lt</li>
          <li>Luxembourgish lb</li>
          <li>Macedonian mk</li>
          <li>Malagasy mg</li>
          <li>Malay ms</li>
          <li>Malayalam ml</li>
          <li>Maltese mt</li>
          <li>Maori mi</li>
          <li>Marathi mr</li>
          <li>Mongolian mn</li>
          <li>Myanmar (Burmese) my</li>
          <li>Nepali ne</li>
          <li>Norwegian no</li>
          <li>Nyanja (Chichewa) ny</li>
          <li>Pashto ps</li>
          <li>Persian fa</li>
          <li>Polish pl</li>
          <li>Portuguese (Portugal, Brazil) pt</li>
          <li>Punjabi pa</li>
          <li>Romanian ro</li>
          <li>Russian ru</li>
          <li>Samoan sm</li>
          <li>Scots Gaelic gd</li>
          <li>Serbian sr</li>
          <li>Sesotho st</li>
          <li>Shona sn</li>
          <li>Sindhi sd</li>
          <li>Sinhala (Sinhalese) si</li>
          <li>Slovak sk</li>
          <li>Slovenian sl</li>
          <li>Somali so</li>
          <li>Spanish es</li>
          <li>Sundanese su</li>
          <li>Swahili sw</li>
          <li>Swedish sv</li>
          <li>Tagalog (Filipino) tl</li>
          <li>Tajik tg</li>
          <li>Tamil ta</li>
          <li>Telugu te</li>
          <li>Thai th</li>
          <li>Turkish tr</li>
          <li>Ukrainian uk</li>
          <li>Urdu ur</li>
          <li>Uzbek uz</li>
          <li>Vietnamese vi</li>
          <li>Welsh cy</li>
          <li>Xhosa xh</li>
          <li>Yiddish yi</li>
          <li>Yoruba yo</li>
          <li>Zulu zu</li>
        </ul>
      </div>
    </div>
  );
};

export default Translation;
