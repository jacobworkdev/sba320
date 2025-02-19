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

  const fetchRandomImage = async () => {
    const response = await fetch(`https://picsum.photos/${width}/${height}?random=1`);
    setImageUrl(response.url);

  };

  return (
    <div>
      <h1>Search Images from Lorem Picsum</h1>
      <div>
        <label>Width: </label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        <label> Height: </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        <label> Seed (optional): </label>
        <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} />
        <label>
          <input type="checkbox" checked={grayscale} onChange={(e) => setGrayscale(e.target.checked)} />
          Grayscale
        </label>
        <label> Blur: </label>
        <input type="number" min="0" max="10" value={blur} onChange={(e) => setBlur(e.target.value)} />
        <button onClick={fetchImages}>Search</button>
        <button onClick={fetchRandomImage}>Random Image</button>
      </div>
      <div className="gallery">
        {imageUrl && <img src={imageUrl} alt="Random" className="image" />}
      </div>
    </div>
  );


  const About = () => (
    <div>
      <h1>About</h1>
      <p>This is a simple React app where you can search for images with specific dimensions and effects like grayscale and blur.</p>
    </div>
  );


  function App(){
    return(
      <Router></Router>
    )
  }


}

export default App;
