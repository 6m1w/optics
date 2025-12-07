import React from 'react';
import { OpticalStackData } from '../data/opticalStack';

interface LayerInfoPanelProps {
    data: OpticalStackData;
    selectedLayerId: string | null;
}

const LayerInfoPanel: React.FC<LayerInfoPanelProps> = ({ data, selectedLayerId }) => {
    const selectedLayer = data.layers.find(l => l.id === selectedLayerId);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '350px',
            background: 'rgba(10, 10, 15, 0.85)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            zIndex: 10,
            transition: 'transform 0.3s ease',
            // Mobile responsive logic would typically be handled via CSS media queries or CSS-in-JS
            // For simplicity here, we assume desktop first as requested.
        }}>
            {/* Header Section */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem 0', background: 'linear-gradient(90deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {data.title}
                </h1>
                <h2 style={{ fontSize: '0.9rem', fontWeight: 400, color: '#888', margin: 0, fontStyle: 'italic' }}>
                    {data.subtitle}
                </h2>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#ccc', marginTop: '1rem', borderLeft: '3px solid #007bff', paddingLeft: '1rem' }}>
                    {data.intro}
                </p>
            </div>

            <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', margin: '0 0 2rem 0' }} />

            {/* Detail Section */}
            {selectedLayer ? (
                <div className="layer-detail" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: '#007bff',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        LAYER: {selectedLayer.id.toUpperCase()}
                    </div>

                    <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{selectedLayer.displayName}</h3>

                    <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#ddd', marginBottom: '2rem' }}>
                        {selectedLayer.description}
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', letterSpacing: '1px', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            Typical Examples
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {selectedLayer.examples.map((ex, idx) => (
                                <span key={idx} style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {ex}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', letterSpacing: '1px', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            Core Companies
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            {selectedLayer.coreCompanies.map((company, idx) => (
                                <li key={idx} style={{ fontSize: '0.9rem', color: '#bbb', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', background: '#007bff', borderRadius: '50%', marginRight: '8px' }}></span>
                                    {company}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textAlign: 'center' }}>
                    <p>Select a component in the view to see details</p>
                </div>
            )}

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default LayerInfoPanel;
