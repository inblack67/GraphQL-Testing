import { gql } from '@apollo/client';

export const fetchReposQuery = gql`
{
  viewer {
    repositories(last: 100, isFork: false) {
      nodes {
        name
        description
        url
        languages(first: 5) {
          nodes {
            color
            name
          }
        }
      }
    }
  }
}
`;