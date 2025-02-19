import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//states
const Home = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [grayscale, setGrayscale] = useState(false);
  const [blur, setBlur] = useState(0);
  const [seed, setSeed] = useState("");
  const [imageUrl, setImageUrl] = useState("");



  const fetchImages = () => {
    let url = `https://picsum.photos/`;
    if (seed) {
      url += `seed/${seed}/`;
    }
    url += `${width}/${height}`;
    if (grayscale || blur > 0) {
      url += "?";
      if (grayscale) url += "grayscale&";
      if (blur > 0) url += `blur=${blur}&`;
    }
    url += "?random=1"; // Ensures new image fetch
    setImageUrl(url);
  };

}