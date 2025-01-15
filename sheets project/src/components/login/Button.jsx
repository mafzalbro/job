import React from 'react';

const Button = ({ onClick, children, bordered }) => {
    return (
        <button onClick={onClick} className={`button flex-center gap-2 ${bordered ? 'button-border' : 'button-bg button-text'}`}>
            {children}
        </button>
    )
}

export default Button
