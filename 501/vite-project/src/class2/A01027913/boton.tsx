import React from "react";

interface props {
    label: string;
    onClick: () => void;
}

const Boton: React.FC<props> = ({label, onClick}) => {
    return (
        <button 
        onClick={onClick} 
        style={{padding: '10px 10px', backgroundColor: 'green', color: 'white'}}>
            {label}
        </button>
    );
};

export default Boton