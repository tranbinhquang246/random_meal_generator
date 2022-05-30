import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Img from '../public/img.jpg'

function Result() {
    const [name, setName] = useState('name');
    const [intruction, setIntruction] = useState('intruction');
    const [img, setImg] = useState('https://www.themealdb.com/images/media/meals/vmz7gl1614350221.jpg');
    const [categoy, setCategoy] = useState('category');
    const [area, setArea] = useState('area');
    const [tag, setTag] = useState('tag');
    const [source, setSource] = useState('source');
    const [youtube, setYoutube] = useState('https://www.youtube.com/embed/1WDesu7bUDM');
    useEffect(()=>{
        async function getData() {
            try{
               await axios.get(`https://themealdb.com/api/json/v1/1/random.php`)
                .then(res => {
                    setName(res.data.meals[0].strMeal)
                    setIntruction(res.data.meals[0].strInstructions)
                    setImg(res.data.meals[0].strMealThumb)
                    setCategoy(res.data.meals[0].strCategory)
                    setArea(res.data.meals[0].strArea)
                    setTag(res.data.meals[0].strTags)
                    setSource(res.data.meals[0].strSource)
                    setYoutube(res.data.meals[0].strYoutube)
                    console.log(res.data.meals[0])
      })
            }catch(e){
                console.error(e);
            }
        }
        getData()
    },[])
  return (
    <div className="flex flex-col w-full h-full">
        <div className="flex mt-5 ml-20 mr-20 justify-center items-center">
        <img src={img} className="w-2/5 h-1/5" ></img>
        <div className="flex flex-col items-center ml-10">
            <strong className="text-3xl">{name}</strong>
            <p className="text-justify text-lg">{intruction}</p>
        </div>
        </div>
        <div className="flex flex-col mt-5 ml-20 mr-20">
            <div className="flex">
                <strong className="text-lg">Category: </strong>
                <p className="ml-5 text-lg">{categoy}</p>
            </div>
            <div className="flex">
                <strong className="text-lg">Area: </strong>
                <p className="ml-5 text-lg">{area}</p>
            </div>
            <div className="flex">
                <strong className="text-lg">Tag: </strong>
                <p className="ml-5 text-lg">{tag}</p>
            </div>
            <div className="flex">
                <strong className="text-lg">Source: </strong>
                <a href={source} className="ml-5 text-lg hover:text-sky-600 hover:leading-normal">Link here</a>
            </div>
        </div>
        <strong className="mt-5 ml-20 mr-20 text-2xl"> Video Recipe</strong>
        <div className="w-full h-full flex items-center justify-center">
            <iframe width="560" height="315" src='https://www.youtube.com/embed/1WDesu7bUDM' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Result