import React from 'react';

type Props = { children: React.ReactNode };

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      onClick={() => console.log(children)}
      style={{
        padding: '0.75rem 1rem',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        backgroundColor: '#00FF7F',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
