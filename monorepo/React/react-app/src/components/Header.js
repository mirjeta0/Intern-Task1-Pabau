import React from 'react';

function Header({ step }) {
    return (
        <header>
            <h3>Choose a Service</h3>
            <p>Current Step: {step}</p>
        </header>
    );
}

export default Header;
