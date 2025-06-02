import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain from "../../pages/diseases/models-3d/Brain";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <h1 className="main-message">
          Bienvenidos a un<br />
          aprendizaje inolvidable
        </h1>
        <p className="sub-message">Explora los órganos en 3D.</p>
      </div>


      <div className="canvas-brain">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Brain scale={2.2} />
          <ambientLight intensity={2.2} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <directionalLight position={[0, -3, 5]} intensity={1.8} />
          <directionalLight position={[0, 0, -5]} intensity={1.2} />
          <directionalLight position={[-5, 2, 4]} intensity={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Brain />
        </Canvas>
      </div>
    </div>

  );
};

export default Home;
