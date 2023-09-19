import { useSearchParams } from "react-router-dom"
import VideoCardList from "./VideoCardList";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div>
         <VideoCardList params={{q:searchParams.get('search_query')}} />
    </div>
  )
}

export default SearchResults
