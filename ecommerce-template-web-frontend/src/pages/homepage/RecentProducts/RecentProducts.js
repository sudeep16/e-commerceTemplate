import React from "react";
import "./RecentProducts.scss";

function RecentProducts() {
  return (
    <>
      <div class="boxContainer">
        <table class="elements">
          <tr>
            <td>
              <input type="text" placeholder="Search" class="search" />
            </td>
            <td>
              <i class="fas fa-search search-icon"></i>
            </td>
          </tr>
        </table>
      </div>
      <h1 class="recent-heading">Recently Added</h1>
      <div class="recent-product">
        <div class="cards">
          <div class="card content">
            {/* <div class="card-content"> */}
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Gamer"
              />
              <div class="card-label">E-Sports</div>
              <div class="card-title">
                Fnatic raises $19 million, shakes up leadership team
              </div>
            </div>
          </div>
          <div class="card content">
            {/* <div class="card-content"> */}
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="keyboard"
              />
              <div class="card-label">Technology</div>
              <div class="card-title">Google Stadia: The Future of Gaming</div>
            </div>
          </div>
          <div class="card content">
            {/* <div class="card-content"> */}
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                alt="Controller"
              />
              <div class="card-label">Consoles</div>
              <div class="card-title">PS5 won't launch before mid-2020</div>
            </div>
          </div>
          <div class="card form">
            <div class="form-title">Sign Up</div>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default RecentProducts;
