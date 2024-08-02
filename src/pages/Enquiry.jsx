import React from "react";
import EnquiryFOrm from "../components/EnquiryFOrm";
import Programs from "../components/Programs";
import GIT60sec from "../components/GIT60sec";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Placements from "../components/Placements";
import Ranking from "../components/Raanking";
import Footer from "../components/Footer";

function Enquiry() {
  return (
    <div>
      <EnquiryFOrm />
      <Programs />
      {/* <GIT60sec /> */}
      <Reviews />
      <h1 className="gallery__heading">Gallery</h1>
      <Gallery />
      <Placements />
      <Ranking />
      <Footer />
    </div>
  );
}

export default Enquiry;
