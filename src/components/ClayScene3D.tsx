import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ClayScene3DProps {
  scrollProgress?: number;
  isMobile?: boolean;
  reducedMotion?: boolean;
}

// Custom Arch Geometry created via Shape extrusion
function createArchShape(width = 1.5, height = 2.2, thickness = 0.32) {
  const shape = new THREE.Shape();
  const halfW = width / 2;
  const radius = halfW;
  const straightH = Math.max(0.2, height - radius);

  // Outer arch outline
  shape.moveTo(-halfW, -straightH);
  shape.lineTo(-halfW, 0);
  shape.absarc(0, 0, radius, Math.PI, 0, true);
  shape.lineTo(halfW, -straightH);

  // Inner cutout
  const innerRadius = Math.max(0.1, radius - thickness);
  const innerHalfW = halfW - thickness;
  const hole = new THREE.Path();
  hole.moveTo(innerHalfW, -straightH);
  hole.lineTo(innerHalfW, 0);
  hole.absarc(0, 0, innerRadius, 0, Math.PI, false);
  hole.lineTo(-innerHalfW, -straightH);
  hole.closePath();

  shape.holes.push(hole);
  return shape;
}

function ArchMesh({ isMobile }: { isMobile: boolean }) {
  const shape = useMemo(() => createArchShape(1.6, 2.2, 0.35), []);
  const extrudeSettings = useMemo(
    () => ({
      depth: 0.45,
      bevelEnabled: true,
      bevelSegments: isMobile ? 2 : 4,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
      curveSegments: isMobile ? 16 : 32,
    }),
    [isMobile]
  );

  return (
    <mesh castShadow receiveShadow>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial
        color="#6B7A5A" // Field Sage clay
        roughness={0.92}
        metalness={0.02}
      />
    </mesh>
  );
}

