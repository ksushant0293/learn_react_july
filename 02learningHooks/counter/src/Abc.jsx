import React, { useState } from 'react'

const Abc = ({counter, name}) => {
    const [username, setUsername] = useState("alma")
  return (
    <div>
      <button className=''>counter value: {counter } {name} </button>
      <button className=''>username {username}</button>
    </div>
  )
}

export default Abc
