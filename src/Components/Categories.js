import React,{useState} from 'react'
import {Frame1,Frame2,Frame3} from '../Assets/SliderAssets'

const Categories = () => {

    const video =[],Podcast = [],Visual = [],Musicians =[],Others=[];
     
    for(let i = 1; i < 6; i++){video.push(`./ffff/01_video_0${i}.jpg`)}
    for(let i = 1; i < 6; i++){Podcast.push(`./ffff/02_pod_0${i}.jpg`)}
    for(let i = 1; i < 6; i++){Visual.push(`./ffff/03_vis_0${i}.jpg`)}
    for(let i = 1; i < 6; i++){Musicians.push(`./ffff/04_music_0${i}.jpg`)}
    for(let i = 1; i < 6; i++){Others.push(`./ffff/05_other_0${i}.jpg`)}
    
   
const [active,setactive] = useState(0);


  const cards = [
    {
       sn:0,
       category:'video creators',
       images:video,
    },
    {
        sn:1,
        category:'Podcasters',
        images:Podcast,
     },
     {
        sn:2,
        category:'Visual Artists',
        images:Visual,
     },
     {
        sn:3,
        category:'Musicians',
        images:Musicians,
     },
     {
        sn:4,
        category:'Others',
        images:Others,
     },
  ]

  const Frames = [
   {
      img:Frame1,
      text:'After being censored on Instagram, feminist activists are turning to Patreon'
   },
   {
      img:Frame2,
      text:'When YouTube stood between YaBoyRoshi and their community, they took their community to Patreon'
   },
   {
      img:Frame3,
      text:'How Patrick Hinds turned his true crime obsession into a career'
   },


  ]

  return (

    <div className="bg-white flex flex-col items-center text-center my-5">
        <p className="text-5xl font-bold my-7 ">It’s easier than you think</p>
        <p>There are many ways to delight your fans and every creator does this in their own way.</p>
        <div className="md:bg-stone-100 flex flex-wrap justify-center gap-6  rounded-full px-4 py-2">
            {
                cards.map((card)=>
                { if(card.sn===active){
                   return <button className=' red-button' onClick={()=>setactive(card.sn)}>{card.category}</button>
                }
                else{
                   return <button className='cat-button hover:red-button' onClick={()=>setactive(card.sn)}>{card.category}</button>
                }
            })
            }
        </div>

        <div className="flex my-4  overflow-scroll   ">
            {
                cards[active].images.map((image)=><img src={image} className="w-48 sm:w-56" alt=""></img>)
            }
        </div>

        <p className="my-10 text-5xl font-bold "> Are you ready to take back control?</p>
        <p className=" w-[450px]">See how creators and their communities are using Patreon to take back creative control.</p>

        <div className=" my-20 md:flex grid grid-cols-1 mx-4 gap-10">
         {
            Frames.map((frame)=> {
               return(
                  <div className="md:w-80 text-start cursor-pointer ">
                     <img src={frame.img} alt ="" className="w-full"></img>
                     <p className="my-5  font-bold text-xl ">{frame.text}</p>
                     <p className="underline">Read More</p>
                  </div>
               )
            })
         }
        </div>

        <div className="bg-stone-100 h-96  py-36 w-full ">
          <p className=" font-bold text-4xl">Ready to start your membership?</p>
          <button className="red-button my-4">Get Started</button>
        </div>

    </div>
  )
}

export default Categories