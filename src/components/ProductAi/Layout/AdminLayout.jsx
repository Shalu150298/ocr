import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Homepage/css/home.css";
import Abstract from "../Pages/Abstraction/Abstract";
import Extract from "../Pages/Extractions/Extract";
import "../Homepage/img/favicon.png";
import Profile from "../Pages/Profile/Profile";
import Translate from "../Pages/Translate/Translate";
import DocumentTranslate from "../Pages/DocumentTranslate/DocumentTranslate";


const AdminLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main id="main" class="main">
        <Routes>
          <Route path="" element={<Translate />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="home" element={<Translate />} />
          <Route path="Abstract" element={<Abstract />} />
          <Route path="Extract" element={<Extract />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="DocumentTranslate" element={<DocumentTranslate />} />
        

        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
