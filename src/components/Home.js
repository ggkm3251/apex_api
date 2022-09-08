import React from 'react'
import Developers from './Developers'

const Home = () => {
  return (
    <div>
      <h1>Developer Api Entries</h1>
          <Developers handleNewCompany={handleNewDeveloper} deleteDeveloper={deleteDeveloper} allCompanies={allDevelopers}/>
          <EntryScreen allDevelopers={allDevelopers}/>
    </div>
  )
}

export default Home
