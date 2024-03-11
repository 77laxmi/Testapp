import React from 'react'

export default function ConditionalRebdering({isLoggedIn}) {

  return (
    <div>
        <h1>
            Conditional rendering
        </h1>
        {isLoggedIn?<h1>User is Logged In </h1> : <h1>Need to sign up</h1>}
    </div>
  )
}
