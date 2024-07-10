import React from 'react'
import { Link } from 'react-router-dom';
import './PCB.css';
import Image1 from '../../image-org/PCB/Reference Design Development.png';
import Image2 from '../../image-org/PCB/ATE Board Solution.jpeg';
import Image3 from '../../image-org/PCB/Burn in Boards2.jpg'; 
import Image4 from '../../image-org/PCB/Testing Image 2.jpg';
import Image5 from '../../image-org/PCB/ODM Solution.jpg';
import Image6 from '../../image-org/PCB/Mass Fabrication.jpg'
function PCB() {
  return (
    <div className="content-wrapper">
  
    <div className="news-card">
      <Link href="./ReferenceDevelopment.html" className="news-card__card-link"></Link>
      <img src={Image1} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Reference Design Development </h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">Working in conjunction with Applications Engineering and Product Marketing groups at its semiconductor clients, PatternPCB develops &hellip;</p>
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link href="./ATE.html" className="news-card__card-link"></Link>
      <img src={Image2} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">ATE Solution</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaiTech's expertise in the design and manufacture of ATE board hardware runs both broad, and deep&hellip;</p>
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link href="./Reliablity.html" className="news-card__card-link"></Link>
      <img src={Image3} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Reliability Engineering & Burn-in</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaniTech provides an end-to-end solution for your Reliability and Burn-In requirements. With established expertise in Burn-In board (BIB) design &hellip;</p>
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
    <div className="news-card">
      <Link href="./Manufacturing&npi.html" className="news-card__card-link"></Link>
      <img src={Image4} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">Contract Manufacturing & NPI Solutions</h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">SenaniTech is an ISO 9001 registered full service Contract Manufacturer (CM), committed to the highest standards of excellence in quality and manufacturing&hellip;</p>
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
    <div className="news-card">
      <Link href="./ODM.html" className="news-card__card-link"></Link>
      <img src={Image5} alt="" className="news-card__image"/>
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">ODM Solutions </h2>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">By bundling its product engineering and design capabilities with its strong manufacturing infrastructure&hellip;</p>
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
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
          <Link href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></Link>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default PCB