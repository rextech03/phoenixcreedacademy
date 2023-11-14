
import React from 'react'

async function getUsers() {
    const res = await fetch( `http://localhost:3000/api/users`, {
       next: { revalidate: 3 } 
    })
   
    return res.json()
}

export default async function page() {
    const data = await getUsers()
    console.log(data)
  return (
    
    <div>page</div>
  )
}


