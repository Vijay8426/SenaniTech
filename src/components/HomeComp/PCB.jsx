import React from 'react'
import { Link } from 'react-router-dom';
import './PCB.css';
import './Carousel.css'
import Image1 from '../../image-org/PCB/Reference Design Development.png';
import Image2 from '../../image-org/PCB/ATE Board Solution.jpeg';
import Image3 from '../../image-org/PCB/Burn in Boards2.jpg'; 
import Image4 from '../../image-org/PCB/Testing Image 2.jpg';
import Image5 from '../../image-org/PCB/ODM Solution.jpg';
import Image6 from '../../image-org/PCB/Mass Fabrication.jpg'
import PBC from  '../../image-org/home/Carousel-images/pcb-design.jpg';

function PCB() {
  return (
    <div  >
      <div className="slider rounded-xl poppins-regular">

            <div className="list">
              <div className="item active">
                <img src={PBC} alt="PCB Design" />
                <div className="content">
                  <p></p>
                  <h2 className="poppins-medium">PCB<br></br>Design</h2>
                  <p>
            
            SenaniTech excels in PCB design services, offering expert solutions tailored for the semiconductor industry. Our comprehensive approach covers everything from initial design to final manufacturing, ensuring high-quality and reliable boards. With advanced technology and a skilled team, we deliver optimized PCB designs that meet rigorous industry standards.            </p>
                </div>
              </div>

            </div>


</div>

   <div className="content-wrapper py-8">
    <div className="news-card">
      <Link to='/services/pcb/refdev' className="news-card__card-link"></Link>
      <img src={Image1} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Reference Design Development </h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">Working in conjunction with Applications Engineering and Product Marketing groups at its semiconductor clients, PatternPCB develops &hellip;</p>
          <Link to='/services/pcb/refdev' className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link to='/services/pcb/ate' className="news-card__card-link"></Link>
      <img src={Image2} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">ATE Solution</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaiTech's expertise in the design and manufacture of ATE board hardware runs both broad, and deep&hellip;</p>
          <Link href="#" className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link to='/services/pcb/reliablity' className="news-card__card-link"></Link>
      <img src={Image3} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Reliability Engineering & Burn-in</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaniTech provides an end-to-end solution for your Reliability and Burn-In requirements. With established expertise in Burn-In board (BIB) design &hellip;</p>
          <Link href="#" className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
    <div className="news-card">
      <Link to='/services/pcb/npi' className="news-card__card-link"></Link>
      <img src={Image4} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Contract Manufacturing & NPI Solutions</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaniTech is an ISO 9001 registered full service Contract Manufacturer (CM), committed to the highest standards of excellence in quality and manufacturing&hellip;</p>
          <Link href="#" className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link to='/services/pcb/odm' className="news-card__card-link"></Link>
      <img src={Image5} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">ODM Solutions </h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">By bundling its product engineering and design capabilities with its strong manufacturing infrastructure&hellip;</p>
          <Link href="#" className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link href="#" className="news-card__card-link"></Link>
      <img src={Image6} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Product Engineering Solutions</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
          <Link href="#" className="news-card__read-more text-[0.8rem] text-blue-500">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default PCB