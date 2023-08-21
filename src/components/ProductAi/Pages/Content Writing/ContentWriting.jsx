import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Pages/Content Writing/ContentWritting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorRing } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCopy,
  faDownload,
  faSearch,
  faUndo,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { writing } from "../../../../core/Apis/content_writing/content_writing";

const ContentWriting = () => {
  const [cont, setCont] = useState("");
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState(false);

  const onChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCont((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    writing(cont)
      .then((data) => {
        console.log(data);
        console.log(data.data.Response);
        setLoader(false);
        setContent(data.data.Response);
      })
      .catch((e) => {
        console.log(e);
        setLoader(false);
      });
  };
  const handleCopy = () => {
    toast.success("copy text");
    navigator.clipboard.writeText(content);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "textFile.txt";
    link.click();

    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);

    toast.info("Text file downloaded");
  };

  const handleRefresh = () => {
    setEditorHtml("");
  };

  const [editorHtml, setEditorHtml] = useState("");
  const [theme, setTheme] = useState("snow");
  const quillRef = useRef(null);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleThemeChange = (newTheme) => {
    if (newTheme === "core") newTheme = null;
    setTheme(newTheme);
  };

  useEffect(() => {
    const quill = quillRef.current.getEditor();
    quill.on("text-change", () => {
      const newContent = quill.root.innerHTML;
      setEditorHtml(newContent);
    });
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const handleReset = () => {
    // Reset the editor's content to an empty state
    setEditorHtml("");
  };
  // Function to count words in a given text
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  // WordCounter component

  return (
    <div>
      <div id="text" className="mt-2">
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
        <div className="main-wrapper row">
          <div className="card-body">
            <div className="  d-flex px-3   ">
              <div className="  p-0">
                <h6 className="px-2 span_icon">
                  <span style={{ fontWeight: "400" }}>Keywords </span>
                  <i className="bi bi-question-circle px-2"></i>
                </h6>
              </div>
              <div className="col ">
                <div className="icons justify-content-end  px-4 ">
                  <div className=" px-3 col-lg-6 ">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="content"
                      onChange={onChnage}
                      placeholder="Enter Words Count"
                    />
                  </div>
                  <Button
                    className="btn convert btn-primary text-center search_btn  "
                    type="submit"
                    onClick={handleSubmit}
                    style={{ fontSize: "13px" }}
                  >
                    <FontAwesomeIcon icon={faSearch} /> Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="app"></div>
          </div>
          <div className="col-lg-11 ">
            {loader ? (
              <div className="text-center Loading_loder mt-5">
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
              <ReactQuill
                className="quill-editor-full"
                ref={quillRef}
                theme={theme}
                onChange={handleChange}
                defaultValue={(content)}
                // defaultValue={content}
                modules={modules}
                formats={formats}
                bounds={".app"}
                placeholder={"Write something... "}
              />
            )}
          </div>
          <div className="col-lg-1 mt-4  px-4 side_buttons">
            <div className="mt-3">
              <Button className="btn btn-primary mb-2" onClick={handleDownload}>
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>

            <div className="mt-3">
              <Button className="btn btn-primary mb-2" onClick={handleCopy}>
                <FontAwesomeIcon icon={faCopy} />
              </Button>
            </div>
            <div className="mt-3">
              <Button className="btn btn-danger mb-2" onClick={handleReset}>
                <FontAwesomeIcon icon={faUndo} />
              </Button>
            </div>
            <div className="mt-3">
              <Button className="btn btn-danger mb-2" onClick={""}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </div>
            {/* <div className="mt-3">
                <WordCounter content={editorHtml} />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWriting;
