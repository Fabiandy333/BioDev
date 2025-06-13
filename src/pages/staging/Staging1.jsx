import { Environment } from '@react-three/drei';

const Staging1 = () => {
  return (
    <Environment
      files={[
        "px1.png",
        "nx1.png",
        "py1.png",
        "ny1.png",
        "pz1.png",
        "nz1.png"
      ]}
      path={"staging/cubemaps/hospital1/"}
      background={true}
    />
  );
};

export default Staging1;
