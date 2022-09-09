import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import CreateEntry from './CreateEntry'

const EntryScreen = ({allDevelopers}) => {

  const [entries, setEntries] = useState([])

    useEffect(()=>{
      fetch("http://localhost:9292/entries")
      .then((r) => r.json())
      .then(entries => setEntries(entries))
    },[])

    function deleteEntry({id}){
        setEntries(entries.filter(entry => entry.id !== id))
        fetch(`http://localhost:9292/entries/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }
    
    function addEntry(newEntry){ 
        setEntries([...entries, newEntry])
    }

  return (
    <div>
      <CreateEntry addEntry={addEntry} allDevelopers={allDevelopers}/>
       {entries.map((entry, index)=>
         <div key={index}>
            <p><strong>API: </strong>{entry.API}</p>
            <p><strong>Description:</strong>{entry.Description}</p>
            <p><strong>Link:</strong> {entry.Link}</p>
            <p><strong>Category:</strong> {entry.Category}</p>
            <p><strong>Developer:</strong>{entry.developer.developer_name}</p>
            <button onClick={()=>deleteEntry(entry)}>Delete API</button>
            <hr></hr>
         </div> 
       )}
    </div>
  )
}

export default EntryScreen
