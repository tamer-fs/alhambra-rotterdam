import React, { useState } from "react";
import "./gallery.css";
import Seperator from "../../components/seperator";
import Title from "../../components/title";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Gallery() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="app__gallery">
      <div className="app__gallery-title">
        <Title
          title="Foto gallerij"
          subTitle="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu."
        />
      </div>
      <div className="app__gallery-container">
        <div className="app__gallery-container-wrapper">
          {imgIndex == 0 && (
            <img
              src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/292385182_144147711610375_8086680924588452340_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=lhW5lbpQ_50AX-ZvGjU&_nc_ht=scontent-ams2-1.xx&oh=00_AfA2QbSnRBCigCHesqjREm4aDv_bWel12Gwgqo0vvDExCg&oe=65B43530"
              alt=""
            />
          )}
          {imgIndex == 1 && (
            <img
              src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/288557147_136502669041546_7672009977240144474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xCNUyx1Ei9UAX8sUqFH&_nc_ht=scontent-ams2-1.xx&oh=00_AfAwfSCSBS25vbwFUKqOunnBSFOl0RMZJv_dvF-hYwdAlg&oe=65B2C608"
              alt=""
            />
          )}
          {imgIndex == 2 && (
            <img
              src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/287251330_133957449296068_8496959021613548305_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QCaQfE2ijNcAX8Iz3Tz&_nc_ht=scontent-ams2-1.xx&oh=00_AfAFljo7LTN4ffy9vD0VK-4y3Kwt9HkDtIMo7XX4vpaOfg&oe=65B2B05E"
              alt=""
            />
          )}
          {imgIndex == 3 && (
            <img
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/287233457_133957445962735_1487115787099052554_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=0CDqXrgoV8IAX_qri58&_nc_ht=scontent-ams4-1.xx&oh=00_AfCDRAqLAY2y_TmlbeWth16BaxkNIupFVR4Hw2Sy36p1EA&oe=65B2EB49"
              alt=""
            />
          )}
          {imgIndex == 4 && (
            <img
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/336858502_2161438534060016_6563632574076202899_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=iYmZa0snsKcAX8LbVBL&_nc_ht=scontent-ams4-1.xx&oh=00_AfDn1BHIiSydUqX0xhR3MJA53B6PzTyFIu59ixIv9GoVBA&oe=65B3E84B"
              alt=""
            />
          )}
        </div>
        <div className="app__gallery-container-btn-container">
          <button
            className="app__gallery-container-btn"
            id="left"
            onClick={() => {
              if (!imgIndex <= 0) {
                setImgIndex(imgIndex - 1);
              }
            }}
          >
            <FontAwesomeIcon
              icon={faLeftLong}
              color={"#d3a26b"}
              fontSize={20}
            />
          </button>
          <button
            className="app__gallery-container-btn"
            onClick={() => {
              console.log(imgIndex);
              if (imgIndex < 4) {
                setImgIndex(imgIndex + 1);
              }
            }}
          >
            <FontAwesomeIcon
              icon={faRightLong}
              color={"#d3a26b"}
              fontSize={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
