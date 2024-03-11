import React from 'react'

export default function PropsDestructing({name,edu,city}) {
  return (
    <div>
        <h1> this is PropsDestructing</h1>
        <h2>Name:{name}</h2>
        <h2> Education :{edu}</h2>
        <h2> City:{city}</h2>
    </div>
  )
}
