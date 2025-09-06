import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Typewriter = () => {
  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ["Data Scientist", "Full Stack Developer Trainee", "Data Analyst"],
      typeSpeed: 150,
      backSpeed: 125,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup the Typed instance on component unmount
    };
  }, []);

  return (
    <div>
      <h2><span class="auto-type"></span></h2>
    </div>
  );
};

export default Typewriter;
