import { Environment } from '@react-three/drei';

const Staging2 = () => {
  return (
    <Environment
      files={[
        "px2.png",
        "nx2.png",
        "py2.png",
        "ny2.png",
        "pz2.png",
        "nz2.png"
      ]}
      path={"staging/cubemaps/hospital2/"}
      background={true}
    />
  );
};

export default Staging2;
