import React from 'react';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    bordered?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, bordered }) => {
    return (
        <button onClick={onClick} className={`button flex-center gap-2 ${bordered ? 'button-border' : 'button-bg button-text'}`}>
            {children}
        </button>
    )
}

export default Button
