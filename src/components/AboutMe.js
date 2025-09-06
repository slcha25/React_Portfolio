import React from 'react';
import assets from '../assets/assets';

const AboutMe = () => {
  return (
    // {/* Introduction Section */}
    <div id="about" className="Intro-box">
      <h3 className="welcome">Welcome to my portfolio!</h3>
      <h4 className="greeting">
        I'm excited to share my journey as a Full Stack Developer Trainee and
        Data Scientist. Here, you'll find a showcase of my skills, projects,
        and experiences that reflect my passion for technology and innovation.
      </h4>

      <div className="container_picture">
        <img
          className="profile_picture"
          src={assets.myPhoto}
          alt="Sandra Chan"
          width="300px"
        />
        <div className="introduction">
          <h4 className="intro">
            Student at Npower with a passion for bridging the gap between data
            science and practical application development. My academic
            foundation includes a Bachelor's degree in Economics with a minor in
            Mathematics, which has given me a unique analytical perspective on
            problem-solving.
          </h4>
          <h4 className="intro">
            With a Certificate in Applied Data Science, I've developed
            proficiency in Python, SQL, R, HTML, CSS, and Jupyter Notebook. I
            love transforming complex data insights into meaningful applications
            that can make a real difference.
          </h4>
          <h4 className="intro">
            When I'm not coding or analyzing data, you'll find me listening to
            music, watching movies and dramas, or playing basketball. These
            activities help me stay creative and maintain a balanced perspective
            that I bring to my technical work.
          </h4>
        </div>
      </div>
      <h3>Technical skills:</h3>
      <div className="skills">
        <div className="row">
          <p>Python</p>
          <p>SQL</p>
          <p>R</p>
          <p>HTML</p>
        </div>
        <div className="row">
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Jupyter Notebook</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
// The extra '}' at the end of the file was removed