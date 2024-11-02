import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/videos/:id" element={<HomePage />} />
<Route path="/upload" element={<VideoUploadPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;





