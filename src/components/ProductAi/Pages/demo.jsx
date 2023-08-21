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
import { Link } from "react-router-dom";
import { extract } from "../../../../core/Apis/extract/extract";
import { keyword } from "../../../../core/Apis/keyword/keywords";

const Extract = () => {
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
  // const [isVisible, setIsVisible] = useState(false);

  // Text convert end

  //document conver
  const [isVisibleone, setIsVisibleone] = useState(false);
  const toggleVisibilityone = () => {
    setIsVisibleone(!isVisibleone);
  };

  // document hide and show

  // const [isVisiblecon, setIsVisiblecon] = useState(false);
  // const [isVisibleconhide, setIsVisibleconhide] = useState(true);

  // const toggleVisibilitycon = () => {
  //   setIsVisiblecon(!isVisiblecon);
  //   setIsVisibleconhide(!isVisibleconhide);
  // };

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [selectedFromLanguage, setSelectedFromLanguage] = useState("");
  const [selectedToLanguage, setSelectedToLanguage] = useState("");

  // const handleFromTextChange = (e) => {
  //   const text = e.target.value.trim();
  //   setFromText(text);
  //   if (!text) {
  //     setToText("");
  //   }
  // };

  // Audio
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

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
  // const [isListening, setIsListening] = useState(false);
  // const recognitionRef = useRef(null);
  // const handleSpeechRecognition = () => {
  //   if (!isListening) {
  //     startSpeechRecognition();
  //   } else {
  //     stopSpeechRecognition();
  //   }
  // };

  // const startSpeechRecognition = () => {
  //   recognitionRef.current = new window.webkitSpeechRecognition();
  //   recognitionRef.current.continuous = true;
  //   recognitionRef.current.interimResults = false;

  //   recognitionRef.current.onstart = () => {
  //     setIsListening(true);
  //     console.log("Speech recognition started");
  //   };

  //   recognitionRef.current.onend = () => {
  //     setIsListening(false);
  //     console.log("Speech recognition ended");
  //   };

  //   recognitionRef.current.onerror = (event) => {
  //     console.error("Speech recognition error occurred: ", event.error);
  //   };

  //   recognitionRef.current.onresult = (event) => {
  //     const result = event.results[event.results.length - 1][0].transcript;
  //     console.log("Speech recognition result:", result);
  //   };

  //   recognitionRef.current.start();
  // };

  // const stopSpeechRecognition = () => {
  //   if (recognitionRef.current) {
  //     recognitionRef.current.stop();
  //   }
  // };

  // end mic

  // Upload file icon
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

  const [extractText, setExtractText] = useState("");
  const [summerization, setSummerization] = useState("");
  const [keywords, setKeywords] = useState("");
  const [keywordsans, setKeywordsAns] = useState([]);

  const onChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setExtractText((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setKeywords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("apihit");
    extract(extractText)
      .then((data) => {
        console.log(data);
        console.log(data.data.Response);
        setSummerization(data.data.Response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const keywordsubmit = async (e) => {
    e.preventDefault();
    console.log("api hit");
    keyword(keywords)
      .then((data) => {
        console.log(data);
        console.log(data.data.Keywords_list);
        setKeywordsAns(data.data.Keywords_list);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Percentage dropdown
  // const [selectedPercentage, setSelectedPercentage] = useState("");
  // const handlePercentageChange = (e) => {
  //   setSelectedPercentage(e.target.value);
  // };

  // const generateOptions = () => {
  //   const options = [];
  //   for (let i = 0; i <= 100; i += 10) {
  //     options.push(
  //       <option key={i} value={i}>
  //         {i}%
  //       </option>
  //     );
  //   }
  //   return options;
  // };

  const [selectedFileName, setSelectedFileName] = useState(
    "Select Text File or upload"
  );
  const handleFileChange = (event) => {
    setSelectedFileName(event.target.files[0].name);
  };

  // keywords dropdown

  return (
    <section class="section1">
      <div className="p-0 py-3 pl-0 pl-lg-5" id="main_text">
        <form class="row justify-content-center g-3  pb-2">
          <div class="col-md-10 ">
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
              />
            </div>
          </div>

          <div class="col-md-2">
            {/* <button type="submit" class="btn btn-primary">
                Upload
              </button> */}
            <Button as="input" type="submit" value="Upload" />
          </div>

          <div id="text">
            <div className="main-wrapper">
              {isVisibleconhide && (
                <div class="container-flued">
                  <div className=" d-flex p-0">
                    <div className="col-5 col-md-5 col-sm-5  p-0">
                      <h6 className="px-2">
                        <span style={{ fontWeight: "400" }}>Extract Text </span>
                        <i className="bi bi-question-circle px-2"></i>
                      </h6>
                    </div>
                    <div className="col-7 col-md-7 col-sm-7 ">
                      <div className="icons justify-content-end ">
                        <div className="dropdown  ">
                          <select
                            name="percentage"
                            onChange={onChnage}
                            className="dropdown-item d-flex p-1 Homebutton text-center "
                            style={{
                              color: "#212529ab",
                            }}
                          >
                            <option selected>Percentage</option>
                            <option selected>10</option>
                            <option selected>20</option>
                            <option selected>30</option>
                            <option selected>40</option>
                            <option selected>50</option>
                            <option selected>60</option>
                            <option selected>70</option>
                            <option selected>80</option>
                            <option selected>90</option>
                            <option selected>100</option>
                          </select>
                        </div>
                        <div className=" px-3 ">
                          <Button
                            variant="outline-light"
                            className="Homebutton"
                            // style={{
                            //   color: "#212529ab",
                            //   border: " 1px solid #6c757d42",
                            //   borderRadius: "6%",
                            //   backgroundColor: "#fff",
                            //   padding: "5px",
                            // }}
                            href="home#"
                            size="sm"
                          >
                            Translate
                          </Button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper mt-3">
                    <div className="text-input text-input-summ d-flex ">
                      <textarea
                        spellCheck="false"
                        className="from-text form-control"
                        placeholder="Enter or paste your text and press 'Summarize.'"
                        name="text"
                        onChange={onChnage}
                      />
                      <textarea
                        spellCheck="false"
                        readOnly
                        value={summerization}
                        className="to-text form-control"
                        placeholder="Summarize text"
                      />
                    </div>

                    <div className=" row   icon-container justify-content-center mt-1 p-2 ">
                    <div class="col-md-6 trans-text1  d-flex flex-wrap"></div>

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
                            onClick={handlesubmit}
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Extract;
