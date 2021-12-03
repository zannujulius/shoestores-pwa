import React, { useState, useEffect } from "react";
// import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import nike from "./assets/images/nike.png";
import usain from "./assets/images/usain.png";
// import SideNav from "./components/SideNav";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import DatePicker from "react-modern-calendar-datepicker";
let deferredPrompt;

function App() {
  // const [selectedDay, setSelectedDay] = useState(null);
  const [installable, setInstallable] = useState(false);

  const imageLink =
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60";
  const handleLeft = () => {};
  const handleRight = () => {};

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      alert(deferredPrompt, "line 15");
      setInstallable(true);
    });
  }, []);

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
                <div className="new-item" key={index}>
                  <div className="new-item__image">
                    <img src={nike} alt="" />
                  </div>
                  <div className="new-item__details">
                    <div className="new-item__left">
                      <div className="new-item__name">Nike Air XRPlus</div>
                      <div className="new-item__title">Men's Shoes</div>
                    </div>
                    <div className="new-item__right">
                      <div className="new-item__price">N23,455.99</div>
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
          <div className="hero-title">Just Sneak IT</div>
          <div className="hero-caption">define your path</div>
          <div className="hero-btn">
            <div>Shop</div>
          </div>
        </div>
        <div className="gallery">
          {[1, 2, 3, 4, 5, 6].map((e, index) => (
            <div className="gallery-item" key={index}>
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
                  <img src={usain} alt="usain shoes" />
                </div>
              </div>
              <div className="gallery__details">
                <div className="gallery__left">
                  <div className="gallery__name">Nike Air XRPlus</div>
                  <div className="gallery__title">Men's Shoes</div>
                </div>
                <div className="gallery__right">
                  <div className="gallery__price">N23,455.99</div>
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
