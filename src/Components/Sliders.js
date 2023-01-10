import React,{useState} from 'react';



const Sliders = () => {

  const ar =[],ar2 = [],ar3 = [],ar4 =[],slide=[0,1];

  for(let i = 1; i < 48; i++){
    if(i>=1 && i<12){ ar.push( `./ffff/${i}.jpg`)}
    if(i>12 && i<24){ ar2.push( `./ffff/${i}.jpg`)}
    if(i>24 && i<36){ ar3.push( `./ffff/${i}.jpg`)}
    if(i>36 && i<48){ ar4.push( `./ffff/${i}.jpg`)}
  }

  const [classname,setclassname]=useState('slide');
  const [classname2,setclassname2]=useState('slide');
  const [classname3,setclassname3]=useState('slide');
  const [classname4,setclassname4]=useState('slide');

  return (
    <>
    
    {/*text*/}
    <div>
        <div className="py-10 flex-row text-center">
            <p className="font-semibold text-5xl mb-8">Creativity powered by membership</p>
            <button className="red-button h-14 ">Get Started</button>
        </div>
    </div>
    
    {/*slider*/}
    <div className="overflow-hidden relative ">
      <div className="slider" onMouseOver={()=>setclassname('slide-pause')} onMouseOut={()=>setclassname('slide')} >
         {
            slide.map((i)=>{return( 
            <div className={classname}>
               {ar.map((item)=>{return(<img src={item} className="image" alt="" ></img>) })}
            </div>)})
         }
      </div>
      <div className="slider" onMouseOver={()=>setclassname2('slide-pause')} onMouseOut={()=>setclassname2('slide')} >
         {
            slide.map((i)=>{return( 
            <div className={classname2}>
               {ar2.map((item)=>{return(<img src={item} className="image -translate-x-32" alt="" ></img>) })}
            </div>)})
         }
      </div>
      <div className="slider" onMouseOver={()=>setclassname3('slide-pause')} onMouseOut={()=>setclassname3('slide')} >
         {
            slide.map((i)=>{return( 
            <div className={classname3}>
               {ar3.map((item)=>{return(<img src={item} className="image" alt="" ></img>) })}
            </div>)})
         }
      </div>
      <div className="slider" onMouseOver={()=>setclassname4('slide-pause')} onMouseOut={()=>setclassname4('slide')} >
         {
            slide.map((i)=>{return( 
            <div className={classname4}>
               {ar4.map((item)=>{return(<img src={item} className="image -translate-x-32" alt="" ></img>) })}
            </div>)})
         }
      </div>
      
    </div>
  

    
    
    
    
  </>
  )
  

  
}

export default Sliders