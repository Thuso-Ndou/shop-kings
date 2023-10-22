import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
       <h1>About Us</h1>
      <p>
        Welcome to our online store! We are passionate about providing you with the latest and trendiest footwear and clothing options.
        With a wide range of styles, colors, and sizes, you're sure to find the perfect items that suit your taste and lifestyle.
      </p>
      <h2>Our Shoe Collection</h2>
      <p>
        Our shoe collection features a diverse range of styles, from casual sneakers to elegant formal shoes. We believe that a great 
        pair of shoes can enhance your confidence and complement your fashion sense, and we're dedicated to offering high-quality 
        footwear from renowned brands.
      </p>
      <h2>Our Clothing Collection</h2>
      <p>
        In addition to our extensive footwear selection, we also offer a curated collection of clothing for both men and women. 
        From stylish tops and bottoms to cozy outerwear, our clothing range is designed to help you express your unique style and stay 
        comfortable in any season.
      </p>
      <h2>Customer Satisfaction</h2>
      <p>
        At our store, we prioritize customer satisfaction. We offer fast and reliable shipping, easy returns, and excellent customer 
        support to ensure your shopping experience is seamless and enjoyable.
      </p>
      <p>
        Thank you for choosing us as your go-to destination for footwear and clothing shopping. We look forward to helping you put your 
        best foot forward and step out in style!
      </p>
      <footer className="footer">
        <h2>Contact Us</h2>
        <div className="contactDetails">
          <p>Email: info@shopkings.com</p>
          <p>Phone: (+27) 876-8765</p>
          <p>Address: 123 Main Street, Vaal, South Africa</p>
        </div>
      </footer>
    </div>
  );
}

export default About;

