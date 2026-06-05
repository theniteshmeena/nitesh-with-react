import React , {useContext} from 'react'
import UserContext from '../context/UserContext';


export default function Profile() {
  const { user } = useContext(UserContext);

  if(!user) {
    return <p>Please log in to view your profile.</p>
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.username}!</p>
    </div>
  )
}
