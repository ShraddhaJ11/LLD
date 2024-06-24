import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import LiveChat from "./components/live-chat/LiveChat";
import NestedComments from "./components/nested-comments/NestedComments";
import Pagination from "./components/pagination/Pagination";
import SearchUI from "./components/search-ui/SearchUI";
import About from "./components/About";
import ProtectRoute from "./components/ProtectRoute";
import Login from "./components/Login";
import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <header className="text-2xl font-bold py-5 px-2 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-[1000px] flex justify-between text-lg">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/about">About</a>
          <a href="/pagination">Pagination</a>
          <a href="/search">Search</a>
          <a href="/image-slider">Image Slider</a>
          <a href="/accordion">Accordion</a>
          <a href="/nested-commnets">Nested Comments</a>
          <a href="/live-chat">Live Chat</a>
        </nav>
        <select
          className="text-black"
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* empty route: without path */}
          <Route element={<ProtectRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
            <Route path="/image-slider" element={<ImageSlider />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/nested-commnets" element={<NestedComments />}></Route>
            <Route path="/live-chat" element={<LiveChat />}></Route>
          </Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/search" element={<SearchUI />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
