import React from 'react';
import { fetchReposQuery } from '../graphql-queries';
import { useQuery } from '@apollo/client';

const Repos = () => {

    const { data, loading, error } = useQuery(fetchReposQuery);

    if (loading) {
        return <p className="flow-text center">Loading...</p>
    }

    if (error) {
        return <p className="flow-text center red-text">Error...</p>
    }

    return (
        <div>
            <ul>
                {data.viewer.repositories.nodes.map(repo => <li repo={repo} key={repo.name}>
                    {repo.name}
                </li>)}
            </ul>
            <pre>
                {JSON.stringify(data, null, 3)}
            </pre>
        </div>
    )
}

export default Repos
