import React from 'react'

async function getUsers() {
    const res = await fetch( `${process.env.BASE_URL}/api/getUsers` )
    if (!res.ok) {
        console.log(res)
    }
    return res.json()
}

export default async function page() {
    const data = await getUsers()
    console.log(data)
  return (
    
    <div>page</div>
  )
}
