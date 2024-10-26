import React from 'react'
import Hero from './Hero'
import Food from './Food'
import Pics from './Pics'

const Home = ({handleAdd}) => {
  return (
    <div>
        <Hero/>
        <Food/>
        <Pics handleAdd={handleAdd}/>

    </div>
  )
}

export default Home