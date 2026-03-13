// Input.js
import React from 'react';

const Input = ({ id, type = 'text', placeholder, className, ...props }) => {
    return (
        <input 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            className={`block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:text-sm transition-all duration-200 ${className}`} 
            {...props} 
        />
    );
};

export default Input;
