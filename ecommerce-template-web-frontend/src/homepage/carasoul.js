import React from "react";
import Carousel from "react-elastic-carousel";
import "./carasoul.css";

// export function myArrow({ type, onClick, isEdge }) {
//   const pointer = type === consts.PREV ? null : null;
//   return (
//     <button onClick={onClick} disabled={isEdge}>
//       {pointer}
//     </button>
//   );
// }
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

export default function Carasoul() {
  return (
    <>
      <div className="carasoul">
        <Carousel
          enableAutoPlay={Infinity}
          autoPlaySpeed={1500}
          showArrows={false}
          disableArrowsOnEnd={false}
        >
          <div className="item">
            <img src="images/hoddie.jpg" className="card_size" />
          </div>
          <div className="item">
            <img src="images/nike.jpg" className="card_size" />
          </div>
          <div className="item">
            <img src="images/jogger.jpg" className="card_size" />
          </div>
          <div className="item">
            <img src="images/hoddie.jpg" className="card_size" />
          </div>
          <div className="item">
            <img src="images/nike.jpg" className="card_size" />
          </div>
          <div className="item">
            <img src="images/jogger.jpg" className="card_size" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

