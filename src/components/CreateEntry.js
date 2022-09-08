import React from 'react'

const CreateEntry = () => {
  return (
    <div>
      <h1>Create An API</h1>
          <form onSubmit={handleSubmit}>
            <label>Entry Name:</label>
                <input type='text' name="entryName" placeholder='Entry Name'></input>
            <label>Description:</label>
            <input type='text' name="description" placeholder='Description'></input>
            <label>Link:</label>
                <input type='text' name='link' placeholder="Link"></input>
            <label>Developer Name:</label>
                <select>
                    {allDevelopers.map((developer, index) => <option key={index}>{developer.developer_name}</option>)}   
                </select>    
                <input type='submit'></input>
          </form>
    </div>
  )
}

export default CreateEntry
