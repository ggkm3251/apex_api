import React from 'react'

const CreateDeveloper = ({handleNewDeveloper}) => {

  function handleAddDeveloper(){
    const developer = {
        developer_name: document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value
    }
    console.log(developer)
    document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value = ''
    
    fetch("http://localhost:9292/developers",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(developer)
    })
    .then(resp => resp.json())
    .then(resp => handleNewDeveloper(resp))
    
}

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
