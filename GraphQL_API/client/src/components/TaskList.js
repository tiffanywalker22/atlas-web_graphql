import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import TaskDetails from './TaskDetails';
import { tasksQuery } from '../queries/queries';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });
  function displayTasks() {
    console.log(props.data);
    var data = props.data;

    if (data.loading) {
      return (<div> Loading tasks... </div>);
    }
    else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => {
            setState({ selected: task.id });
          }}>
            {task.title}
          </li>);
      })
    }
  }

  return (
    <div>
        <ul id="task-list">
            {displayTasks()}
        </ul>
    </div>
);
}

export default graphql(tasksQuery)(TaskList);
