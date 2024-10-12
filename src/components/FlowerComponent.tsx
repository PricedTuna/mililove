import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

// Componente que carga y renderiza el modelo
const Model: React.FC = () => {
  // Cargar un modelo GLTF/GLB
  const { scene } = useGLTF("public/origami_flower.glb");

  return <primitive object={scene} scale={new Vector3(1, 1, 1)} />;
};

function FlowerComponent() {
  return (
    <div>
      <Canvas camera={{ position: [0, 10, 0], fov: 18 }} style={{ width: "35%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Posicionamos el modelo */}
        <Model /> 

        {/* OrbitControls con restricciones para vista desde arriba */}
        <OrbitControls
          enableZoom={false} 
          enableRotate={false}  // Deshabilita la rotación
          maxPolarAngle={0}  // Ajusta los ángulos para mantener la vista superior
          minPolarAngle={0}  // Fija la cámara mirando hacia abajo
        />
      </Canvas>
    </div>
  );
}

export default FlowerComponent;
