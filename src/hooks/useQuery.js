/* eslint-disable no-lone-blocks */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

{
  /*
    usage:
    import useQuery from '../path/useQuery';
    const App = ()=> {
        const query = useQuery('query')
        ....
        console.log(query)
    }
  
*/
}

const useQuery = (term) => {
  const [state, setState] = useState();
  const { search } = useLocation();
  useEffect(() => {
    setState(new URLSearchParams(search).get(term));
  }, [search, term]);
  return state;
};

export default useQuery;
