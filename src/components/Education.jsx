import React from 'react'

const Education = () => {
  return (
    <section className="Education" id="Education">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Education & Achievement</h1>
            <div className="Education-Rewards">
                <div className="about-containers">
                    <div className="details-container">
                    <img
                        src={require("../images/education.png")}
                        alt="Experience icon"
                        className="icon"
                    />
                    <h3>Achievement</h3>
                    <p>4 Consecutive Academic Years <br />- Dean's Honour Roll</p>
                    </div>
                    <div className="details-container">
                    <img
                        src={require("../images/experience.png")}
                        alt="Education icon"
                        className="icon"
                    />
                    <h3>Education</h3>
                    <p>B.Sc. Honours in Computer Science & Specialization in Software Engineering<br />GPA: 3.87/4.0</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Education
