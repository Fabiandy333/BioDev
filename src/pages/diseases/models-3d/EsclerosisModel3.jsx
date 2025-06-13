import { useGLTF } from "@react-three/drei";

export function EsclerosisModel3({ scale = 1, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/esclerosis-multiple3.glb");

  return (
    <group scale={[scale, scale, scale]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["tripo_node_0fe757de-805a-40b6-83de-66f57e8c380e"].geometry
        }
        material={
          materials["tripo_material_0fe757de-805a-40b6-83de-66f57e8c380e"]
        }
      />
    </group>
  );
}

useGLTF.preload("/models-3d/esclerosis-multiple3.glb");
export default EsclerosisModel3;
