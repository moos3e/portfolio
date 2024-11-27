import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';

const CursorParticles: React.FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadStarsPreset(engine); // Load the Stars preset
        }).then(() => setInit(true));
    }, []);

    return init ? (
        <Particles
            id="tsparticles"
            options={{
                preset: 'stars', // Use the Stars preset
                background: {
                    color: {
                        value: 'transparent', // Make the background transparent
                    },
                },
            }}
        />
    ) : null;
};

export default CursorParticles;