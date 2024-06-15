import React, { useState } from 'react';

const BuilderComponent = () => {
    const [selectedParts, setSelectedParts] = useState([]);

    // Define your computer parts
    const parts = [
        { id: 1, name: 'CPU' },
        { id: 2, name: 'RAM' },
        { id: 3, name: 'GPU' },
        { id: 4, name: 'MotherBoard' },
        { id: 5, name: 'HDD' },
        { id: 6, name: 'SSD' },
        { id: 7, name: 'Cooler' },
        { id: 8, name: 'PSU' },
        { id: 9, name: 'Case' },
    ];

    const handlePartClick = (part) => {
        setSelectedParts((prevSelectedParts) => [...prevSelectedParts, part]);
    };

    return (
        <div className="builder-container">
            <div className="grid grid-cols-3 gap-4">
                {parts.map((part) => (
                    <div
                        key={part.id}
                        className="bg-gray-200 p-4 text-center cursor-pointer rounded-lg shadow-md box-content h-40 w-40"
                        onClick={() => handlePartClick(part)}
                    >
                        {part.name}
                    </div>
                ))}
            </div>
            <div className="selected-parts">
                {selectedParts.map((part) => (
                    <div key={part.id} className="part bg-blue-200 p-2 rounded-lg shadow-md box-content h-40 w-40">
                        {part.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuilderComponent;

