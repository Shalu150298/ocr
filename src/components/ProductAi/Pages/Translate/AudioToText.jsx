import React, { useEffect, useRef, useState } from "react";
import "../../Pages/Translate/Translate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faVolumeUp,
  faCopy,
  faExchangeAlt,
  faDownload,
  faMicrophone,
  faStop,
  faUpload,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { mictranslate } from "../../../../core/Apis/translate/translate";
import { ColorRing } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const AudioToText = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const toggleVisibility = () => {
  //     setIsVisible(!isVisible);
  //   };

  //   const [micText, setMicText] = useState("");
  //   const [micToText, setMicToText] = useState("");

  //   // selectedFromLanguage
  const [selectedFromLanguage, setSelectedFromLanguage] = useState("");
  const [selectedToLanguage, setSelectedToLanguage] = useState("");
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");
  const [fileupload, setFileUpload] = useState({
    audio: null,
    // output_language:'',
    input_language: "",
  });

  const [audioAns, setAudioAns] = useState();
  const [loader, setLoader] = useState(false);
  const [fileLoader, setFileLoader] = useState(false);
  const navigate = useNavigate();

  const onChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setText((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFileUpload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setFileUpload((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  //   const handleReset = () => {
  //     // Reset the editor's content to an empty state
  //     // console.log("hit edit")
  //     // setText("")
  //     // setShowText("")
  //     // setAudioAns("")
  //     // navigate("/admin/home");
  //   };

  const handlesubmitmic = async (e) => {
    e.preventDefault();
    console.log("apihit");
    setFileLoader(true);
    const formdataToSend = new FormData();
    formdataToSend.append("audio", fileupload.audio);
    // formdataToSend.append('output_language', fileupload.output_language);
    formdataToSend.append("lang", fileupload.lang);
    console.log(formdataToSend);
    mictranslate(formdataToSend)
      .then((data) => {
        console.log(data.data.Response);
        setFileLoader(false);
        setAudioAns(data.data.Response);
      })
      .catch((e) => {
        console.log(e);
        setFileLoader(false);
      });
  };
  //   // Audio play
  //   // const [volume, setVolume] = useState(50);
  //   const audioRef = useRef(null);
  //   // const handleVolumeChange = (event) => {
  //   //   const newVolume = event.target.value;
  //   //   setVolume(newVolume);
  //   // };
  //   const handlePlay = () => {
  //     if (window.speechSynthesis) {
  //       const utterance = new SpeechSynthesisUtterance(showText);
  //       console.log(utterance);
  //       const voices = window.speechSynthesis.getVoices();
  //       const indianEnglish = voices.find((voice) => voice.lang === "hi-IN");
  //       if (indianEnglish) {
  //         utterance.voice = indianEnglish;
  //       }
  //       window.speechSynthesis.speak = indianEnglish;
  //     }
  //   };

  //   // copy textarea
  const handleCopy = () => {
    toast.success("copy text");
    navigator.clipboard.writeText(audioAns);
  };

  const handleDownload = () => {
    const blob = new Blob([audioAns], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "textFile.txt";
    link.click();

    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);

    toast.info("Text file downloaded");
  };

  //   // // mic
  //   const [isListening, setIsListening] = useState(false);
  //   const [recognizedText, setRecognizedText] = useState("");
  //   const recognitionRef = useRef(null);

  //   const handleToggleListening = () => {
  //     if (!recognitionRef.current) {
  //       recognitionRef.current = new window.webkitSpeechRecognition();
  //       recognitionRef.current.onresult = handleSpeechRecognitionResult;
  //     }

  //     if (!isListening) {
  //       recognitionRef.current.start();
  //     } else {
  //       recognitionRef.current.stop();
  //     }

  //     setIsListening(!isListening);
  //   };

  //   const handleSpeechRecognitionResult = (event) => {
  //     const transcript = Array.from(event.results)
  //       .map((result) => result[0].transcript)
  //       .join("");
  //     setRecognizedText(transcript);
  //     console.log(transcript, "hit trans");
  //   };

  //   const {
  //     transcript,
  //     listening,
  //     resetTranscript,
  //     browserSupportsSpeechRecognition,
  //   } = useSpeechRecognition();

  //   //  SpeechRecognition.startListening({ continuous: true })

  //   if (!browserSupportsSpeechRecognition) {
  //     return <span>Browser doesn't support speech recognition.</span>;
  //   }

  // const mic = () => {
  //   navigator.mediaDevices

  //     .getUserMedia({ audio: true })

  //     .then(function (stream) {
  //       const audioContext = new AudioContext();

  //       const mediaStreamSource = audioContext.createMediaStreamSource(stream);

  //       console.log(mediaStreamSource);

  //       // Process the audio stream and convert it to the desired format

  //       // ...

  //       const bufferSize = 4096;

  //       const scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);

  //       scriptNode.onaudioprocess = function (event) {
  //         const audioData = event.inputBuffer.getChannelData(0);

  //         console.log(audioData);

  //         // Send the audio data to the WebSocket server

  //         // const sendData = new Blob([
  //         //   new Uint8Array(
  //         //     audioData.buffer,

  //         //     audioData.byteOffset,

  //         //     audioData.length
  //         //   ),
  //         // ]);

  //         // socket.send(sendData);
  //       };

  //       mediaStreamSource.connect(scriptNode);

  //       scriptNode.connect(audioContext.destination);
  //     })

  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  return (
    <div>
      <div class="container-fluidx">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="row justify-content-start g-20  pb-2">
          <div className="dropdown col-md-5 ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-translate px-1"></i>
              Translation Option
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/admin/home/">
                  <i class="bi bi-translate"></i>
                  Translate Text
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to="/admin/AudioToText/">
                  <i className="bi bi-volume-up"></i>
                  Audio To Text
                </Link>
              </li>
              <hr className="dropdown-divider" />

              <li>
                <Link className="dropdown-item" to="/admin/DocumentTranslate">
                  <i class="bi bi-file-earmark-text"></i>
                  Upload File To Text
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-md-3  ">
            <div className="uploadFile1 p-2">
              <FontAwesomeIcon icon={faUpload} className="px-2" />
              <span className="filename1">Select Audio File</span>
              <input
                type="file"
                id="formFile"
                name="audio"
                onChange={handleFileChange}
                class="form-control inputfile  "
                placeholder="file"
                style={{ border: " 1px dotted #6c757d42 ", color: "#000" }}
              />
            </div>
          </div>
          <div className=" col-md-3">
            <select
              className="form-select text-center"
              name="lang"
              onChange={onChnage}
            >
              <option>
                <span>Select Output Language</span>
              </option>
              <option value="mr">
                <span>marathi</span>
              </option>
              <option value="hi">
                <span>Hindi</span>
              </option>
              {/* <option value="en">
                <span>english</span>
              </option> */}
            </select>
          </div>

          <div class="col-md-1">
            <button
              as="input"
              type="submit"
              value="Upload"
              onClick={handlesubmitmic}
              className="btn btn-sm btn-primary"
            >
              Upload
            </button>
          </div>
        </div>
        <div id="text">
          <div className=" d-flex ">
            <div className="col-6 col-md-6 col-sm-6">
              <h6 className="px-2">
                <span style={{ fontWeight: "400" }}>Audio To Text </span>
                {/* <i className="bi bi-question-circle px-2"></i> */}
              </h6>
            </div>
            <div className="col-6 col-md-6 col-sm-6 ">
              <div className="audio-player justify-content-end px-3 p-0 ">
                {/* <audio
                  ref={audioRef}
                  src="http://mainline.i3s.unice.fr/mooc/LaSueur.mp3"
                /> */}
                {/* <button
                  class="btn  btn-light btn-sm  play-button"
                  title="Play"
                  onClick={handlePlay}
                >
                  <FontAwesomeIcon icon={faVolumeUp} />
                </button> */}
                {/* <button
                      className="play-button btn px-3 p-0 "
                      
                    >
                    </button> */}
              </div>
            </div>
          </div>
          <div className="wrapper mt-3">
            <div className="text-input text-input-summ  justify-content-center align-items-center">
              {fileLoader ? (
                <div className="Loading" style={{ height: 300 }}>
                  <div>
                    <ColorRing
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  </div>
                </div>
              ) : (
                <textarea
                  spellCheck="false"
                  className="from-text form-control"
                  placeholder="Type To Translate"
                  name="text"
                  value={audioAns}
                  // defaultValue={transcript}
                  // onChange={onChnage}
                />
              )}
            </div>

            <div class=" trans-text">
              <ul className="controls list-unstyled d-flex flex-wrap">
                <div class="col-2">
                  <li
                    className="exchange align-items-center justify-content-center row from"
                    // onClick={handleExchangeLanguages}
                  >
                    {/* <button
                        class="circle"
                        aria-label="Click to translate"
                        data-toggle="tooltip"
                        title="Translate"
                        // onClick={handleExchangeLanguages}
                      >
                        <span class="trans-btn-txt">
                          <FontAwesomeIcon icon={faExchangeAlt} />
                        </span>
                      </button> */}
                  </li>
                </div>
                <div class="col-4 gap-2 d-flex">
                  <li
                    className="rowControls to flex-grow-1"
                    style={{ float: "left" }}
                  ></li>
                  <div className="mt-3"></div>
                  <div className="icons d-flex align-items-start pl-2 gap-2">
                   
                    <button
                      className="btn play-button"
                      onClick={handleCopy}
                      title="Copy Text"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      className="btn play-button"
                      onClick={handleDownload}
                      title="Download"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                    {/* <button
                      className="btn play-button"
                      onClick={handleToggleListening}
                      title="Voice"
                    > */}
                    {/* <FontAwesomeIcon
                        icon={isListening ? faStop : faMicrophone}
                      /> */}
                    {/* mic */}
                    {/* {isListening ? "Stop Listening" : "Start Listening"} */}
                    {/* </button> */}

                    {/* <p>Microphone: {listening ? "on" : "off"}</p>
                    <button
                      onClick={() => {
                        SpeechRecognition.startListening({ continuous: true });
                      }}
                    >
                      Start
                    </button>
                    <button onClick={SpeechRecognition.abortListening}>
                      Stop
                    </button>
                    <button onClick={resetTranscript}>Reset</button> */}

                    {/* <button class="btn btn-primary" onClick={handlesubmit}>
                      Translate
                    </button> */}
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

export default AudioToText;
