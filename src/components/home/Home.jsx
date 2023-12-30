import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

import profileImg from '../../assets/profile-img.png'; // Import your profile picture

import pracImage1 from '../../assets/egprac1.jpg'; // Import the Practicum Image 1
import pracImage3 from '../../assets/egprac2.jpg'; // Import the Practicum Image 3
import pracImage4 from '../../assets/prac4.jpg'; // Import the Practicum Image 4

import ceimg1 from '../../assets/ceimg1.jpg'; // Import the CE Image 1
import ceimg2 from '../../assets/ceimg2.jpg'; // Import the CE Image 2
import ceimg3 from '../../assets/ceimg3.jpg'; // Import the CE Image 3
import ceimg4 from '../../assets/ceimg4.jpg'; // Import the CE Image 4

import oeimg1 from '../../assets/oeimg1.jpg'; // Import the OE Image 1
import oeimg2 from '../../assets/oeimg2.jpg'; // Import the OE Image 2
import oeimg3 from '../../assets/oeimg3.jpg'; // Import the OE Image 3

import aaimg1 from '../../assets/aaimg1.jpg'; // Import the AA Image 1
import aaimg2 from '../../assets/aaimg2.jpg'; // Import the AA Image 2
import aaimg3 from '../../assets/aaimg3.jpg'; // Import the AA Image 3
import aaimg4 from '../../assets/aaimg4.jpg'; // Import the AA Image 4
import aaimg5 from '../../assets/aaimg5.jpg'; // Import the AA Image 5
import aaimg6 from '../../assets/aaimg6.jpg'; // Import the AA Image 6
import aaimg7 from '../../assets/aaimg7.jpg'; // Import the AA Image 7

import sieimg1 from '../../assets/sieimg1.jpg'; // Import the SIE Image 1
import sieimg2 from '../../assets/sieimg2.jpg'; // Import the SIE Image 2
import sieimg3 from '../../assets/sieimg3.jpg'; // Import the SIE Image 3

import nweCV from '../../assets/nweresume.pdf'; // Import CV

