import React from 'react'

async function getUsers() {
    const res = await fetch("/api/getUsers")
}

export default function page() {
  return (
    <div>page</div>
  )
}
