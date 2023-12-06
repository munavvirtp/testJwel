import React from 'react'
import './Collection.css'
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subbar from "./Subbar";
//import Items from "./Items";
// import ImageSlid from './ImageSlide';
// import { SlidData } from './SlidData';
// import slideshow from "./Slideshow";
import lekshya from '.lekshya';
import { LekshyaData } from './LekshyaData';


function Collection() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Subbar />
{/*             <ImageSlid slides={SlidData} /> */}
{/*             <slideshow /> */}
{/*             <Items /> */}
            <Footer />
        </div>
    )
}

export default Collection