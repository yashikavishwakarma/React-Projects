import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {

  const{gif,loading,fetchData} = useGif();
  function clickHandler(){
      fetchData();
  }
  return (
    <div className='w-1/2 bg-pink-200 rounded-lg border-black flex flex-col items-center gap-y--5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>):(<img src={gif} width="450"/>)
      }
      
      <button onClick={clickHandler}
      className='w-9/12 bg-pink-600 text-lg py-2 rounded-lg mt-8 mb-7'>
        Generate
      </button>
    </div>
  )
}

export default Random