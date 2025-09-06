import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component
import assets from '../assets/assets';

const Projects = () => {
  // Define your projects data
  const projects = [
    {
      id: 1,
      content: (
        <div className="layout">
          <div className="box1">
            <div className="Projectbox">
              <img
                className="picture1"
                src={assets.Idol_music}
                alt="I-dol Music streaming platform database"
              />
              <div className="title">
                <h3 className="text1">
                  <a
                    href="https://github.com/slcha25/I-dol-Music-Streaming-Platform-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    I-dol Music Streaming Platform
                  </a>
                </h3>
                <span className="Academic">Academic</span>
              </div>
              <p className="content1">
                Designed a comprehensive database system from conceptual to
                normalized logical model using SQL. Built and managed
                database tables, stored procedures, views, and functions
                with focus on data integrity.
              </p>
              <div className="skills_box">
                <span className="skills_1">SQL</span>
                <span className="skills_2">Data Management</span>
                <span className="skills_3">Database Design</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="box2">
          <div className="Projectbox2">
            <img
              className="picture2"
              src={assets.San_Bookstore}
              alt="San's Bookstore"
            />
            <div className="title2">
              <h3 className="text2">
                <a
                  href="https://github.com/slcha25/DOM_Bookstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  San's Bookstore
                </a>
              </h3>
              <span className="Academic2">Academic</span>
            </div>
            <p className="content2">
              An interactive bookstore interface that dynamically retrieves
              book data from an API and presents it in a clean,
              responsive table layout built with HTML, CSS, and
              JavaScript.
            </p>
            <div className="skills_box2">
              <span className="skills_4">Html</span>
              <span className="skills_5">CSS</span>
              <span className="skills_6">JavaScript(DOM)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="box3">
          <div className="Projectbox3">
            <img
              className="picture3"
              src={assets.portfolio}
              alt="Data Analysis Project using Python"
            />
            <div className="title3">
              <h3 className="text3">
                <a
                  href="https://github.com/slcha25/JavaScript-DOM-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full stack developer Portfolio
                </a>
              </h3>
              <span className="Academic3">Academic</span>
            </div>
            <p className="content3">
              Designed and developed my personal portfolio using HTML and
              CSS and JavaScript(DOM).
            </p>
            <div className="skills_box3">
              <span className="skills_7">Html</span>
              <span className="skills_8">CSS</span>
              <span className="skills_9">JavaScript</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div id="projects">
      <h2>Academic Projects</h2>
      {/* Use the Carousel component and pass projects data */}
      <Carousel projects={projects} />
    </div>
  );
};

export default Projects;