import React from 'react';
import { Popover } from '@reactour/popover';

export default function App() {
    const sizes = {
        bottom: 0,
        left: 0,
    };

    return (
        <div style={{ backgroundColor: 'red' }}>
            {/* ... */}
            <Popover sizes={sizes}></Popover>
        </div>
    );
}
