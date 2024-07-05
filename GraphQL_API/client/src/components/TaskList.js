import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import TaskDetails from './TaskDetails';
import { tasksQuery } from '../queries/queries';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  const setSelected = (id) => {
    setState({
      selected: id
    });
  };


  function displayTasks() {
    const data = props.data;
    if (data.loading) {
      return (<div> Loading tasks... </div>);
    }
    else {
      return data.tasks.map(task => (
        <li key={task.id} onClick={() => setSelected(task.id)}>
          {task.title}
        </li>
      ));
    }
  }

  return (
    <div>
        <ul id="task-list">
            {displayTasks()}
        </ul>
        <TaskDetails taskId={state.selected} />
    </div>
  );
}

export default graphql(tasksQuery)(TaskList);
