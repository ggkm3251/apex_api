import React from 'react'
import Developers from './Developers'
import { useState, useEffect } from "react"
import EntryScreen from "./EntryScreen"

const Home = () => {

  const [allDevelopers, setDevelopers] = useState([])

    function handleNewDeveloper(developer){
        setDevelopers([...allDevelopers, developer])
    }
    function deleteDeveloper({id}){
        setDevelopers(allDevelopers.filter(entry => entry.id !== id))

        fetch(`http://localhost:9292/developers/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }

    useEffect(()=>{
        fetch("http://localhost:9292/developers")
        .then(resp => resp.json())
        .then(developers => setDevelopers(developers))
    },[])

  return (
    <div>
      <h1>Developer Api Entries :SaaS</h1>
          <Developers handleNewDeveloper={handleNewDeveloper} deleteDeveloper={deleteDeveloper} allDevelopers={allDevelopers}/>
          <EntryScreen allDevelopers={allDevelopers}/>
    </div>
  )
}

export default Home
