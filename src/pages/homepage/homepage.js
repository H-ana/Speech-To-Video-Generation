import React from 'react'
import './homepage.css'; 
import { useNavigate } from 'react-router-dom';
import robo from '../../assets/robo.png';
const Homepage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      // Navigate to a different route programmatically
      navigate('/selectsub');
  };


  return (
  
      <div className="home__container">
        <div className="home__content">
            <div className="home__title">
              <span className="Font" data-aos="fade-down">V</span><span data-aos="zoom-in">ideo</span><span className="Font" data-aos="fade-up">C</span><span data-aos="zoom-in">ode</span>
            </div>
            <br></br>
            <div className="home__intro" data-aos="zoom-in">
             Learn through videos
            </div>
            <button className="home__button" onClick={handleClick}>Click Me</button>
        </div>  
        <div className="home__image">
        {/* <img src={robo} alt="Image" /> */}
      </div>
    </div>
  )
}

export default Homepage
