import React, { useContext } from 'react'
import { BoiContext } from '../ContextApi/Index'



function Parent() {

  // TO ACCESS DATA FROM CONTEXT API WHAREHOUSE
  // 1) Destructuring context API data directly (for multiple data)
  const { myName, myAge } = useContext(BoiContext)

  // 2) For single data
  // const myName = useContext(BoiContext)

  return (
    <>
      <div style={{ textAlign: 'center', color: '#7B68EE' }} >
        <h1>Parent Data</h1>
        <h3>Hello context API, my name is {myName}! and I am {myAge} yr old!</h3>
        {/* <h3>Hello context API, my name is {myName}!</h3> */}
      </div>
    </>
  )
}

export default Parent