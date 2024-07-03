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

export const addTaskMutation = gql`
    mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
        addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
            id
            title
        }
    }
`;

export const addProjectMutation = gql`
    mutation($title: String!, $weight: Int!, $description: String!) {
        addProject(title: $title, weight: $weight, description: $description) {
            id
            title
        }
    }
`;

export const getTaskDetailQuery = gql`
    query($id: ID!) {
        task(id: $id) {
            id
            title
            weight
            description
            project {
                id
                title
                weight
                description
                tasks {
                    id
                    title
                    weight
                }
            }
        }
    }
`;