const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const [isPracticumOpen, setIsPracticumOpen] = useState(false);
  const [isCEOpen, setIsCEOpen] = useState(false);
  const [isOEOpen, setIsOEOpen] = useState(false);
  const [isAcademicArtefactsOpen, setIsAcademicArtefactsOpen] = useState(false);
  const [currentCESlide, setCurrentCESlide] = useState(0);
  const [isSelfInitiatedEventsOpen, setIsSelfInitiatedEventsOpen] = useState(false); // Add this line
  

  const artefactImages = [
    aaimg1, aaimg2, aaimg3, aaimg4, aaimg5, aaimg6, aaimg7,
    

  ];

  const handlePracticumClick = () => {
    setIsPracticumOpen(true);
    setTimeout(() => {
      document.getElementById('practicum').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay for the unfolding animation
  };
  
  const handleCEClick = () => {
    setIsCEOpen(true);
    setTimeout(() => {
      document.getElementById('ce').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAcademicArtefactsClick = () => {
    setIsAcademicArtefactsOpen(true);
    setTimeout(() => {
      document.getElementById('academic-artefacts').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay for the unfolding animation
  };
  
  const handleSelfInitiatedEventsClick = () => {
    setIsSelfInitiatedEventsOpen(true);
    setTimeout(() => {
      document.getElementById('self-initiated-events').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const renderStars = (numStars) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3; // Random size between 0 and 3 pixels
      const animationDuration = Math.random() * (3 - 1) + 1; // Random duration between 1 and 3 seconds
      const animationDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
  
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animation: `twinkle ${animationDuration}s linear ${animationDelay}s infinite`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        ></div>
      );
    }
    return stars;
  };

  const selfInitiatedEventsData = [
    {
      imageSrc: sieimg2,
      title: 'Internship at Pathlight School, Autism Resource Centre',
      description: "During my internship at Pathlight School's Autism Resource Centre as a teacher aide, I immersed myself in supporting children with autism. This role was a significant step in aligning with my passion for inclusive education and the welfare of children and youth. It allowed me to contribute meaningfully to a specialized educational setting, enhancing my understanding and skills in addressing the unique needs of students with autism."
    },
    {
      imageSrc: sieimg3,
      title: 'Tutor & Student Care Teacher',
      description: "As a mathematics tutor for primary students and a student care teacher, I blend academic instruction with nurturing mentorship. These roles reflect my passion for the children and youth sector, allowing me to support young learners' intellectual and personal growth. Through tutoring and student care, I contribute to their holistic development, aligning with my ongoing commitment to this field."

    },
    {
      imageSrc: sieimg1,
      title: "Participation in MSF's Wellness Talk",
      description: "I participated in the Ministry of Social and Family Development's Wellness Talk, an initiative focusing on mental and emotional well-being. This involvement not only broadened my understanding of wellness in social contexts but also underscored the importance of integrating these principles into social work practices. It was an enlightening experience that reinforced my commitment to holistic approaches in the social service sector.",
    },
  ];
  
  
  const ceImages = [ceimg1, ceimg2, ceimg3, ceimg4];
  const ceDescriptions = [
    "I engaged with elderly patients at Sengkang Community Hospital, facilitating various games and activities. This experience deepened my understanding of social responsibility and empathy, particularly in elderly care. It was a journey filled with meaningful interactions that shaped my personal and professional aspirations, steering me towards a future in healthcare and community service.",
    "I engaged with elderly patients at Sengkang Community Hospital, facilitating various games and activities. This experience deepened my understanding of social responsibility and empathy, particularly in elderly care. It was a journey filled with meaningful interactions that shaped my personal and professional aspirations, steering me towards a future in healthcare and community service.",
    "I engaged with elderly patients at Sengkang Community Hospital, facilitating various games and activities. This experience deepened my understanding of social responsibility and empathy, particularly in elderly care. It was a journey filled with meaningful interactions that shaped my personal and professional aspirations, steering me towards a future in healthcare and community service.",
    "I engaged with elderly patients at Sengkang Community Hospital, facilitating various games and activities. This experience deepened my understanding of social responsibility and empathy, particularly in elderly care. It was a journey filled with meaningful interactions that shaped my personal and professional aspirations, steering me towards a future in healthcare and community service."
  ];

  const toggleNav = () => {
    setShowNav(!showNav);
  };


  const nextCESlide = () => {
    setCurrentCESlide((prevIndex) => (prevIndex + 1) % ceImages.length);
  };

  const prevCESlide = () => {
    setCurrentCESlide((prevIndex) => (prevIndex - 1 + ceImages.length) % ceImages.length);
  };

  

  return (
    <section className='home' id='home'>
      {/* Render the stars as the first layer */}
      {renderStars(1000)}
       {/* Shooting star element */}
      <div className="shooting-star"></div>
      <div className='top-nav'>
        
          <ul className={`nav-links ${showNav ? 'active' : ''}`}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#' onClick={handlePracticumClick}>Practicum</a></li>
            <li><a href='#' onClick={handleCEClick}>CE/OE</a></li>
            <li><a href='#' onClick={handleAcademicArtefactsClick}>Academic Artefacts</a></li>
            <li><a href='#' onClick={handleSelfInitiatedEventsClick}>Self-initiated Events</a></li>
            
          </ul>
          <div className='hamburger' onClick={toggleNav}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
      
      </div>

      <div className='container'>
        <div className='intro'>
          <div className='intro-text'>
            <h1 className='intro-title'>Neo Wei En (Y2082762)</h1>
            <p className='intro-subtitle'>C2020 - ePortfolio</p>
            <p className='intro-subtitle'>Website was developed from scratch using React JS, click on each topic to know more!</p>
            <p className='intro-description'>
            Hello! I’m currently a student at the Singapore University of Social Sciences, working towards my Bachelor of Social Work with a Minor in Psychology. My educational journey, beginning at Pasir Ris Secondary School and continuing at Tampines Meridian Junior College, has fueled my passion for the social service sector.

With a focus on the children, youth, and elderly sectors, I’ve gained practical experience through various roles. This includes a meaningful internship at Pathlight School’s Autism Resource Centre, years of tutoring, and my current part-time engagement at a student care center. Each experience has enriched my understanding and commitment to social work.

I’m excited to continue my journey, leveraging my academic and practical experiences to make a meaningful impact in the lives of those I serve.
            </p>
            <a href={nweCV} className='cv-link' download>
              Download CV
            </a>
          </div>
          <div className='intro-image'>
            <img src={profileImg} alt='Profile' className='profile-img' />
          </div>
        </div>

        <hr className='section-divider' />

      
          {/* Practicum Sections */}
          
          <div className='practicum' id='practicum'>
            
          <h2 className='section-main-header' onClick={() => setIsPracticumOpen(!isPracticumOpen)}>
            My Practicum Experiences
          </h2>
          {isPracticumOpen && (
            <div className='practicum'>
              <div className='practicum-title'>
              {/* Practicum 1 */}
              <h3>Practicum 1</h3>
              </div>
             
              <div className='practicum-grid'>
                <img src={pracImage1} alt='Practicum 1' />
                
              </div>
              <div className='practicum-description'>
             
                <blockquote>
 <h2 class="headline">Filos Community Services</h2>
During my practicum at Filos Community Services, I had the enriching opportunity to work both as a social worker and a program coordinator. Under the guidance of experienced social workers, I was involved in handling community cases, particularly within the COMIT (Community Intervention Team) and CREST (Community Resources, Engagement, and Support Team) frameworks.

COMIT primarily focuses on providing community-based support to individuals and families facing psychosocial issues. Working within this team allowed me to understand the complexities of mental health and the importance of tailored community interventions. Meanwhile, CREST aims at supporting the elderly in the community, focusing on their well-being and social needs. This involvement gave me firsthand experience in elderly care and the nuances of managing age-related challenges.

In addition to these roles, I coordinated and facilitated programs specifically designed for children and youth from lower-income families. This responsibility entailed not only program planning and execution but also direct engagement with the children and youths, ensuring that the programs were both educational and enjoyable. This aspect of my practicum was particularly rewarding as it allowed me to contribute positively to the lives of these young individuals, fostering their growth and development in meaningful ways.

My time at Filos Community Services was a defining period in my professional development, enhancing my skills in social work and program coordination while also deepening my commitment to community service.
   </blockquote>

              </div>
              <hr className='section-divider' />

              {/* Practicum 2 */}
              <div className='practicum-title'>
                <h3>Practicum 2</h3>
              </div>
              
              
              <div className='practicum-grid'>
        
                <img src={pracImage3} alt='Practicum 3' />
                
              </div>

              
              <div className='practicum-testimonial'>

              <p className='practicum-description'>
              <blockquote>
 <h2 class="headline">Presbyterian Community Services - Evergreen Active Ageing Centre</h2>
 During my second practicum at the Evergreen Active Ageing Centre, under the aegis of Presbyterian Community Services, I engaged deeply in the realm of community social work. This experience allowed me to work closely with the elderly, understanding their unique needs and challenges.

In this role, my primary responsibility was handling a variety of community cases. This involved direct interactions with seniors, assessing their needs, and developing tailored support plans. I was instrumental in creating solutions that addressed both immediate and long-term concerns, focusing on enhancing their quality of life and promoting active ageing.

Working at Evergreen Active Ageing Centre provided me with invaluable insights into the complexities of ageing and the importance of community support systems. It honed my skills in case management, problem-solving, and empathetic communication, further solidifying my commitment to social work and community service.

This practicum was not just a professional undertaking but a journey of personal growth, as I learned to navigate the diverse aspects of social work in the context of elderly care.
   </blockquote>
            </p>

              </div>
            </div>
          )}
        </div>
  


       {/* CE Section */}
      <div className='ce-section' id='ce'>
        <h2 className='section-title' onClick={() => setIsCEOpen(!isCEOpen)}>Community Engagement</h2>
        {isCEOpen && (
          <div className='ce-carousel'>
           <span className='carousel-arrow left-arrow' onClick={prevCESlide}>&lt;</span>
           <span className='carousel-arrow right-arrow' onClick={nextCESlide}>&gt;</span>

           {ceImages.map((img, index) => (
            <div key={index} className={`ce-slide ${index === currentCESlide ? 'active' : ''}`}>
             <img src={img} alt={`Community Engagement ${index + 1}`} />
             <h2 className="ce-headline">Activity Facilitator for Elderly Patients</h2>
             <p className="ce-description">{ceDescriptions[index]}</p>
             </div>
           ))}
            
            <div className='carousel-controls'>
              <button className='prev' onClick={prevCESlide}>Prev</button>
              <button className='next' onClick={nextCESlide}>Next</button>
            </div>
          </div>
        )}
      </div>


        {/* OE Section */}
<div className='oe-section' id='oe'>
  <h2 className='section-title' onClick={() => setIsOEOpen(!isOEOpen)}>Overseas Experience</h2>
  {isOEOpen && (
    <div className='oe-content'>
      <div className='oe-images'>
        <img src={oeimg1} alt='Overseas Experience 1' />
        <img src={oeimg2} alt='Overseas Experience 2' />
        
        <img src={oeimg3} alt='Overseas Experience 3' />
      </div>
      <p>
      <blockquote>
 <h2 class="headline">CommTECH Nusantara 2023: Virtual Exploration of Indonesia
</h2>
In January 2023, I embarked on an enriching 11-day virtual journey through Indonesia, participating in the CommTECH Nusantara program hosted by ITS Surabaya. Despite the challenges posed by the Covid-19 pandemic, this experience was a vibrant exploration of Indonesian culture, geography, and traditions, all from a digital platform.

A highlight of this virtual expedition was the opportunity to creatively express my learnings. I am proud to have won the “Best Poster” award for an assignment where we were tasked to design a poster about a place in Indonesia, as showcased above. This accolade not only represents my engagement with the program but also my ability to synthesize and present cultural insights in a compelling visual format.

This experience was not just an educational journey; it was a testament to my adaptability and eagerness to learn in any setting, even amidst global constraints. It stands as a unique and memorable part of my academic and cultural exploration.
   </blockquote>
      </p>
    </div>
  )}
</div>

         
    {/* Academic Artefacts Section */}
    <div className='academic-artefacts' id='academic-artefacts'>
        <h2 className='section-title' onClick={() => setIsAcademicArtefactsOpen(!isAcademicArtefactsOpen)}>
          Academic Artefacts
        </h2>
        {isAcademicArtefactsOpen && (
          <div className='academic-content'>
            {artefactImages.map((imgSrc, index) => (
              <div key={index} className={`artefacts-item ${index % 2 === 0 ? 'new-row' : ''}`}>
                <img src={imgSrc} alt={`Artefact ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Self-initiated Events Section */}
<div className={`self-initiated-events ${isSelfInitiatedEventsOpen ? 'open' : ''}`} id='self-initiated-events'>
  <div className='section-container'>
    <h2 className='section-title' onClick={() => setIsSelfInitiatedEventsOpen(!isSelfInitiatedEventsOpen)}>
      Self-initiated Events
    </h2>
    {isSelfInitiatedEventsOpen && (
      <div className='events-container'>
        {selfInitiatedEventsData.map((event, index) => (
          <div key={index} className={`event-item quirky-event ${index % 2 === 0 ? 'new-row' : ''}`}>
            <div className='event-image'>
              <img src={event.imageSrc} alt={event.title} />
            </div>
            <div className='event-description'>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

      </div>
    </section>
  );
}

export default Home;
