import React, { useState } from 'react';
import OpticalInterconnectScene from './components/OpticalInterconnectScene';
import LayerInfoPanel from './components/LayerInfoPanel';
import { opticalStackData } from './data/opticalStack';

const App: React.FC = () => {
    const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);

    const handleLayerSelect = (id: string) => {
        setSelectedLayerId(id === selectedLayerId ? null : id);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
            {/* 3D Scene Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <OpticalInterconnectScene
                    data={opticalStackData}
                    onLayerSelect={handleLayerSelect}
                    selectedLayerId={selectedLayerId}
                />
            </div>

            {/* Info Panel Overlay */}
            <LayerInfoPanel
                data={opticalStackData}
                selectedLayerId={selectedLayerId}
            />

            {/* Mobile/Overlay Hint */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                pointerEvents: 'none',
                zIndex: 5
            }}>
                Drag to rotate • Scroll to zoom • Click components for details
            </div>
        </div>
    );
};

export default App;
