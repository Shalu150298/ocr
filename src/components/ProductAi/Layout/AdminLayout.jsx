import React from "react";
// import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Homepage/css/home.css";
import Abstract from "../Pages/Abstraction/Abstract";
import Extract from "../Pages/Extractions/Extract";
import "../Homepage/img/favicon.png";
import Profile from "../Pages/Profile/Profile";
import Translate from "../Pages/Translate/Translate";
import Documents from "../Pages/OCR/Documents";
import Aadhar from "../Pages/AadharCard/Aadhar";
import Cheque from "../Pages/Cheque/Cheque";
import Driving from "../Pages/Driving/Driving";
import Pancard from "../Pages/PanCard/Pancard";

import Invoice from "../Pages/Invoice/Invoice";
import Textscanner from "../Pages/TextScanner/Textscanner";
import Multicropping from "../Pages/Multicropping/Multicropping";
import Scan from "../Pages/ScanDoc/Scan";
import Cipher from "../Pages/Cipher/Cipher";
import ContentWriting from "../Pages/Content Writing/ContentWriting";
import Rcbook from "../Pages/RcBook/Rcbook";
import Front from "../Pages/AadharCard/Front";
import Back from "../Pages/AadharCard/Back";
import DocumentTranslate from "../Pages/DocumentTranslate/DocumentTranslate";
import AudioToText from "../Pages/Translate/AudioToText";
import Passport from "../Pages/PassPort/PassPort";

const AdminLayout = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <main id="main" class="main">
        <Routes>
          <Route path="" element={<Translate />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="home" element={<Translate />} />
          <Route path="Abstract" element={<Abstract />} />
          <Route path="Extract" element={<Extract />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Scan" element={<Scan />} />
          <Route path="Cipher" element={<Cipher />} />
          <Route path="ContentWriting" element={<ContentWriting />} />
          <Route path="DocumentTranslate" element={<DocumentTranslate/>}/>
          <Route path="AudioToText" element={<AudioToText/>}/>
          {/* OCR */}
          <Route path="Documents" element={<Documents />} />
          <Route path="Aadhar" element={<Aadhar />} />
          <Route path="Cheque" element={<Cheque />} />
          <Route path="Driving" element={<Driving />} />
          <Route path="Pancard" element={<Pancard />} />
          <Route path="PassPort" element={<Passport/>}/>
          <Route path="Invoice" element={<Invoice />} />
          <Route path="Multicropping" element={<Multicropping />} />
          <Route path="Textscanner" element={<Textscanner />} />
          <Route path="RcBook" element={<Rcbook/>}/>
          <Route path="Front" element={<Front/>}/>
          <Route path="Back" element={<Back/>}/>
         
          {/* end OCR */}
        </Routes>
      </main>
      <footer id="footer" class="footerAdmin ">
        <div class="copyright">
          &copy; Copyright
          <strong>
            <span> CLOUDSTRATS</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          {/* Designed by <Link to="https://cloudstrats.com/">Cloudstrats</Link> */}
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
