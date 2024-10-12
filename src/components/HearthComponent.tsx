import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

// Componente que carga y renderiza el modelo
const Model: React.FC = () => {
  // Cargar un modelo GLTF/GLB
  const { scene } = useGLTF("src/assets/hearth.glb");

  return <primitive object={scene} scale={new Vector3(1, 1, 1)} />;
};

function HearthComponent() {
  return (
    <div>
      <Canvas camera={{ position: [5, 10, 20], fov: 18 }} style={{ width: "35%" }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={10} />

        {/* Posicionamos el modelo */}
        <Model /> 

        {/* OrbitControls con restricciones para vista desde arriba */}
        <OrbitControls
          enableZoom={false} 
          enableRotate={false}  // Deshabilita la rotación
          maxPolarAngle={1}  // Ajusta los ángulos para mantener la vista superior
          minPolarAngle={1}  // Fija la cámara mirando hacia abajo
        />
      </Canvas>
    </div>
  );
}

export default HearthComponent;
