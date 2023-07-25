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
  faUpload,
  faPercentage,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { abstract } from "../../../../core/Apis/abstract/abstract";

const Abstract = () => {
  // const canvasRef = useRef(null);
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
  const [isVisible, setIsVisible] = useState(false);

  // Text convert end

  //document conver
  const [isVisibleone, setIsVisibleone] = useState(false);
  const toggleVisibilityone = () => {
    setIsVisibleone(!isVisibleone);
  };

  // document hide and show

  const [isVisiblecon, setIsVisiblecon] = useState(false);
  const [isVisibleconhide, setIsVisibleconhide] = useState(true);

  const toggleVisibilitycon = () => {
    setIsVisiblecon(!isVisiblecon);
    setIsVisibleconhide(!isVisibleconhide);
  };

  // const [fromText, setFromText] = useState("");
  // const [toText, setToText] = useState("");
  // const [selectedFromLanguage, setSelectedFromLanguage] = useState("");
  // const [selectedToLanguage, setSelectedToLanguage] = useState("");

  // const handleFromTextChange = (e) => {
  //   const text = e.target.value.trim();
  //   setFromText(text);
  //   if (!text) {
  //     setToText("");
  //   }
  // };

  // const handleExchangeLanguages = () => {
  //   const tempText = fromText;
  //   const tempLang = selectedFromLanguage;
  //   setFromText(toText);
  //   setToText(tempText);
  //   setSelectedFromLanguage(selectedToLanguage);
  //   setSelectedToLanguage(tempLang);
  // };

  const [abstractText, setAbstractText] = useState();
  const [ans , setAns] = useState("");
  const [length, setLenght] = useState("");
  const [sentences, setSentences] = useState("");
  const [words, setWords] = useState("");
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAbstractText((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
       e.preventDefault();
       abstract(abstractText)
       .then((data) => {
        console.log(data);
        console.log(data.data.Response.Summarize_data)
        setAns(data.data.Response.Summarize_data);
        setLenght(data.data.Response.Input_text_length);
        setSentences(data.data.Response.Number_of_Sentences);
        setWords(data.data.Response.Number_of_Words);
       })
       .catch(
          (e) => {
            console.log(e)
          }
       )
  }

  // Audio
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

  // copy
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

  const [selectedPercentage, setSelectedPercentage] = useState("");

  const handlePercentageChange = (e) => {
    setSelectedPercentage(e.target.value);
  };

  const generateOptions = () => {
    const options = [];
    for (let i = 0; i <= 100; i += 10) {
      options.push(
        <option key={i} value={i}>
          {i}%
        </option>
      );
    }
    return options;
  };

  const [selectedFileName, setSelectedFileName] = useState(
    "Select Text File or upload"
  );
  const handleFileChange = (event) => {
    setSelectedFileName(event.target.files[0].name);
  };

  return (
    <section class="section1">
      <div className="p-0 py-3 pl-0 pl-lg-5" id="main_text">
        <form>
          <div className=" row justify-content-center mainURl  g-3  pb-2">
            <div class="col-md-5 ">
              <div className="uploadFile1 p-2">
                <FontAwesomeIcon icon={faUpload} className="px-2" />
                <span className="filename1">{selectedFileName}</span>
                <input
                  type="file"
                  id="formFile"
                  class="form-control inputfile  "
                  placeholder="file"
                  onChange={handleFileChange}
                  style={{ border: " 1px dotted #6c757d42 " }}
                />{" "}
              </div>
            </div>
            <div class="col-md-5 ">
              <input
                type="text"
                class="form-control  rounded-0 p-2"
                placeholder="Paste URL"
                style={{ border: " 1px dotted #6c757d42 ", fontSize: "13px" }}
              />
            </div>
            <div class="col-md-2">
              <Button as="input" type="submit" value="Upload" />
            </div>
          </div>

          <div id="text">
            <div className="main-wrapper">
              {isVisibleconhide && (
                <div class="container-flued">
                  <div className=" d-flex p-0">
                    <div className="col-6 col-md-6 col-sm-6">
                      <h6 className="px-2">
                        <span style={{ fontWeight: "400" }}>
                          Abstract Text{" "}
                        </span>
                        <i className="bi bi-question-circle px-2"></i>
                      </h6>
                    </div>
                    <div className="col-6 col-md-6 col-sm-6 ">
                      <div className="audio-player justify-content-end px-3">
                        <Button
                          variant="outline-light"
                          href="home#"
                          size="sm "
                          className="Homebutton"
                        >
                          Translate
                        </Button>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="wrapper mt-3">
                   <form>
                    <div className="text-input text-input-summ d-flex ">
                      <textarea
                        spellCheck="false"
                        className="from-text form-control"
                        placeholder="Enter or paste your text and press 'Summarize.'"
                        name="text"
                        onChange={onChange}
                      />
                      <textarea
                        spellCheck="false"
                        readOnly
                        value={ans}
                        className="to-text form-control"
                        placeholder="Summarize text"
                       
                      />
                       
                    </div>
                    </form>
                    <div className=" row   icon-container justify-content-center mt-1 p-2 ">
                      <div class="col-md-6 trans-text1  d-flex flex-wrap">
                        <div>
                          <p className="px-2">length:{length} </p>
                        </div>
                        <div>
                          <p className="px-2">Sentences:{sentences} </p>
                        </div>
                         <div>
                          <p className="px-2">Words:{words} </p>
                        </div>
                       
                      </div>

                      <div className=" col-md-6 text-end d-flex flex-wrap  ">
                        <div class="col-sm-6 align-self-center">
                          <button
                            className="btn play-button px-1"
                            onClick={handleCopy}
                          >
                            <FontAwesomeIcon icon={faCopy} />
                          </button>{" "}
                          <button
                            className="btn play-button px-1"
                            onClick={handleCopy}
                          >
                            <FontAwesomeIcon
                              icon={faDownload}
                              onClick={handleDownload}
                            />
                          </button>{" "}
                        </div>
                        <div class="col-sm-3 text-center ">
                          <Button
                            type="submit"
                            style={{ fontSize: "13px" }}
                            onClick={handleSubmit}
                            className="btn convert btn-primary  "
                          >
                            Summarize
                          </Button>
                        </div>

                        <div class="col-sm-3 text-center">
                          <Button
                            className="btn convert btn-primary "
                            type="submit"
                            style={{ fontSize: "13px" }}
                            onClick={toggleVisibilitycon}
                          >
                            Keywords
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isVisiblecon && (
                <div className="row   " style={{ display: "contents" }}>
                  <div className="  d-flex ">
                    <div className="col-5 col-md-5 col-sm-5  p-0">
                      <h6 className="px-2">
                        <span style={{ fontWeight: "400" }}>Keywords </span>
                        <i className="bi bi-question-circle px-2"></i>
                      </h6>
                    </div>
                    <div className="col-7 col-md-7 col-sm-7 ">
                      <div className="icons justify-content-end ">
                        <div className="dropdown  ">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Word Length</option>
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                          </select>
                        </div>
                        <div className=" px-3 ">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder=" Enter Words Count"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" text-center align-items-center pt-4">
                    <div className=" text-input wrapper ">
                      <div
                        className="textarea-container "
                        style={{ width: "100%" }}
                      >
                        <textarea
                          spellCheck="false"
                          className="from-text form-control to-text1"
                          // placeholder="Translation"
                          ref={textareaRef}
                        />
                      </div>

                      <div className=" row   icon-container align-items-center  pt-3">
                        <div class="col-md-8 trans-text1  d-flex flex-wrap">
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
                        </div>
                        <div
                          className=" col-2 text-end "
                          // id="doc_btn"
                        >
                          <button
                            type="button"
                            style={{ fontSize: "13px" }}
                            className="btn convert btn-primary d-flex"
                            onClick={toggleVisibilityone}
                          >
                            {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                            Keywords
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Abstract;
