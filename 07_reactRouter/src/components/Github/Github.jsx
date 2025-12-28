import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/mtprxxd')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <div className='text-center text-3xl bg-gray-200 text-black p-4'>
      Github Followers: {data.followers}
      <img className='mx-auto mt-4 w-32 rounded-full' src={data.avatar_url} alt="avatar" />
    </div>
  )
}

export default Github
