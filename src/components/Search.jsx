import { useState } from 'react'
import { search } from '../utils/apiCalls';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchQuery,setSearchQuery] = useState();
    const navigate = useNavigate();
    const handleSearch = (e) =>{
        e.preventDefault();
        navigate('results?search_query='+searchQuery);
    }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Start Typing..."
        />
        <button type="submit">GO</button>
      </form>
    </div>
  )
}

export default Search
