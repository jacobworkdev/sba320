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

}