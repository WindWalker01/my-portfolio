import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  AsciiRenderer,
  Float,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function SpaceStationModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("SpaceStation.glb");

  const cleaned = useMemo(() => {
    if (!scene) return null;
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = child.material.clone();
        child.material.metalness = 0.7;
        child.material.roughness = 0.3;
      }
    });
    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  if (!cleaned) return null;

  return (
    <group ref={groupRef} scale={1.5}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <primitive object={cleaned} />
      </Float>
    </group>
  );
}

function PrimitiveStation() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group rotation={[0.3, 0.5, 0]}>
          {/* Core body */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 1.8, 16]} />
            <meshStandardMaterial
              color="#00d4ff"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          {/* Main ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <torusGeometry args={[1.6, 0.08, 12, 32]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.3}
            />
          </mesh>
          {/* Inner ring */}
          <mesh rotation={[Math.PI / 2, 0.4, 0]} position={[0, 0, 0]}>
            <torusGeometry args={[1.2, 0.06, 12, 32]} />
            <meshStandardMaterial
              color="#f0f0f0"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Solar panels */}
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[1.2, 0.6, 0.04]} />
            <meshStandardMaterial
              color="#1a3a5c"
              metalness={0.2}
              roughness={0.6}
            />
          </mesh>
          <mesh position={[2, 0, 0]}>
            <boxGeometry args={[1.2, 0.6, 0.04]} />
            <meshStandardMaterial
              color="#1a3a5c"
              metalness={0.2}
              roughness={0.6}
            />
          </mesh>
          {/* Connector arms */}
          <mesh position={[-0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
            <meshStandardMaterial color="#555" />
          </mesh>
          <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
            <meshStandardMaterial color="#555" />
          </mesh>
          {/* Antenna */}
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6, 6]} />
            <meshStandardMaterial color="#aaa" />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function Scene3D() {
  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight
        position={[-5, -3, 2]}
        intensity={0.5}
        color="#00d4ff"
      />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#00d4ff" />
      {/* <Environment background={false} preset="city" /> */}

      <Suspense fallback={<PrimitiveStation />}>
        <SpaceStationModel />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />

      <AsciiRenderer
        fgColor="#0088aa"
        bgColor="#0a0a0a"
        characters=".:-=+*#%@"
        resolution={0.15}
      />
    </>
  );
}

export default function SpaceStationScene({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  if (reducedMotion) {
    return (
      <div className="flex h-full items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="h-64 w-64 md:h-80 md:w-80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            fill="#00d4ff"
            fontSize="10"
            fontFamily="monospace"
          >
            <tspan x="100" dy="0">
              ____
            </tspan>
            <tspan x="100" dy="12">
              /| . |\
            </tspan>
            <tspan x="100" dy="12">
              |=| ___ |=|
            </tspan>
            <tspan x="100" dy="12">
              \|____|/
            </tspan>
            <tspan x="100" dy="12">
              {" "}
              | |
            </tspan>
            <tspan x="100" dy="12">
              {" "}
              |____|
            </tspan>
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="ascii-canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}
