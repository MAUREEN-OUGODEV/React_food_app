import React from 'react';
import Burger from '../../foodPhotos/burger.jpeg';
import Pizza from '../../foodPhotos/Pizza .jpeg';
import Chips from '../../foodPhotos/chips.jpeg';
import './style.css';


const FastFood=()=>{
    return(
        <div className='main'>
            <div className='container fast'>
            <div className='row'>
                <div className='col-md-4'>
             
                
                    <h1 className='delivery'>Fast Delivery</h1>
                    <p>The Food Will Be Delivered To Your Home within 1-2 Hours of Your Order</p>
                </div>
                <div className='col-md-4'>
              
                    <h1  className='delivery'>Fresh Food</h1>
                    <p>Your Food Will Be Delivered 100% Fresh To Your Home, We Do Not Deliver Stale Food</p>

                </div>
                <div className='col-md-4'>
               
                    <h1  className='delivery'>Free Delivery</h1>
                    <p>Your Food Delivery Is Absoultely Free, No Cost Just Order And Enjoy</p>

                </div>

            </div>

        </div>
        <div className='mainTwo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='best'>Best <span className='deliy'>Delivered</span> Categories</h1>

                    </div>
                    <div className='col-md-6 here'>
                        <p>Here Are Some Of Our Best Distributed Categories. If You Want You Can Order From Here.</p>

                    </div>
                    

                </div>

            </div>

        </div>
        <div className='mainThree'>
            <div className='container-fluid'>
                <div className='row'>
                 <div className='col-md-4 burger'>
                    <img src={Burger}alt=''/>
                    <h1>Chicken Burger</h1>
                    <button type="button" class="btn btn-light">Order Now <i class="bi bi-arrow-right"></i></button>
                    </div> 

                    <div className='col-md-4 burger'>
                    <img src={Pizza}alt=''/>
                    <h1>Chicken Pizza</h1>
                    <button type="button" class="btn btn-light">Order Now<i class="bi bi-arrow-right"></i></button>
                    </div>   

                    <div className='col-md-4 burger'>
                    <img src={Chips}alt=''/>
                    <h1>French Fries</h1>
                    <button type="button" class="btn btn-light">Order Now<i class="bi bi-arrow-right"></i></button>
                    </div>     

                </div>

            </div>

        </div>
        </div>
    )

}
export default FastFood;