import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Recipelist from "../components/Recipelist";
import Favoritelist from "../components/Favoritelist";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='bg'>
      <div className="website-margin">

        <Navbar />
        <div className='mt-2 mb-2'>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <Recipelist searchTerm={searchTerm} />

      </div>
    </div>
  );
}