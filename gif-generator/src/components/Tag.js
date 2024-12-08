import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag() {
  // const[gif,setGif] = useState('');
  // const[loading,setLoading] = useState(false);
  const[tag,setTag] = useState('car');

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);

  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  // instead of using all the above code we used useGif hook that is custom made

  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler(){
      fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-orange-200 rounded-lg border-black flex flex-col items-center gap-y--5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>):(<img src={gif} width="450"/>)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center mt-3'
        onChange={changeHandler}
        value={tag}
      />
      
      <button onClick={clickHandler}
      className='w-10/12 bg-pink-600 text-lg py-2 rounded-lg mt-8 mb-7'>
        Generate
      </button>
    </div>
  )
}

export default Tag


// return se pehle wali cheez kam se kam ho utna optimal uske liye khud ka custom hook banayege