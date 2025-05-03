import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain from "../../pages/diseases/models-3d/Brain";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="main-title">Explora los órganos en 3D.</h1>
        <p className="subtitle">Si ya tienes una cuenta ¡empieza ahora!</p>
      </div>

      <div className="welcome-section">
        <h2 className="welcome-title">Bienvenidos a un</h2>

        <div className="canvas-brain">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={2.2} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} />
            <directionalLight position={[0, -3, 5]} intensity={1.8} />
            <directionalLight position={[0, 0, -5]} intensity={1.2} />
            <directionalLight position={[-5, 2, 4]} intensity={1.5} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Brain />
          </Canvas>
        </div>

        <div className="highlighted-text">Aprendizaje inolvidable</div>
      </div>

    </div>
  );
};

export default Home;
