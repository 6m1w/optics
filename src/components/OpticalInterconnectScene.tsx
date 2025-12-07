import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Environment, ContactShadows, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { LayerData, OpticalStackData } from '../data/opticalStack';

interface SceneProps {
    data: OpticalStackData;
    onLayerSelect: (id: string) => void;
    selectedLayerId: string | null;
}

// Geometry mapping based on layer ID to give visual variety
const getGeometryForLayer = (id: string) => {
    switch (id) {
        case 'materials':
            return <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />; // Wafer-like
        case 'optical_chips':
            return <boxGeometry args={[1, 1, 0.2]} />; // Chip-like
        case 'electrical_chips':
            return <boxGeometry args={[0.8, 0.8, 0.3]} />; // Chip-like
        case 'modules':
            return <boxGeometry args={[1.5, 0.8, 2]} />; // Module-like (QSFP)
        case 'switching':
            return <boxGeometry args={[2.5, 0.5, 2.5]} />; // Switch ASIC / Board
        case 'fabric':
            return <torusGeometry args={[1.5, 0.1, 16, 100]} />; // Fiber loop
        case 'ai_application':
            return <boxGeometry args={[2, 3, 2]} />; // Server Rack
        default:
            return <boxGeometry args={[1, 1, 1]} />;
    }
};

const LayerMesh = ({
    layer,
    position,
    isSelected,
    onClick
}: {
    layer: LayerData;
    position: [number, number, number];
    isSelected: boolean;
    onClick: (id: string) => void;
}) => {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (mesh.current) {
            // Gentle floating animation
            mesh.current.rotation.y += 0.005;

            // Hover effect scale
            const targetScale = hovered || isSelected ? 1.2 : 1;
            mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    const color = isSelected ? '#007bff' : (hovered ? '#4fa3ff' : '#2a2a35');
    const emissive = isSelected ? '#003366' : (hovered ? '#001a33' : '#000000');

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh
                    ref={mesh}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(layer.id);
                    }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    {getGeometryForLayer(layer.id)}
                    <meshStandardMaterial
                        color={color}
                        roughness={0.2}
                        metalness={0.8}
                        emissive={emissive}
                        emissiveIntensity={0.5}
                    />
                </mesh>
            </Float>

            {/* Label above the component */}
            <Text
                position={[0, 2.5, 0]}
                fontSize={0.3}
                color={isSelected || hovered ? "white" : "#888"}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                {layer.displayName}
            </Text>
        </group>
    );
};

const OpticalInterconnectScene: React.FC<SceneProps> = ({ data, onLayerSelect, selectedLayerId }) => {
    // Calculate positions to spread them out horizontally
    const spacing = 4;
    const startX = -((data.layers.length - 1) * spacing) / 2;

    return (
        <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, #1a1a2e 0%, #000000 100%)' }}>
            <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
                <fog attach="fog" args={['#050505', 10, 50]} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={1} castShadow />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <group position={[0, 0, 0]}>
                    {data.layers.map((layer, index) => (
                        <LayerMesh
                            key={layer.id}
                            layer={layer}
                            position={[startX + index * spacing, 0, 0]}
                            isSelected={selectedLayerId === layer.id}
                            onClick={onLayerSelect}
                        />
                    ))}
                </group>

                <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.5} far={10} color="#000000" />

                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default OpticalInterconnectScene;
