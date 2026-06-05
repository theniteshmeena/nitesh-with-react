import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userid } = useParams()
  return (
    <div className="bg-green-300 text-center text-white text-lg font-bold text-3xl py-2">User : {userid}</div>
  )
}
