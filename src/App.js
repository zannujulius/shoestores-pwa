import React from "react";
// import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import nike from "./assets/images/nike.png";
import usain from "./assets/images/usain.png";
import SideNav from "./components/SideNav";

function App() {
  const imageLink =
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";

  const handleLeft = () => {};
  const handleRight = () => {};

  return (
    <>
      <Nav />
      <Body>
        {/* <div className="slider">
          <img src={imageLink} alt="sliderimage" className="img" lazy />
        </div> */}
        <div
          className="hero-cover"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="hero-title">the Bold Walk</div>
          <div className="hero-caption">define your way foward</div>
          <div className="hero-btn">
            <div>Shop</div>
          </div>
        </div>

        {/* slider shoes */}
        <div className="new-btn__cover">
          <div className="btns">
            <div className="new-btn__nav" onClick={() => handleLeft()}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="new-btn__nav" onClick={() => handleRight()}>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="new-cover">
            <div className="new-item__scroll">
              {[1, 2, 3, 4, 5, 6].map((e, index) => (
                <div className="new-item">
                  <div className="new-item__image">
                    <img src={nike} alt="" lazy />
                  </div>
                  <div className="new-item__details">
                    <div className="new-item__left">
                      <div className="new-item__name">Nike Air Huarache</div>
                      <div className="new-item__title">Men's Shoes</div>
                    </div>
                    <div className="new-item__right">
                      <div className="new-item__price">R2343,35</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="hero-cover"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="hero-title">change the tangentory</div>
          <div className="hero-caption">
            define your way forward with huarache
          </div>
          <div className="hero-btn">
            <div>Shop</div>
          </div>
        </div>

        <div className="gallery">
          {[1, 2, 3, 4, 5, 6].map((e, index) => (
            <div className="gallery-item">
              <div className="gallery-image">
                <div
                  style={{
                    width: "80%",
                    height: "80%",
                    // background: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={usain} alt="usain shoes" lazy />
                </div>
              </div>
              <div className="gallery__details">
                <div className="gallery__left">
                  <div className="gallery__name">Nike Air Huarache</div>
                  <div className="gallery__title">Men's Shoes</div>
                </div>
                <div className="gallery__right">
                  <div className="gallery__price">R2343,35</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
}

export default App;
