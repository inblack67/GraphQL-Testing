import React from 'react';
import { render, screen } from '@testing-library/react';
import { fetchReposQuery } from './graphql-queries'
import Repos from './components/Repos';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
    {
        request: {
            query: fetchReposQuery
        },
        result: {
            "data": {
                "viewer": {
                    "repositories": {
                        "nodes": [
                            {
                                "name": "git-Book-3.0",
                                "description": "Github GraphQL API",
                                "url": "https://github.com/inblack67/git-Book-3.0",
                                "languages": {
                                    "nodes": [
                                        {
                                            "color": "#e34c26",
                                            "name": "HTML"
                                        },
                                        {
                                            "color": "#f1e05a",
                                            "name": "JavaScript"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
];

it('renders repos', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Repos />
        </MockedProvider>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // getByText is not asynchronous
    const repoTitle = await screen.findByText('Headphones');
    expect(repoTitle).toBeInTheDocument();
})
