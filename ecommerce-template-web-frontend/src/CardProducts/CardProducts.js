import React from "react";
import Item from "./Items";
import Carousel from "react-elastic-carousel";
import "./styles.css";
import image from "../assets/images/img-9.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CardProducts() {
  return (
    <>
      <h1 className="heading_text">Male Products</h1>

      <div className="app">
        <Carousel className="carousel" breakPoints={breakPoints}>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <label className="card-heading">$20</label>
              <br />
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
        </Carousel>
      </div>
      <h1 className="heading_text">Female Products</h1>

      <div className="app">
        <Carousel className="carousel" breakPoints={breakPoints}>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <label className="card-heading">$20</label>
              <br />
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
          <Item>
            <div className="card-body">
              <img className="card-image" src={image} />
              <h5 className="card-heading">Product</h5>
              <p className="card-heading">$20</p>
              <button className="card-button">Submit</button>
            </div>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default CardProducts;
