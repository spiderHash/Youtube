import { useSearchParams } from "react-router-dom"
import VideoCardList from "./VideoCardList";
import Navbar from "./Navbar";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div>
         <Navbar />
         <VideoCardList params={{q:searchParams.get('search_query')}} />
    </div>
  )
}

export default SearchResults
