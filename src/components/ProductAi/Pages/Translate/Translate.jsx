import React, { useEffect, useRef, useState } from "react";
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
import { translate } from "../../../../core/Apis/translate/translate";

//


const Translate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");

  // selectedFromLanguage
  const [selectedFromLanguage, setSelectedFromLanguage] = useState("");
  const [selectedToLanguage, setSelectedToLanguage] = useState("");
  const [text, setText] = useState();
  const [showText, setShowText] = useState("");

  const onChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;


    setText((prevState) => ({
      ...prevState,
      [name] : value,
     
    }));

    
  };
  
  const handlesubmit = async (e) => {
      e.preventDefault();
      console.log("apihit");
      translate(text)
      .then((data) => {
        console.log(data.data.translated_text)
        setShowText(data.data.translated_text);
      })
      .catch((e) => {console.log(e);});
      console.log(text);
  }

  // const handleFromTextChange = (e) => {
  //   const text = e.target.value.trim();
  //   setFromText(text);
  //   if (!text) {
  //     setToText("");
  //   }
  // };

  // const handleLanguageChange = (e, isFromLanguage) => {
  //   const selectedLanguage = e.target.value;
  //   if (isFromLanguage) {
  //     setSelectedFromLanguage(selectedLanguage);
  //   } else {
  //     setSelectedToLanguage(selectedLanguage);
  //   }
  // };

  const handleExchangeLanguages = () => {
    const tempText = fromText;
    const tempLang = selectedFromLanguage;
    setFromText(toText);
    setToText(tempText);
    setSelectedFromLanguage(selectedToLanguage);
    setSelectedToLanguage(tempLang);
  };
  //   four close

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



  // mic
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const handleSpeechRecognition = () => {
    if (!isListening) {
      startSpeechRecognition();
    } else {
      stopSpeechRecognition();
    }
  };

  const startSpeechRecognition = () => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      console.log("Speech recognition started");
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      console.log("Speech recognition ended");
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error occurred: ", event.error);
    };

    recognitionRef.current.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript;
      console.log("Speech recognition result:", result);
    };

    recognitionRef.current.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  // end mic

  // Upload File

  return (
    <div>
      <div class="container-flued">
        <div id="text">
        
            <div className=" d-flex ">
              <div className="col-6 col-md-6 col-sm-6">
                <h6 className="px-2">
                  <span style={{ fontWeight: "400" }}>Translator </span>
                  <i className="bi bi-question-circle px-2"></i>
                </h6>
              </div>
              <div className="col-6 col-md-6 col-sm-6 ">
                <div className="audio-player justify-content-end px-3 p-0 ">
                  <audio
                    ref={audioRef}
                    src="http://mainline.i3s.unice.fr/mooc/LaSueur.mp3"
                  />
                  <Link
                    to="#"
                    class="btn  btn-light btn-sm  play-button"
                    title="Play"
                    onClick={handlePlay}
                  >
                    <FontAwesomeIcon icon={faVolumeUp} />
                  </Link>
                  {/* <button
                      className="play-button btn px-3 p-0 "
                      
                    >
                    </button> */}
                </div>
              </div>
            </div>
            <div className="wrapper mt-3">
              <div className="text-input d-flex trans-text-icon">
                <div
                  className="col-lg-6 col-md-12 d-flex flex-wrap "
                  // style={{ borderRight: "1px solid #cccccc7d" }}
                >
                  <textarea
                    spellCheck="false"
                    className="from-text form-control"
                    placeholder="Type to Translate"
                    name="text"
                    onChange={onChnage}
                  />
                  <div className="col-lg-6 col-md-12 d-flex flex-wrap  wordtext">
                    <p className="px-2">Words: 133</p>
                    <p className="px-2">Language: Hindi</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 d-flex flex-wrap">
                  <textarea
                    spellCheck="false"
                    readOnly
                    disabled
                    className="to-text form-control"
                    placeholder="Translation"
                    value={showText}
                    // ref={textareaRef}
                  />
                  
                 


                  <div className="col-lg-6 col-md-12 d-flex flex-wrap wordtext">
                    <p className="px-2">Words: 133</p>
                    <p className="px-2">Language: English</p>
                    {/* <p className="px-2">Count: 113</p> */}
                  </div>
                </div>
              </div>

              <div class=" trans-text">
                <ul className="controls list-unstyled d-flex flex-wrap">
                  <div class="col-4  gap-2 d-flex">
                    <div
                      className="icons d-flex "
                      style={{ borderRight: "  1px solid #ccc" }}
                    >
                      <button
                        className="btn play-button"
                        onClick={handleCopy}
                        title="Copy Text"
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </button>
                      <button
                        className="btn play-button"
                        onClick={handleCopy}
                        title="Download"
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          onClick={handleDownload}
                        />
                      </button>
                      <button
                        className="btn play-button"
                        onClick={handleSpeechRecognition}
                        title="Voice"
                      >
                        <FontAwesomeIcon
                          icon={isListening ? faStop : faMicrophone}
                        />
                      </button>
                    </div>
                    <li
                      className="rowControls from flex-grow-1"
                      style={{ float: "right" }}
                    >
                      <select
                        className="form-select text-center"
                        // value={selectedFromLanguage}
                        name="language"
                        onChange={onChnage}
                        // onChange={(e) => handleLanguageChange(e, true)}
                      >
                        {" "}
                        <option>Select language</option>
                       
                          <option name="mr">
                            <span>marathi</span>
                          </option>
                          <option name="hi">
                            <span>hindi</span>
                          </option>
  
                      </select>
                    </li>
                  </div>
                 
                  <div class="col-2">
                    <li
                      className="exchange align-items-center justify-content-center row from"
                      onClick={handleExchangeLanguages}
                    >
                      <button
                        class="circle"
                        aria-label="Click to translate"
                        data-toggle="tooltip"
                        title="Translate"
                        onClick={handleExchangeLanguages}
                      >
                        <span class="trans-btn-txt">
                          <FontAwesomeIcon icon={faExchangeAlt} />
                        </span>
                      </button>
                    </li>
                  </div>
                  <div class="col-4 gap-2 d-flex">
                    <li
                      className="rowControls to flex-grow-1"
                      style={{ float: "left" }}
                    >
                      <select
                        className="form-select text-center"
                        value={selectedToLanguage}
                        // onChange={(e) => handleLanguageChange(e, false)}
                      >
                        {" "}
                        <option>Select language</option>
                       
                          <option >
                            
                          </option>
                       
                      </select>
                    </li>
                    <div className="icons d-flex align-items-start pl-2">
                      <button
                        class="btn btn-primary  "
                        onClick={handlesubmit}
                      >
                        Translate
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Translate;
