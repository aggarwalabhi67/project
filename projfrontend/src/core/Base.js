import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    
    <footer className="footer bg-dark mt-auto py-3 text-white ">
    <hr className="color:white"/>
  <div className="col-12">
  
    <div className="row">
      <div className="col-sm-12 col-md-8">
        <h6 className="text">About Us</h6>
        <p className="text-justify">Bite-4-Diet <i>DELIVERING HOT AND DELICIOUS FOOD </i> 
        We just not only delivery food, We also bring happiness to your doorsteps. Here you can enjoy high quality food at affordable prices. Our motto is providing tasty food keeping hygiene and your health in mind. </p>
      </div>
      <div className="col-xs-3 col-md-2">
        <h6 className="text-right">Quick Links</h6>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col-md-2 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a className="linkedin" href="https://www.linkedin.com/in/abhishek-aggarwal-0982ba200"><i className="fa fa-linkedin"></i></a></li>   
        </ul>
      </div>
    </div>
    
  </div>
  <hr></hr>
  <div className="col-12">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by  Abhishek Aggarwal.
        </p>
      </div>

      
    </div>
  </div>
</footer>
  </div>
);

export default Base;
