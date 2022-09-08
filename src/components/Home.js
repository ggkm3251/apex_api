import React from 'react'
import Developers from './Developers'

const Home = () => {
  return (
    <div>
      <h1>Developer Api Entries</h1>
          <Developers handleNewDeveloper={handleNewDeveloper} deleteDeveloper={deleteDeveloper} allDevelopers={allDevelopers}/>
          <EntryScreen allDevelopers={allDevelopers}/>
    </div>
  )
}

export default Home
