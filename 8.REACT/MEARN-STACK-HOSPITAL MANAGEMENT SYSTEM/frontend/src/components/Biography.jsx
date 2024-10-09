/* eslint-disable react/prop-types */
//import React from 'react'


const Biography  = ({imageUrl}) => {
  return (
    <div className="container biography">

     <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to ZeeCare Medical Institute, a leading healthcare facility known for its state-of-the-art infrastructure, 
          compassionate care, and expertise in various medical disciplines. We are committed to providing comprehensive, patient-centered
          healthcare services, ensuring every patient receives personalized and tailored care throughout their medical journey.
          </p>
          <p><b> Our Promise!</b></p>
          {/* <p>We are working on a MERN STACK PROJECT.</p> */}
          <p>
          ZeeCare Medical Institute is dedicated to being your trusted partner on the journey to optimal health. From diagnosis 
          to treatment and recovery, we ensure that your well-being is our top priority. We invite you to experience our commitment 
          to excellence in healthcare, where we strive for the best outcomes with compassionate care and cutting-edge medical expertise.
          </p>
        </div>
      </div>
  )
}

export default Biography