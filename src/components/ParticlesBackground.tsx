import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import type { Engine } from '@tsparticles/engine';

const ParticlesBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: 'stars',
                background: {
                    color: 'black',
                },
                fullScreen: { enable: false },
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticlesBackground; 