import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            <div className="home_row">
                <Product 
                id="12321351"
                title="The Lean Startup" 
                price={29.99} 
                image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating= {5}  
                />
                <Product
                id="49538094"
                title="Kendwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and  Whisk, 5 Litre Glass Bowl"
                price={239.0}
                image="https://i5.walmartimages.ca/images/Enlarge/001/5_2/999999-050946000015_2.jpg"
                rating={4}
                 />
            </div>

            <div className="home_row">
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved Gaming Monittor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product 
                    id="2344530"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={3}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="3254545"
                    title="New APple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                 id="987456"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={598.99}
                    rating={5}
                    image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/136/13607/13607591.jpg"
                 />
            </div>
          </div>
        </div>
    )
}

export default Home