import { usePWA } from './hooks/usePWA';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Recipelist from "./components/Recipelist";
import Favoritelist from "./components/Favoritelist";

export default function Favorite() {
  const { isInstallable, installApp, isOnline } = usePWA();

  
  return (
    <div className="website-margin">

      <Navbar />
      <Searchbar />
      <Favoritelist />

    </div>
  );
}