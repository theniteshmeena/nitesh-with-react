import React, {useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])


  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers : {data.followers}
        <img className="rounded-full w-32 h-32 mx-auto mt-4" src={data.avatar_url} alt={data.login} />
    </div>
  )
}

export const githubInfoLoader = async () => {
    // const response = await fetch('https://api.github.com/users/theniteshmeena')
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    return data
}