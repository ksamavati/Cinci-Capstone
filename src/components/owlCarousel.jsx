import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img
          src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328194-2590-FCBD-5A4FCA54E307E0AB.jpg"
          alt="road"
        />
      </div>
      <div className="item">
        <img
          src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
          alt="sunrise"
        />
      </div>
      <div className="item">
        <img
          src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
          alt="road2"
        />
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;