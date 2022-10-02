import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/8164gfGziLL._SX3000_.jpg" alt="" />
                {/* https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg */}

                <div className="home__row">
                    <Product
                        title="The Lean Startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
                        rating={5}
                    />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home