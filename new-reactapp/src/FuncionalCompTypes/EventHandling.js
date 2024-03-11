import React from 'react'

export default function EventHandling({onClick,lable}) {
  return (
    <div>
        <h1> Event Handling In Functional Component</h1>
        <button onClick={onClick}>{lable}</button>
    </div>
  )
}
