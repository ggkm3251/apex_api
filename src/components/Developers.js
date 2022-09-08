import React from 'react'

import CreateDeveloper from "./CreateDeveloper"
const Developers = ( {handleNewDeveloper, deleteDeveloper, allDevelopers} ) => {
  return (
    <div>
      <CreateDeveloper handleNewDeveloper={handleNewDeveloper}/>
            {allDevelopers.map((developer, index) => 
            <div key={index}>
                <p>{developer.developer_name}<button onClick={()=>deleteDeveloper(developer)}>remove</button></p>
                
            </div>
            )}
    </div>
  )
}

export default Developers
