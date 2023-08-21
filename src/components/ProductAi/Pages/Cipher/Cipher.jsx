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
import { encrDecr } from "../../../../core/Apis/cypher/cypher";
import { ColorRing } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cipher = () => {
  const [operation, setOperation] = useState();
  const [operationAns, setOperationAns] = useState();
  const [loader, setLoader] = useState();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOperation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("api hit");
    setLoader(true);
    encrDecr(operation)
      .then((data) => {
        console.log(data);
        setLoader(false);
        setOperationAns(data.data.result);
      })
      .catch((e) => {
        setLoader(false);
        console.log(e);
      });
  };

  // copy
  const textareaRef = useRef(null);
  const handleCopy = () => {
    toast.success("copy text");
    navigator.clipboard.writeText(operationAns);
  };

  const handleDownload = () => {
    const blob = new Blob([operationAns], { type: "text/plain" });
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
        <div className=" row justify-content-center mainURl  g-3  pb-2">
         
        </div>
        <div id="text">
          <div className="main-wrapper">
            <div class="container-flued">
              <div className=" d-flex p-0">
                <div className="col-5 col-md-5 col-sm-5  p-0">
                  <span className="px-2 mt-2" style={{ fontWeight: "400" }}>
                    Cipher 
                  </span>
                </div>
              </div>
              <div className="wrapper mt-3">
                <div className="text-input d-flex trans-text-icon">
                  <div className=" col-lg-6 col-md-12 text-input text-input-summ d-flex ">
                    <textarea
                      spellCheck="false"
                      className="from-text form-control"
                      placeholder="Input"
                      name="message"
                      onChange={onChange}
                    />
                  </div>
                  <div className=" col-lg-6 col-md-12 text-input text-input-summ d-flex justify-content-center align-items-center ">
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
                        disabled
                        value={operationAns}
                        className="to-text form-control"
                        placeholder="Output"
                      />
                    )}
                  </div>
                </div>

                <div className=" row   icon-container justify-content-center mt-1 p-2 ">
                  <div class="col-md-6 trans-text1  d-flex flex-wrap">
                    <div class="col-sm-3 text-center ">
                      <input
                        class="form-control"
                        type="text"
                        placeholder=" Enter key"
                        name="key"
                        onChange={onChange}
                      />
                    </div>

                    <div class="col-sm-2 text-center ">
                      <select
                        className="form-select text-center"
                        name="operation"
                        onChange={onChange}
                      >
                        <option>Select </option>

                        <option value="encrypt">
                          <span>Encrypt</span>
                        </option>
                        <option value="decrypt">
                          <span>Decrypt</span>
                        </option>
                      </select>
                    </div>

                    <div class="col-sm-2 text-center">
                      <Button
                        className="btn convert btn-primary "
                        type="submit"
                        onClick={handleSubmit}
                        style={{ fontSize: "13px" }}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>

                  <div className=" col-md-6 text-end d-flex flex-wrap  ">
                    <div class="col-sm-12 align-self-center">
                      <button
                        className="btn play-button px-1"
                        onClick={handleCopy}
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </button>
                      <button
                        className="btn play-button px-1"
                        onClick={handleDownload}
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cipher;
