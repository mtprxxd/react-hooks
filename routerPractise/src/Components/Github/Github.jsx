// import React, { use } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData();

  return (
    <div className="py-6 bg-orange-200 mx-4 ">Github Followers: {data.followers}
    <img src={data.avatar_url}  className='w-32 h-32 rounded-full mx-auto mt-4'/>
     </div>
    
  )
}

export default Github 

export const Gitloader = async () => {
    const res = await fetch('https://api.github.com/users/Vasu7389');
    return res.json();
}