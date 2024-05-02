import React, { useEffect, useState } from 'react';

const About = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollTop(window.scrollY);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollTop === 0) {
            // At the top of the page
            document.getElementById("myHeader").classList.remove("header-scroll");
          } else {
            // Scrolling up or down
            document.getElementById("myHeader").classList.add("header-scroll");
          }
          setTicking(false);
        });
        setTicking(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, ticking]);

  return (
    <main>
      <div className="container3">
        <div className="content-container3">
          <h1>Exam Platform for your Organization at Free of Cost</h1>
          <p>Easy to Use & your Branding<br />
            User-friendly Interface<br />
            Customizable Exams</p>
        </div>
        <div className="image-container0">
          <img src="IMG/banner.png" alt="Image" />
        </div>
      </div>

      <div className="content">
        <div className="flex-container upper-side">
          <div className="flex-item">
            <div className="icon-container">
              <i className="fas fa-question-circle" title="All question"></i>
            </div>
            <br />
            <h2>All Question Types</h2>
            <p>MCQs (Single & Multi-correct), Numerical Qs (Integer, Decimal, Calculator), Subjective Qs (Upload Images or Type responses)</p>
          </div>
        </div>

        <div className="flex-container upper-side">
          <div className="flex-item">
            <div className="icon-container">
              <i className="fas fa-cloud" title="Capacity & Concurrency"></i>
            </div>
            <br />
            <h2>Capacity & Concurrency</h2>
            <p>Onlineexam is a cloud-based system, can support any number of Users at the same time and create any number of Student Accounts</p>
          </div>
        </div>

        <div className="container">
          <div className="image-container">
            <img src="IMG/exam1.png" alt="Image" />
          </div>
          <div className="content-container">
            <h2>Your own Customized Portal & WebApp</h2>
            <p>Your white-labeled web platform is created at institute-name.onlineexam.in with your Logos and Colors where your Students & Staff have user accounts. Can add your own Exam Types, Centres & Classes and assign Students to them. Faculty can be assigned to Students to monitor them.<br /><br />
              Customized WebApps can be installed from your platform on Mobile devices, and they are also white-labeled with your Name, Logo & Colors. These WebApps function as fully native applications and run in full screen mode to reduce distractions during exams.<br /><br />
              Your onlineexam platform can even be hosted on your own web domain, contact us for more details.</p>
          </div>
        </div>

        <div className="container2">
          <div className="content-container2">
            <h2>Multi-Device & Slow Internet Support built-in</h2>
            <p>Exams can be taken on Any Device, PC/Laptop, Android & iOS Smartphones, Tablets. On Mobile devices, a WebApp is automatically created, and exams are taken through it. WebApp is customized with your Logo & Colors and is downloadable from your platform.<br /><br />
              onlineexam is built to be extremely tolerant to Bad Internet. Essentially, Students need to ensure they have a connection when starting the Exam & when Submitting the exam, Onlineexam takes care of the rest!<br /><br />
              "Use any device to take exams, even with slow internet connection speeds"</p>
          </div>
          <div className="image-container2">
            <img src="IMG/exam2.png" alt="Image" />
          </div>
        </div>

        <div className="container">
          <div className="image-container">
            <img src="IMG/exam3.png" alt="Image" />
          </div>
          <div className="content-container">
            <h2>High Security Proctored Exams Supported</h2>
            <p>Multiple security features are available like Webcam support, Facial detection, Window Switch detection, and all of these are used to generate a "Trust Score" for every student.<br /><br />
              Admins can use "Trust Score" as an indicator and take necessary actions based on this. Regular photographs are taken using the Student's webcam and Admins can monitor this or see all captured photos after the exam for any suspicious case.<br /><br />
              "Take secure exams, with multiple AI cheat detection systems built-in"</p>
          </div>
        </div>

        <div className="container2">
          <div className="content-container2">
            <h2>Questions Appear in Exam Exactly like in Question Paper</h2>
            <p>Even if the Question has complex Math or Images or Tables or anything for that matter, as exam uses an innovative & simple process to store questions for Online Exams.<br /><br />
              No Retyping of questions required! Existing Word files or PDFs of question papers can be used<br /><br />
              "Perfect Question Accuracy using an Innovative and Easy process of adding questions"</p>
          </div>
          <div className="image-container2">
            <img src="IMG/exam4.png" alt="Image" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
