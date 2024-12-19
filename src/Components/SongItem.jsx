import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {

  const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={ ()=>playWithId(id)} className=' min-w-[180px] rounded p-2 px-3 cursor-pointer hover:bg-[#ffffff26] '>
        <img className=' rounded' src={image} alt="" />
        <p className=' font-bold text-2xl '>{name}</p>
        <p className=' text-slate-200 text-sm '>{desc}</p>


    </div>
  )
}

export default SongItem