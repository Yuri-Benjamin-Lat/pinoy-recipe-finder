import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Recipelist from "../components/Recipelist";
import Favoritelist from "../components/Favoritelist";

export default function Favorite() {
  
  return (
    <div className='bg2'>
      <div className="website-margin">

        <Navbar />
        <div className='mt-2 mb-2'>
        <Searchbar />
        </div>
        <Favoritelist />

      </div>
    </div>
  );
}