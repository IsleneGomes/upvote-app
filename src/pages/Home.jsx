import React, { useContext } from 'react'
import UpvoteContext from '../context/UpvoteContext'

export default function Home() {
  const { data } = useContext(UpvoteContext);
  console.log(data);
  return (
    <div>
      <h1>Oi</h1>
    </div>
  )
}
