import React, { useEffect, useRef, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeUp,
  faCopy,
  faExchangeAlt,
  faDownload,
  faMicrophone,
  faStop,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const contries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "en-GB": "English",
  "es-ES": "Spanish",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu",
};

const DocumentTranslate = () => {
  // onclick translate button progress bar start
  const [stepValue, setStepValue] = useState(0);

  const handleMove = () => {
    let id = setInterval(frame, 500);

    function frame() {
      if (stepValue >= 100) {
        clearInterval(id);
      } else {
        setStepValue((prevStepValue) => {
          const updatedStepValue = prevStepValue + 10;
          return updatedStepValue > 100 ? 100 : updatedStepValue;
        });
      }
    }
  };

  //   Onclick of the convert button, the document translation button is toggled
  const [isVisiblecon, setIsVisiblecon] = useState(false);
  const [isVisibleconhide, setIsVisibleconhide] = useState(true);
  const toggleVisibilitycon = () => {
    setIsVisiblecon(!isVisiblecon);
    setIsVisibleconhide(!isVisibleconhide);
  };

  // selectedFromLanguage

  const [selectedFromLanguage, setSelectedFromLanguage] = useState("");
  const [selectedToLanguage, setSelectedToLanguage] = useState("");
  const handleLanguageChange = (e, isFromLanguage) => {
    const selectedLanguage = e.target.value;
    if (isFromLanguage) {
      setSelectedFromLanguage(selectedLanguage);
    } else {
      setSelectedToLanguage(selectedLanguage);
    }
  };

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const handleExchangeLanguages = () => {
    const tempText = fromText;
    const tempLang = selectedFromLanguage;
    setFromText(toText);
    setToText(tempText);
    setSelectedFromLanguage(selectedToLanguage);
    setSelectedToLanguage(tempLang);
  };

  // Audio play
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };
  const handlePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  // copy textarea
  const textareaRef = useRef(null);
  const handleCopy = () => {
    textareaRef.current.select();
    document.execCommand("copy");
  };

  const handleDownload = () => {
    const content = textareaRef.current.value;
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Upload File
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <div id="text">
        <form>
          <div className="main-wrapper">
            {isVisibleconhide && (
              <>
                <div className="file-upload-container">
                  <div
                    className="file-upload-area "
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <h4>Choose a document</h4>
                    <p>Upload Word, PDF, Excel, CSV ,Custom XML files</p>
                    <button
                      type="button"
                      className="btn btn-primary file-upload-button mb-3 mt-3"
                    >
                      <input
                        type="file"
                        id="file-upload-input"
                        className="file-upload-input"
                        onChange={handleFileSelect}
                      />
                      <label
                        htmlFor="file-upload-input"
                        className="file-upload-label"
                      >
                        <FontAwesomeIcon
                          icon={faCloudUploadAlt}
                          className="file-upload-icon"
                        />
                        <span> Upload and translate</span>
                      </label>{" "}
                    </button>
                    <div className="file-upload-text">
                      {selectedFile
                        ? selectedFile.name
                        : "Drag & Drop or Browse"}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary mb-5 convert "
                    onClick={toggleVisibilitycon}
                  >
                    Convert
                  </button>
                </div>
              </>
            )}
            {isVisiblecon && (
              <>
                <div className=" p-0 mt-0 pb-1 audioArea ">
                  {/* <div className="row "> */}
                  <ul className="controlsDocuments list-unstyled d-flex flex-wrap justify-content-around">
                    <div className="col-4 col-md-5 ">
                      <li
                        className=" select  selectoption flex-grow-1"
                        style={{ float: "right" }}
                      >
                        <select
                          className="form-select text-center "
                          style={{ margin: "auto" }}
                          value={selectedFromLanguage}
                          onChange={(e) => handleLanguageChange(e, true)}
                        >
                          {" "}
                          <option>Select language</option>
                          {Object.entries(contries).map(([code, name]) => (
                            <option key={code} value={code}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </li>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <li
                        className="exchange  "
                        onClick={handleExchangeLanguages}
                      >
                        <button
                          className="circle"
                          aria-label="Click to translate"
                          data-toggle="tooltip"
                          title="Translate"
                          onClick={handleExchangeLanguages}
                        >
                          <span className="trans-btn-txt">
                            <FontAwesomeIcon icon={faExchangeAlt} />
                          </span>
                        </button>
                      </li>
                    </div>
                    <div className="col-4 col-md-5 ">
                      <li
                        className=" select selectoption flex-grow-1"
                        style={{ float: "left" }}
                      >
                        <select
                          className="form-select text-center"
                          style={{ margin: "auto" }}
                          value={selectedToLanguage}
                          onChange={(e) => handleLanguageChange(e, false)}
                        >
                          {" "}
                          <option>Select language</option>
                          {Object.entries(contries).map(([code, name]) => (
                            <option key={code} value={code}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </li>
                    </div>
                  </ul>
                  {/* </div> */}
                </div>
                <div className=" row text-center align-items-center">
                  <div className=" col-6 col-md-6 filename ">
                    <div className="doc_name mt-4 ">
                      <p>File name</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 mb-4 ">
                    <button
                      className="translate mt-4 btn btn-outline-success"
                      onClick={handleMove}
                      type="button"
                    >
                      Translate
                    </button>
                    <div className="progressbarWrapper">
                      <span
                        id="greenBar"
                        style={{ width: `${stepValue}%` }}
                      >{`${stepValue}%`}</span>
                    </div>
                  </div>
                </div>

                <div className=" text-input wrapper pb-4 border-top">
                  <div
                    className="textarea-container "
                    style={{ width: "100%" }}
                  >
                    <textarea
                      spellCheck="false"
                      className="to-text1 p-4"
                      placeholder="Translation"
                      ref={textareaRef}
                    />
                  </div>

                  <div className=" row   icon-container align-items-center ">
                    <div className="col-md-8 trans-text1  d-flex flex-wrap">
                      <div>
                        <p className="px-2">Words:133 </p>
                      </div>

                      <div>
                        <p> Language: Hindi</p>{" "}
                      </div>
                    </div>

                    <div className=" col-2  text-end ">
                      <button
                        className="btn play-button px-1"
                        onClick={handleCopy}
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </button>
                      <button
                        className="btn play-button px-1"
                        onClick={handleCopy}
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          onClick={handleDownload}
                        />
                      </button>

                      <audio
                        ref={audioRef}
                        src="http://mainline.i3s.unice.fr/mooc/LaSueur.mp3"
                      />
                      <Link
                        to="#"
                        className="btn  btn-light btn-sm  play-button"
                        title="Play"
                        onClick={handlePlay}
                      >
                        <FontAwesomeIcon icon={faVolumeUp} />
                      </Link>
                    </div>
                    <div
                      className=" col-2 text-end "
                      // id="doc_btn"
                    >
                      <button
                        type="button"
                        style={{ fontSize: "13px" }}
                        className="btn convert btn-primary d-flex"
                      >
                        {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                        Convert to speech
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentTranslate;
