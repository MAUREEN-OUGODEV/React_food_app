import React from "react"; 
import Offer from '../../foodPhotos/buy.png' ;
import './style.css';
import BurgerOne from '../../foodPhotos/bugerOne.jpeg';
import BurgerTwo from '../../foodPhotos/BurgerTwo.jpeg';
import BurgerThree from '../../foodPhotos/burgerThree.jpeg';
import BurgerFour from '../../foodPhotos/burgerfour.jpeg';
import BurgerFive from '../../foodPhotos/burgefive.jpeg';
import BurgerSix from '../../foodPhotos/burgerSix.jpeg';

export const images = [
    {
        img : BurgerOne,
        title : "Chicken Burger" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },
    {
        img : BurgerTwo,
        title : "Chicken Burger" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },
    {
        img : BurgerThree,
        title : "Chicken pizza" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },
    {
        img : BurgerFour,
        title : "Chicken Fried" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },{
        img : BurgerFive,
        title : "Grill Sandwich" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },{
        img : BurgerSix,
        title : "Tarco taifi" ,
        stars: "",
        tag : (160),
        price :"$3.50",
        button : "Buy Now"
    },
]
const Menu =()=>{
  
    return(
        <div className="Menu-bar">
            <div className="container menu-regular">
                <div className="row">
                    <div className="col-md-8 menu"> 
                    <h1>Our <span className="Regular">Regular </span>Menu</h1>
                    <p>These Are Our Regular Menus.You Can Order Anything You Like</p>

                    </div>
                   <div className="col-md-4">
                   <button type="button" class="btn btn-danger btn-lg">See All</button>

                   </div>
                </div>

            </div>
            <div className=" container sample-menu">
            {images.map((image, index) => (
          <div className="menu-item" key={index}>
            <img src={image.img} alt="Product" className="product-image" />
            <div className="product-details">
            <h1>{image.title}</h1>
              <div className="product-stars">
                {image.stars}  {image.tag}
                </div>
              <div className="product-price">
                {image.currency}
               <button  className=" btn btn-lg  btn-warning product-button">{image.buttonText}Buy Now</button>
                </div>
            </div>
          </div>
        ))}

            </div>
            <div className="offer">
            <div>
                <img src={Offer} alt=""/>

            </div>

            </div>

        </div>
    )
}
export default Menu;