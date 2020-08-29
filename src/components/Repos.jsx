import React from 'react';
import { fetchReposQuery } from '../graphql-queries';
import { useQuery } from '@apollo/client';

const Repos = () => {

    const { data, loading } = useQuery(fetchReposQuery);

    if(loading){
        return <p className="flow-text center">Loading...</p>
    }

    return (
        <pre>
            {JSON.stringify(data, null, 3)}
        </pre>
    )
}

export default Repos
