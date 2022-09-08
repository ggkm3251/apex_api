import React from 'react'
import CreateEntry from './CreateEntry'

const EntryScreen = () => {
  return (
    <div>
      <CreateEntry addEntry={addEntry} allDevelopers={allDevelopers}/>
       {entries.map((entry, index)=>
         <div key={index}>
            <p><strong>API: </strong>{entry.API}</p>
            <p><strong>Description:</strong>{defineDescription(entry.Description)}</p>
            <p><strong>Link:</strong> {entry.Link}</p>
            <p><strong>Category:</strong> {entry.Category}</p>
            <p><strong>Developer:</strong>{entry.developer.developer_name}</p>
            <button onClick={()=>deleteLaunch(entry)}>Delete API</button>
            <hr></hr>
         </div> 
       )}
    </div>
  )
}

export default EntryScreen
