import Head from 'next/head'
import FoodLogo from '../public/food.png'
import React, {useState} from 'react'
import Result from '../components/Result';


export default function Home() {
  const [showResult, setshowResul] = useState(false);
  const handleClick = () => {
    setshowResul(true);
  }
  return (
    <div >
      <Head>
        <title>Random Meal Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 flex items-center w-full h-1/6 bg-gradient-to-r from-gray-50 to-gray-800">
          <img src={FoodLogo.src} className="w-1/12 h-1/12"></img>
          <div>
          <strong className="ml-5 text-slate-700">RANDOM MEAL GENERATOR </strong>
          <p className="mt-1 ml-5 text-slate-700">Generate a random meal from an TheMealDB API</p>
          </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <strong className="text-4xl text-gray-600"> Feeling hungry? </strong>
        <p>Get a random meal by clicking below</p>
        <button type="button" className="bg-gradient-to-t from-slate-500 to-sky-700 
        rounded-md p-3 font-bold" onClick={handleClick}>Get Meal 🍕</button>
        {showResult ?<Result></Result> : null}
      </div>
     
    </div>
  )
}
