import './DiaseasesLayaut.css';
import { Link } from 'react-router-dom';

const diseases = [
  { name: "Accidente Cerebrovascular (ACV)", image: "/acv.png", path: "acv" },
  { name: "Enfermedad de Alzheimer", image: "/alzheimer.png", path: "alzheimer" },
  { name: "Esclerosis Múltiple", image: "/esclerosis.png", path: "esclerosis" },
  { name: "Migraña", image: "/migrana.png", path: "migrana" }
];

const DiseasesLayout = () => {
  return (
    <div className="diseases-container">
      <h1 className="diseases-title">Enfermedades Cerebrales</h1>
      <div className="diseases-grid">
        {diseases.map((disease, index) => (
          <Link key={index} to={`/enfermedades/${disease.path}`} className="disease-card">
            <img src={disease.image} alt={disease.name} className="disease-image" />
            <p className="disease-name">{disease.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiseasesLayout;
