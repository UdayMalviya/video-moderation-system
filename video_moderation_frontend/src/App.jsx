import React from "react";
import VideoUpload from "./video.jsx";

import VideoList from "./VideoList.jsx";
import LiveStream from "./LiveStream.jsx";
import {BrowserRouter, Route, Routes } from "react-router"
import Nav from "./Navbar.jsx";


function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<VideoList></VideoList>}></Route>
      <Route path="/live_stream" element={<VideoList/>}></Route>
      <Route path="/upload-video" element={<VideoUpload/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;