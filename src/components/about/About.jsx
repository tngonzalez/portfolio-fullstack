import './About.css'; 

export function About() {
    return (
      <section id="about">
        <h1 style={{textAlign: 'left', letterSpacing: '5px', fontSize: '60px'}}>Hi <span style={{color: '#b429b4', fontStyle: 'italic'}}>there</span>! I´m Tylinn.<span className="waving-hand">👋</span></h1>
        <p>I´m Software Engineering student from Costa Rica. Currently completing my Bachelor´s degree. A dedicated <strong>Fullstack Developer</strong> with a strong passion for <strong>Backend Development</strong>.</p>
        <p>Throughout my academic journey, I´ve gained valuable experience through various software projects, working both individually and collaboratively.
        I focus on building scalable, efficient, and user-friendly web applications, with a particular interest in backend development, where I enjoy solving complex challenges, optimizing performance, and designing robust systems. </p>
      </section>
    );
}