import { usePWA } from './hooks/usePWA';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Recipelist from "./components/Recipelist";
import Favoritelist from "./components/Favoritelist";

export default function App() {
  const { isInstallable, installApp, isOnline } = usePWA();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="website-margin">

      <Navbar />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Recipelist searchTerm={searchTerm} />

    </div>
  );
}