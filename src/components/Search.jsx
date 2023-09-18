import { useState } from 'react'
import { search } from '../utils/apiCalls';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchQuery,setSearchQuery] = useState();
  return (
    <div>
      <form>
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
