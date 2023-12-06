import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Product from "./components/Product";
import Videocard from "./components/Videocard";
import Piccard from "./components/Piccard";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
import Collection from "./components/Collection";



function App() {
  return (
    <div className="main">
      <Topbar />
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Product />
      <Videocard />
      <Footer />
    </div>
  );
}

export default App;
export const appRouter = createBrowserRouter([{
    path:"/",
    element:<App />
},{
    path:"/collections",
    element:<Collection />
}
])
