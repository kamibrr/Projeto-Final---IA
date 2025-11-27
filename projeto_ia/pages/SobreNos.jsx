import "./SobreNos.css";
import Giovanna from "../src/assets/Giovanna.jpeg";
import Julia from "../src/assets/Julia.jpeg";
import Kamilly from "../src/assets/Kamilly.jpeg";
import Duarte from "../src/assets/Duarte.jpeg";
import Footer from "../components/Footer";

export default function Team() {
  const people = [
    { name: "Giovanna Ferreira", image: Giovanna},
    { name: "Julia Piazzoli Domeneghhetti", image: Julia},
    { name: "Kamilly Barra", image: Kamilly},
    { name: "Maria Clara Duarte", image: Duarte},
  ];

  return (
    <div className="team-container">
      {people.map((p, i) => (
        <div className="team-card" key={i}>
          <div className="photo-wrapper">
            <img src={p.photo} alt={p.name} className="photo" />
          </div>
          <p className="team-name">{p.name}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}
