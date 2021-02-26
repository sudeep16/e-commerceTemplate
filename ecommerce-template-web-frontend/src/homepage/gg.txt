import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import "./carasoul.css";

export default class Carosoul extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "310px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      cursor: "pointer",
    };
  }

  static get CARD_STYLE() {
    var mql = window.matchMedia("(max-width: 650px)");
    mql.addEventListener("change", (e) => {
      if (e.matches) {
        return {
          height: "150px",
          margin: "0px",
          textAlign: "center",
          background: "#52C0F5",
          cursor: "pointer",
          color: "#FFF",
          fontFamily: "sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          borderRadius: "20px",
          boxShadow: "0px 5px #888888",
          boxSizing: "border-box",
        };
      } else {
        return {
          height: "350px",
          margin: "0px",
          textAlign: "center",
          background: "#52C0F5",
          cursor: "pointer",
          color: "#FFF",
          fontFamily: "sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          borderRadius: "20px",
          boxShadow: "0px 5px #888888",
          boxSizing: "border-box",
        };
      }
    });
  }

  render() {
    return (
      <>
        <div className="whole_container">
          <h1>Products</h1>
          <div style={Carosoul.CONTAINER_STYLE}>
            <ReactCardCarousel>
              <div style={Carosoul.CARD_STYLE}>
                <img src="images/hoddie.jpg" className="card_size" />
              </div>
              <div style={Carosoul.CARD_STYLE}>
                <img src="images/nike.jpg" className="card_size" />
              </div>
              <div style={Carosoul.CARD_STYLE}>
                <img src="images/jogger.jpg" className="card_size" />
              </div>
              <div style={Carosoul.CARD_STYLE}>
                <img src="images/img-4.jpg" className="card_size" />
              </div>
              <div style={Carosoul.CARD_STYLE}>
                <img src="images/img-5.jpg" className="card_size" />
              </div>
            </ReactCardCarousel>
          </div>
        </div>
      </>
    );
  }
}