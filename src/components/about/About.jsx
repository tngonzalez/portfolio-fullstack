import { useState } from "react";
import "./About.css";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

export function About() {

  const[styleTitle, setStyle] = useState(false); 

  const onClick = () => {
    setStyle(!styleTitle); 

    const audio = new Audio('/Test1.mp4');
    audio.play(); 
  }

  return (
    <section id="about">
      <h1 style={{ textAlign: "left", letterSpacing: "5px", fontSize: "60px" }}>
        Hi <span style={{ color: "#b429b4", fontStyle: "italic" }}>there</span>!
        <span className="waving-hand">👋</span> 
        I&apos;m <span className={styleTitle ? "styleName" : ""}>Tylinn</span>. 
        <VolumeUpOutlinedIcon className="iconSpeaker" fontSize="large" onClick={onClick} />
      </h1>

      <div className="info">
        <div className="about-info">
          <p>
            I&apos;m a Software Engineering student from Costa Rica, currently
            in the final stages of completing my Bachelor&apos;s degree. As a
            committed Fullstack Developer with a strong passion for backend
            development, I strive to deliver innovative and high-quality
            solutions.
          </p>
          <p>
            Throughout my academic journey, I have cultivated extensive
            experience by working on diverse software projects, both
            independently and as part of collaborative teams. My expertise lies
            in designing and building scalable, efficient, and user-centric web
            applications.
          </p>

          <button className="gradient">
            <a href="/Tylinn Gonzalez - CV.pdf">Download my CV</a>
          </button>
        </div>

        <div className="tech-stack">
          <h2>Tech Stack</h2>

          <span>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
            <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
          </span>
          <br />
          <span>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
            <img src="https://img.shields.io/badge/Angular-a6120d?style=for-the-badge&logo=angular&logoColor=white" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
          </span>

          <h4> Databases </h4>
          <span>
            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
            <img src="https://img.shields.io/badge/-Sql%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=ffffff" />
          </span>

          <h4> Other Tools and Technologies </h4>
          <span>
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
            <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
            <img src="https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
          </span>
        </div>
      </div>
    </section>
  );
}
