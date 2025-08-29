import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ searchTerm, setSearchTerm }) {
    const handleChange = (e) => {
    setSearchTerm(e.target.value);
    };

    return (
      <div className="temp-border default-margin">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleChange}
      />
      </div>
    );
} 