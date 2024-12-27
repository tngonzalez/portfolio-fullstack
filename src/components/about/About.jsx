import "./About.css";

export function About() {
  return (
    <section id="about">
      <h1 style={{ textAlign: "left", letterSpacing: "5px", fontSize: "60px" }}>
        Hi <span style={{ color: "#b429b4", fontStyle: "italic" }}>there</span>!
        <span className="waving-hand">👋</span> I&apos;m Tylinn.
      </h1>

      <div className="info">
        <div className="about-info">
          <p>
            I&apos;m Software Engineering student from Costa Rica. Currently
            completing my Bachelor&apos;s degree. A dedicated{" "}
            <strong>Fullstack Developer</strong> with a strong passion for{" "}
            <strong>Backend Development</strong>.
          </p>
          <p>
            Throughout my academic journey, I&apos;ve gained valuable experience
            through various software projects, working both individually and
            collaboratively. I focus on building scalable, efficient, and
            user-friendly web applications, with a particular interest in
            backend development, where I enjoy solving complex challenges,
            optimizing performance, and designing robust systems.{" "}
          </p>

          <button className="gradient ">Let&apos;s Connect</button>
        </div>

        <div className="tech-stack">
          <h2>Tech Stack</h2>

          <span>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
          </span>

          <span>
          <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
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
            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
            <img src="https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white" />
            <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
          </span>
        </div>
      </div>
    </section>
  );
}