function ClaySceneContent({ scrollProgress = 0, isMobile = false, reducedMotion = false }: ClayScene3DProps) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const archGroupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const pebbleRef = useRef<THREE.Mesh>(null);

  // Smooth scroll interpolation targets
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const p = Math.max(0, Math.min(1, scrollProgress));

    // Pointer mouse tilt (muted if reduced motion)
    if (mainGroupRef.current) {
      if (!reducedMotion) {
        const targetRotY = state.pointer.x * 0.22;
        const targetRotX = -state.pointer.y * 0.14;
        mainGroupRef.current.rotation.y = THREE.MathUtils.damp(mainGroupRef.current.rotation.y, targetRotY, 3, delta);
        mainGroupRef.current.rotation.x = THREE.MathUtils.damp(mainGroupRef.current.rotation.x, targetRotX, 3, delta);
      } else {
        mainGroupRef.current.rotation.set(0, 0, 0);
      }
    }

    // 1. Terracotta Sphere
    if (sphereRef.current) {
      // Positional drift based on scroll
      // p=0 (Hero): [1.4, 0.1, 0.4]
      // p=0.4 (Projects): [-1.6, 0.4, 0.1]
      // p=0.8 (Disciplines): [1.3, -0.6, 0.2]
      // p=1.0 (Contact): [0.7, 0.1, 0.5]
      let targetX = 1.4 - p * 3.0 + Math.sin(p * Math.PI) * 1.5;
      let targetY = 0.1 + Math.sin(p * Math.PI * 2) * 0.5;
      let targetZ = 0.4 - p * 0.3;

      if (isMobile) {
        targetX *= 0.6;
        targetY = 0.6 - p * 0.4;
        targetZ = -0.5;
      }

      const floatY = reducedMotion ? 0 : Math.sin(t * 1.2) * 0.08;
      const floatX = reducedMotion ? 0 : Math.cos(t * 0.9) * 0.04;

      sphereRef.current.position.x = THREE.MathUtils.damp(sphereRef.current.position.x, targetX + floatX, 3.5, delta);
      sphereRef.current.position.y = THREE.MathUtils.damp(sphereRef.current.position.y, targetY + floatY, 3.5, delta);
      sphereRef.current.position.z = THREE.MathUtils.damp(sphereRef.current.position.z, targetZ, 3.5, delta);

      if (!reducedMotion) {
        sphereRef.current.rotation.y += delta * 0.15;
        sphereRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
      }
    }

    // 2. Sage Arch
    if (archGroupRef.current) {
      let targetX = -0.6 + p * 2.2;
      let targetY = -0.3 + Math.cos(p * Math.PI) * 0.4;
      let targetZ = -0.8 + p * 0.4;

      if (isMobile) {
        targetX = -0.4 + p * 0.8;
        targetY = -0.6;
        targetZ = -1.2;
      }

      const floatY = reducedMotion ? 0 : Math.sin(t * 0.9 + 1.2) * 0.06;

      archGroupRef.current.position.x = THREE.MathUtils.damp(archGroupRef.current.position.x, targetX, 3.2, delta);
      archGroupRef.current.position.y = THREE.MathUtils.damp(archGroupRef.current.position.y, targetY + floatY, 3.2, delta);
      archGroupRef.current.position.z = THREE.MathUtils.damp(archGroupRef.current.position.z, targetZ, 3.2, delta);

      if (!reducedMotion) {
        const targetRotY = 0.25 - p * 0.5 + Math.sin(t * 0.7) * 0.05;
        const targetRotX = 0.08 + Math.cos(t * 0.6) * 0.04;
        archGroupRef.current.rotation.y = THREE.MathUtils.damp(archGroupRef.current.rotation.y, targetRotY, 2.5, delta);
        archGroupRef.current.rotation.x = THREE.MathUtils.damp(archGroupRef.current.rotation.x, targetRotX, 2.5, delta);
      }
    }

    // 3. Cream Torus
    if (torusRef.current) {
      let targetX = -1.3 + Math.sin(p * Math.PI * 1.5) * 2.4;
      let targetY = 0.9 - p * 1.4;
      let targetZ = 0.2 + Math.cos(p * Math.PI) * 0.3;

      if (isMobile) {
        targetX = 0.8 - p * 1.4;
        targetY = 0.2 - p * 0.6;
        targetZ = -0.6;
      }

      const floatY = reducedMotion ? 0 : Math.sin(t * 1.1 + 2.5) * 0.07;
      const floatRot = reducedMotion ? 0 : t * 0.2;

      torusRef.current.position.x = THREE.MathUtils.damp(torusRef.current.position.x, targetX, 3.0, delta);
      torusRef.current.position.y = THREE.MathUtils.damp(torusRef.current.position.y, targetY + floatY, 3.0, delta);
      torusRef.current.position.z = THREE.MathUtils.damp(torusRef.current.position.z, targetZ, 3.0, delta);

      if (!reducedMotion) {
        torusRef.current.rotation.x = 0.6 + Math.sin(t * 0.8) * 0.15;
        torusRef.current.rotation.y = floatRot;
        torusRef.current.rotation.z = Math.cos(t * 0.5) * 0.1;
      }
    }

    // 4. Auxiliary Clay Pebble (Desktop only)
    if (pebbleRef.current && !isMobile) {
      const floatY = reducedMotion ? 0 : Math.sin(t * 1.4 + 4) * 0.06;
      pebbleRef.current.position.y = THREE.MathUtils.damp(pebbleRef.current.position.y, -1.1 + floatY + p * 0.3, 3, delta);
      pebbleRef.current.position.x = THREE.MathUtils.damp(pebbleRef.current.position.x, 0.4 - p * 0.8, 3, delta);
    }
  });

  return (
    <group ref={mainGroupRef}>
      {/* 1. Terracotta Sphere */}
      <mesh
        ref={sphereRef}
        position={[1.4, 0.1, 0.4]}
        castShadow
        receiveShadow
        scale={isMobile ? 0.8 : 1.05}
      >
        <sphereGeometry args={[1, isMobile ? 24 : 44, isMobile ? 24 : 44]} />
        <meshStandardMaterial
          color="#B5573A" // Burnt terracotta
          roughness={0.88}
          metalness={0.02}
        />
      </mesh>

      {/* 2. Sage-green Arch */}
      <group
        ref={archGroupRef}
        position={[-0.6, -0.3, -0.8]}
        rotation={[0.08, 0.25, -0.05]}
        scale={isMobile ? 0.75 : 0.95}
      >
        <ArchMesh isMobile={isMobile} />
      </group>

      {/* 3. Cream Torus */}
      <mesh
        ref={torusRef}
        position={[-1.3, 0.9, 0.2]}
        rotation={[0.6, 0.4, 0.2]}
        castShadow
        receiveShadow
        scale={isMobile ? 0.75 : 0.9}
      >
        <torusGeometry args={[0.95, 0.28, isMobile ? 18 : 28, isMobile ? 32 : 56]} />
        <meshStandardMaterial
          color="#EFE6D8" // Cream / unbleached calico
          roughness={0.92}
          metalness={0.01}
        />
      </mesh>

      {/* 4. Small Sand Clay Pebble (Desktop) */}
      {!isMobile && (
        <mesh
          ref={pebbleRef}
          position={[0.4, -1.1, 0.6]}
          scale={0.38}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#D8CAB8" // Warm sand clay
            roughness={0.9}
            metalness={0.02}
          />
        </mesh>
      )}
    </group>
  );
}

export default function ClayScene3D({
  scrollProgress = 0,
  isMobile = false,
  reducedMotion = false,
}: ClayScene3DProps) {
  return (
    <div className="w-full h-full pointer-events-none select-none">
      <Canvas
        shadows={!isMobile}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        camera={{ position: [0, 0, 7.2], fov: isMobile ? 48 : 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        {/* Soft, warm clay studio lighting */}
        <ambientLight intensity={1.3} color="#FFF8F2" />
        <directionalLight
          position={[5, 8, 6]}
          intensity={1.8}
          color="#FFF2E2"
          castShadow={!isMobile}
          shadow-mapSize={isMobile ? 512 : 1024}
          shadow-bias={-0.0001}
        />
        <directionalLight
          position={[-6, 4, -3]}
          intensity={0.6}
          color="#D8CAB8"
        />
        <pointLight
          position={[0, -4, 4]}
          intensity={0.4}
          color="#EADECF"
        />

        <ClaySceneContent
          scrollProgress={scrollProgress}
          isMobile={isMobile}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
