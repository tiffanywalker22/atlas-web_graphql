import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addProjectMutation, projectsQuery } from '../queries/queries';


function AddProject(props) {

  const [inputsProject, setInputsProject] = useState({
    title: '',
    weight: 1,
    description: ''

  });

  const submitForm1 = (e) => {
    e.preventDefault();
    props.addProjectMutation({
      variables: {
        title: inputsProject.title,
        weight: inputsProject.weight,
        description: inputsProject.description
      },
      refetchQueries: [{ query: projectsQuery }]
    });
  }

  return (
    <form className="project" id="add-project" onSubmit={submitForm1}>
      <div className="field">
        <label>Project title:</label>
        <input type="text" name="title" onChange={handleChange} value={inputsProject.title} required />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input type="number" name="weight" onChange={handleChange} value={inputsProject.weight} required />
      </div>
      <div className="field">
        <label>description:</label>
        <textarea name="description" onChange={handleChange} value={inputsProject.description} required />
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
  graphql(addProjectMutation, { name: "addProjectMutation" })
)(AddProject);
