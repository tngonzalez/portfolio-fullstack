import "./Home.css";

export function Home() {
  return (
    <section id="home">
      <div className="image-container">
        <img src="/home.jpg" alt="Tylinn González" />
      </div>
      <div className="text-container">
        <h1>Tylinn González</h1>
        <h2 className="typing">Fullstack Developer</h2>
      </div>
    </section>
  );
}
