import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ searchTerm, setSearchTerm }) {
    const handleChange = (e) => {
    setSearchTerm(e.target.value);
    };

    return (
      <div className="default-margin mt-5 mb-5">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleChange}
        className='c-bg'
        style={{
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        padding: '0.5rem 1.5rem 0.5rem'
        }}
      />
      </div>
    );
} 