import React from 'react';

const ModuleHeading = ({ heading }) => {
    return (
        <h2 className="text-center text-3xl font-bold tracking-wide border-b border-border p-4">
            {heading}
        </h2>
    );
};

export default ModuleHeading;