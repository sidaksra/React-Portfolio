import React from 'react';

const Aboutme = () => {
  return (
    <section className="aboutme-section">
      <div className="info-about-me">
        <div>
          <div className="aboutme-section-flex">
            <div>
              <p className="hey-there">Hey there,</p>
              <h2 className="heading-animation">I'm SIDAK SINGH<br />SRA</h2>
              <p className="aboutme-para">
                I hold a Bachelor of Science degree with Honours in Computer Science and a specialization in Software Engineering from <span className="trent-link"><a href="https://www.trentu.ca/" target="_blank" rel="noreferrer" className="underlineHoverEffect-2">Trent University, Canada</a></span>.
                <br /><br />
                Dean's Honour Roll achiever for 4 consecutive academic years.
                Proven ability to lead projects, work well in a team, and deliver results on time. Skilled in various programming languages, including <span className="bold-text">C# and Python</span>. Proficient in <span className="bold-text">HTML, CSS, PHP, MySQL, ReactJS, and JavaScript</span> for creating dynamic and interactive web pages.
              </p>
            </div>
            <div>
              <img src={require("../images/myimage.jpg")} alt="My Image" className="my-image-main-page image-animation" />
            </div>
          </div>
          <div className="buttons">
            <a href="https://drive.google.com/uc?export=download&id=1Ooz3PKPdcqAlgc_w3QMiIqE66fNfpjzs">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                Download Resume
              </button>
            </a>
            <a href="https://github.com/sidaksra" target="_blank" rel="noreferrer">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                Visit GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/sidaksinghsra/" target="_blank" rel="noreferrer">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                LinkedIn Profile
              </button>
            </a>
          </div>
          <p className="impact-line">Whether it's<br /><span className="software-impact-line"> Software development, problem-solving, or team collaboration,</span><br />I'm ready to make a difference in the world of technology!</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
