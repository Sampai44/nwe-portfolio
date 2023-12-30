import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

import profileImg from '../../assets/profile-img.png'; // Import your profile picture

import pracImage1 from '../../assets/egprac1.jpg'; // Import the Practicum Image 1
import pracImage2 from '../../assets/egprac2.jpg'; // Import the Practicum Image 2
import pracImage3 from '../../assets/prac3.jpg'; // Import the Practicum Image 3
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

import sieimg1 from '../../assets/aaimg7.jpg'; // Import the AA Image 7
import sieimg2 from '../../assets/aaimg7.jpg'; // Import the AA Image 7
import sieimg3 from '../../assets/aaimg7.jpg'; // Import the AA Image 7

import bgimg from '../../assets/bgtest.jpg'; // Import the AA Image 7

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
      imageSrc: sieimg1,
      title: 'Event 1 Name',
      description: 'Just the day before, our host had written of the challenges of writing short.',
    },
    {
      imageSrc: sieimg1,
      title: 'Event 2 Name',
      description: 'can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place. Another productive way to use this tool to begin a daily writing routine,'

    },
    {
      imageSrc: sieimg1,
      title: 'Event 3 Name',
      description: 'A random paragraph can also be an excellent way for a writer to tackle writers block.',
    },
  ];
  
  
  const ceImages = [ceimg1, ceimg2, ceimg3, ceimg4];
  const ceDescriptions = [
    "Just the day before, our host had written of the challenges of writing short. In journalism–my friend’s chosen trade, and mostly my own, too–Mark Twain’s observation undoubtedly applies: “I didn’t have time to write a short letter, so I wrote a long one instead.” The principle holds across genres, in letters, reporting, and other writing. It’s harder to be concise than to blather. (Full disclosure, this blog post will clock in at a blather-esque 803 words.) Good writing is boiled down, not baked full of air like a souffl??. No matter how yummy souffl??s may be. Which they are. Yummy like a Grisham novel.",
    "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.",
    "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
    "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  ];

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const goToCESlide = (index) => {
    setCurrentCESlide(index);
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
        <div className='container'>
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
      </div>

      <div className='container'>
        <div className='intro'>
          <div className='intro-text'>
            <h1 className='intro-title'>Neo Wei En</h1>
            <p className='intro-subtitle'>SUSS Social Worker</p>
            <p className='intro-description'>
              Welcome to my portfolio! I am a social worker passionate about making a difference.
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
                <img src={pracImage2} alt='Practicum 2' />
               
              </div>
              <div className='practicum-description'>
             
                <blockquote>
"Practicum Experiences" typically refers to a period of practical 
experience in a professional setting, often integrated as a key component 
of academic courses in fields like social work, education, healthcare, and 
psychology. These experiences are designed to give students hands-on, real-world
 experience in their chosen field under the supervision of experienced 
 professionals. This practical training is crucial for bridging the gap 
 between theoretical knowledge and practical skills, allowing students to
  apply classroom learning in real-life scenarios, develop professional 
  competencies, and gain a deeper understanding of their field. It's an
  invaluable opportunity for personal and professional growth, helping
   students to build confidence, refine their skills, and make informed 
   career choices.
   </blockquote>

              </div>
              <hr className='section-divider' />

              {/* Practicum 2 */}
              <div className='practicum-title'>
                <h3>Practicum 2</h3>
              </div>
              
              
              <div className='practicum-grid'>
                <img src={pracImage1} alt='Practicum 1' />
                <img src={pracImage2} alt='Practicum 2' />
                <img src={pracImage3} alt='Practicum 3' />
                <img src={pracImage4} alt='Practicum 4' />
              </div>

              
              <div className='practicum-testimonial'>

              <p className='practicum-description'>
              <blockquote>
"Practicum Experiences" typically refers to a
 period of practical experience in a professional setting, 
 often integrated as a key component of academic courses in fields 
 like social work, education, healthcare, and psychology. 
 These experiences are designed to give students hands-on, real-world 
 experience in their chosen field under the supervision of experienced 
 professionals. This practical training is crucial for bridging the gap
 between theoretical knowledge and practical skills, allowing students 
 to apply classroom learning in real-life scenarios, develop professional
  competencies, and gain a deeper understanding of their field. It's an
   invaluable opportunity for personal and professional growth, helping 
   students to build confidence, refine their skills, and make informed 
   career choices.</blockquote>
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
                <p className='ce-description'>{ceDescriptions[index]}</p>
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
      <p className='oe-description'>
      This practical training is crucial for bridging the gap
 between theoretical knowledge and practical skills, allowing students 
 to apply classroom learning in real-life scenarios, develop professional
  competencies, and gain a deeper understanding of their field. It's an
   invaluable opportunity for personal and professional growth, helping 
   students to build confidence, refine their skills, and make informed 
   career choices.
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
            <p className='artefacts-description'>
            This practical training is crucial for bridging the gap 
 between theoretical knowledge and practical skills, allowing students to
  apply classroom learning in real-life scenarios, develop professional 
  competencies, and gain a deeper understanding of their field. It's an
  invaluable opportunity for personal and professional growth, helping
   students to build confidence, refine their skills, and make informed 
   career choices.
            </p>
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
