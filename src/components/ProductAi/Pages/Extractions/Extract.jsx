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
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { keyword } from "../../../../core/Apis/keyword/keywords";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import { extract } from "../../../../core/Apis/extract/extract";

const Extract = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [isVisibleone, setIsVisibleone] = useState(false);
  // const toggleVisibilityone = () => {
  //   setIsVisibleone(!isVisibleone);
  // };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
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

  // document hide and show

  const [isVisiblecon, setIsVisiblecon] = useState(false);
  const [isVisibleconhide, setIsVisibleconhide] = useState(true);

  const toggleVisibilitycon = () => {
    setIsVisiblecon(!isVisiblecon);
    setIsVisibleconhide(!isVisibleconhide);
  };

  const [extractText, setExtractText] = useState("");
  const [summerization, setSummerization] = useState("");
  const [keywords, setKeywords] = useState("");
  const [keywordsans, setKeywordsAns] = useState([]);
  const [loader, setloder] = useState(false);
  const [keyloader, setKeyLoader] = useState(false);

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
    setloder(true);
    extract(extractText)
      .then((data) => {
        console.log(data);
        console.log(data.data.Response);
        setloder(false);
        setSummerization(data.data.Response);
      })
      .catch((e) => {
        console.log(e);
        setloder(false);
      });
  };

  const keywordsubmit = async (e) => {
    e.preventDefault();
    console.log("api hit");
    setKeyLoader(true);
    keyword(keywords)
      .then((data) => {
        console.log(data);

        console.log(data.data.Keywords_list);
        setKeyLoader(false);
        setKeywordsAns(data.data.Keywords_list);
      })
      .catch((e) => {
        console.log(e);
        setKeyLoader(false);
      });
  };

  const [selectedFileName, setSelectedFileName] = useState(
    "Select Text File or upload"
  );
  const handleFileChange = (event) => {
    setSelectedFileName(event.target.files[0].name);
  };

  // copy

  // copy
  const textareaRef = useRef(null);
  const handleCopy = () => {
    toast.success("copy text");
    navigator.clipboard.writeText(summerization);
  };

  const handleKeyCopy = () => {
    toast.success("copy text");
    navigator.clipboard.writeText(keywordsans);
  };
  const handleDownload = (e) => {
    e.preventDefault();
    const blob = new Blob([summerization], {
      type: "text/plain",
    });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "textFile.txt";
    link.click();

    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);

    toast.info("Text file downloaded");
  };

  const handleKeyDownload = (e) => {
    e.preventDefault();
    const blob = new Blob([keywordsans], {
      type: "text/plain",
    });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "textFile.txt";
    link.click();

    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);

    toast.info("Text file downloaded");
  };

  return (
    <section class="section1">
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
      <div className="p-0 py-3 pl-0 pl-lg-5" id="main_text">
        
          {/* <div className=" row justify-content-center mainURl  g-3  pb-2">
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
                />
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
          </div> */}

          <div id="text">
            <div className="main-wrapper">
              {isVisibleconhide && (
                <div class="container-flued">
                  <div className=" d-flex p-0">
                    <div className="col-5 col-md-5 col-sm-5  p-0">
                      <h6 className="px-2 mt-2">
                        <span style={{ fontWeight: "400" }}>Extract Text </span>
                        {/* <i className="bi bi-question-circle px-2"></i> */}
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
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper mt-3">
                    <div className="text-input d-flex trans-text-icon">
                      <div className="col-lg-6 col-md-12 d-flex flex-wrap ">
                        <textarea
                          spellCheck="false"
                          className="from-text form-control"
                          placeholder="Enter or paste your text and press 'Summarize.'"
                          name="text"
                          onChange={onChnage}
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 d-flex flex-wrap justify-content-center align-items-center ">
                        {loader ? (
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
                        ) : (
                          <textarea
                            spellCheck="false"
                            readOnly
                            value={summerization}
                            className="to-text form-control"
                            placeholder="Summarize text"
                          />
                        )}
                      </div>
                    </div>

                    <div className=" row   icon-container justify-content-center mt-1 p-2 ">
                      <div class="col-md-6 trans-text1  d-flex flex-wrap"></div>

                      <div className=" col-md-6 text-end d-flex flex-wrap  ">
                        <div class="col-sm-6 align-self-center">
                          

                          <button
                            className="btn play-button px-1 "
                            title="Copy"
                            onClick={handleCopy}
                          >
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                          <button
                            className="btn play-button px-1"
                            title="Download"
                            onClick={handleDownload}
                          >
                            <FontAwesomeIcon icon={faDownload} />
                          </button>
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
                            style={{ fontSize: "13px" }}
                            onClick={toggleVisibility}
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
        
      </div>

      {isVisible && (
        <div className=" " id="text">
          <div className="main-wrapper   " style={{ display: "contents" }}>
            <div className="  d-flex p-0">
              <div className="col-6 col-md-5 col-sm-6 ">
                <h6 className="px-2 mt-2">
                  <span style={{ fontWeight: "400" }}>Keywords </span>
                  {/* <i className="bi bi-question-circle px-2"></i> */}
                </h6>
              </div>
            </div>
            <div className=" text-center align-items-center pt-2">
              <div className=" text-input wrapper ">
                {/* <div
                        className="textarea-container "
                        style={{ width: "100%" }}
                      >
                        <textarea
                          spellCheck="false"
                          className="from-text form-control to-text1"
                          // placeholder="Translation"
                          ref={textareaRef}
                        />
                      </div> */}

                {/* <div className="text-input text-input-summ d-flex ">
                  <textarea
                    spellCheck="false"
                    className="from-text form-control"
                    placeholder="Enter or paste your text and press 'Summarize.'"
                    name="summarized_text"
                    onChange={onChnage}
                  />
                  {keyloader ? (
                    <p>Loading</p>
                  ) : (
                    <textarea
                      spellCheck="false"
                      readOnly
                      value={keywordsans}
                      className="to-text form-control"
                      placeholder="Summarize text"
                    />
                  )}
                </div> */}

                <div className="text-input d-flex trans-text-icon">
                  <div className="col-lg-6 col-md-12 d-flex flex-wrap ">
                    <textarea
                      spellCheck="false"
                      className="from-text form-control"
                      placeholder="Enter or paste your text and press 'Summarize.'"
                      name="summarized_text"
                      onChange={onChnage}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 d-flex flex-wrap ">
                    {keyloader ? (
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
                    ) : (
                      <textarea
                        spellCheck="false"
                        readOnly
                        value={keywordsans}
                        className="to-text form-control"
                        placeholder="Summarize text"
                      />
                    )}
                  </div>
                </div>

                <div className=" row   icon-container align-items-center  pt-2">
                  <div class="col-md-8 trans-text1  d-flex flex-wrap">
                    {/* <div>
                      <p className="px-2">Words:133 </p>
                    </div>

                    <div>
                      <p> Language: Hindi</p>
                    </div> */}
                  </div>

                  <div className="row col-lg-6">
                    <div className=" icons justify-content-start px-4 mb-2 ">
                      <div className="dropdown  ">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="character_count"
                          onChange={onChnage}
                        >
                          <option>Word Length</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className=" px-3 ">
                        <input
                          type="text"
                          name="top_word"
                          onChange={onChnage}
                          class="form-control"
                          id="inputEmail4"
                          placeholder=" Enter Words Count"
                        />
                      </div>

                      <div
                        className="  text-end "
                        // id="doc_btn"
                      >
                        <button
                          type="submit"
                          style={{ fontSize: "13px" }}
                          className="btn convert btn-primary d-flex"
                          onClick={keywordsubmit}
                        >
                          {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                          Convert
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" col-6  text-end ">
                   
                    <button
                      className="btn play-button px-1"
                      title="Copy"
                      onClick={handleKeyCopy}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      className="btn play-button px-1"
                      title="Download"
                      onClick={handleKeyDownload}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Extract;
