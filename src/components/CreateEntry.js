import React from 'react';

const CreateEntry = ({addEntry, allDevelopers}) => {

  function handleSubmit (e){
    e.preventDefault()
        const newEntry = {
            API : e.target[0].value,
            Description: e.target[2].value,
            Link: e.target[1].value,
            developerName: e.target[3].value
        }
        e.target.reset()
    fetch("http://localhost:9292/entries",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(resp => resp.json())
    .then(resp => addEntry(resp))
  }
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
