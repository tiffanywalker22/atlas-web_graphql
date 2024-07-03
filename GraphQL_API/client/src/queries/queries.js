import { gql } from 'apollo-boost';

export const tasksQuery = gql`
    {
        tasks {
            id
            title
        }
    }
`;

export const projectsQuery = gql`
    {
        projects {
            id
            title
        }
    }
`;
