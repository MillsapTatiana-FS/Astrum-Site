import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="crystal-solo">Small Text</p>
        <h3>Mid Text</h3>
        <img src="" alt="raw crystal" className="hero-banner-image"/>

        <div>
          <Link href="/product/ID">
            <button type='button' className="hero-banner-button">Shop Now</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Longer description</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner