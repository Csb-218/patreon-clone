import React from 'react'
import Group1 from '../Assets/SliderAssets/Group-1.png';
import Group2 from '../Assets/SliderAssets/Group-2.png';
import Group3 from '../Assets/SliderAssets/Group-3.png';
import Group4 from '../Assets/SliderAssets/Group-4.png';

const MidContent = () => {


  const Group = [
    {
        text:"Develop a recurring income stream",
        desc:"Share what you make directly with your biggest fans, build a dedicated community and get paid the way you want to.",
        image:Group1
    },
    {
        text:"Take back creative control",
        desc:"Create what you want and what your audience loves. You don’t have to conform to popular taste or the constraints of ad-based monetisation models.",
        image:Group3
    },
    {
        text:"Build a direct, meaningful connection with your audience",
        desc:"No ads, no trolls, no algorithms. Enjoy direct access and deeper conversations with the people who matter the most.",
        image:Group4
    },
    {
        text:"Who uses Patreon?",
        desc:"If you’re ready to take your work to the next level and willing to open your heart to your audience, Patreon is for you.",
        image:Group2
    },
  ]

  let creator = 'Find a creator you love';

  return (
    <div className="bg-white my-10 mx-3 flex flex-col items-center">
      <p className="text-5xl mx-3 font-bold text-center ">Search the 200,000+ creators on Patreon</p>
      <div className="bg-white md:w-8/12 w-full h-auto my-12 md:flex  justify-center">
        <div className="bg-stone-100 md:w-7/12 w-full rounded-full px-3 py-3 my-3 flex gap-2">
          <div>🔍</div>
          <input type="text" className="bg-stone-100 w-11/12 px-3" value={creator} ></input>
        </div>
        <button className="red-button md:w-2/12 w-full h-12 my-3">Search</button>
      </div>
      <p className="text-5xl font-bold text-center  ">What's Patreon?</p>
      <p className="bg-white my-5 h-40 sm:w-[600px]  text-center">On Patreon, you can let your fans become active participants in the work they love by offering them a monthly membership. You give them access to exclusive content, community, and insight into your creative process. In exchange, you get the freedom to do your best work and the stability you need to build an independent creative career.</p>
      
      {/*Cards*/}

       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-32 p-4 lg:w-[60rem]  w-11/12  ">
         {
             Group.map((item)=>{
                return(
                    <div>
                        <img src={item.image} alt=""></img>
                        <p className="text-2xl font-bold text-center">{item.text}</p>
                        <p className="text-center">{item.desc}</p>
                    </div>    
                )
             })
         }
       </div>
    </div>
  )
}

export default MidContent