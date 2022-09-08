import React from 'react'

const CreateDeveloper = ({handleNewDeveloper}) => {
  return (
    <div>
      <h1> Create A Developer</h1>
            <label> Developer Name:
                <input type="text" placeholder="Developer Name"></input>
            </label>
            <button onClick={handleAddDeveloper}>Add</button>
    </div>
  )
}

export default CreateDeveloper
