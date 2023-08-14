import React from "react";
import Sandwitch from'../../foodPhotos/sandwich.png';
import './style.css';


const HomePage=()=>{
    return(
        <div className="container homepage">
            <div className="row">
            <div className="col-md-6 headings">
                <h1 className="foodie">All Fast Food is Available at Foodie</h1>
                <p>We are just aA Click Away When You CraveFor Delicious Fast Food</p>
               <div className="fast-button">
               <button type="button" id="buy" class="btn btn-danger btn-lg"><i class="bi bi-bag-check"></i>Buy Now</button>
                <button type="button" id="order" class="btn btn-light btn-lg">How To Order</button>
               </div>

            </div>
            <div className="col-md-6 sandwich">
            <img src={Sandwitch} alt="sandwithc" />

            </div>

            </div>

        </div>
       



    )
}
export default HomePage;