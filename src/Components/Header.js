import React,{useState} from 'react'
import {cross} from '../Assets/HeaderAssets';

export const Header = (props) => {

  const[creator,setCreator]= useState("Find a creator")
  const [classnameP,setclassnameP] = useState("dropdownhide")
  const [classnameFC,setclassnameFC] = useState("dropdownhide")
  const [classnameR,setclassnameR] = useState("dropdownhide")
  const [NavMenu,setNavMenu] = useState("hidden");
  const [navP,setNavP] = useState("closed");
  const [navFC,setNavFC] = useState("closed");
  const [navR,setNavR] = useState("closed");
  

  return (
    <>
    
    <div className="lg:h-16 h-32 border-gray-200 bg-white border-y  p-4 flex gap-1 sticky top-0 z-50">

      {/*Logo*/}
      <div className="flex gap-1  absolute">
        <div className="bg-red-500 h-6 w-1"></div>
        <div className="bg-red-500 h-4 w-4 rounded-full "></div>
      </div>
      
      {/*Dropdown menu*/}
      <div className=" lg:flex hidden mx-14 gap-8  ">
      <div className={classnameP} onMouseOver={()=>setclassnameP("dropdown")} onMouseOut={()=>setclassnameP("dropdownhide")}>
            <button className=" text-sm">Product</button><span className = "mx-2">⌵</span>
            <div className={(classnameP==="dropdown")?"dropdown-content":"hidden"}>
              {
                props.Product.map(product =><a href="#" className="hover:bg-stone-100 text-left px-5 py-3">{product.P}<p className="text-xs">{product.text}</p></a>)
              }
            </div>
        </div>
       
       <div className={classnameFC} onMouseOver={()=>setclassnameFC("dropdown")} onMouseOut={()=>setclassnameFC("dropdownhide")}>
            <button className=" text-sm">For creators</button><span className = "mx-2">⌵</span>
            <div className={(classnameFC==="dropdown")?"dropdown-content":"hidden"}>
              {
                props.Forcreators.map(creator => <a href="#" className="hover:bg-stone-100 text-left text-sm py-3 flex"><img src={creator.img} className='h-6 w-6 mx-6 '></img>{creator.FC}</a>)
              }
            </div>
        </div>

        <div className=" pt-1">
          <p className=" text-sm ">Pricing</p>
        </div>
        <div className={classnameR} onMouseOver={()=>setclassnameR("dropdown")} onMouseOut={()=>setclassnameR("dropdownhide")}>
            <button className=" text-sm">Resources</button><span className = "mx-2">⌵</span>
            <div className={(classnameR==="dropdown")?"dropdown-content":"hidden"}>
              {
                props.Resources.map(resource => <a href="#" className="hover:bg-stone-100 text-left px-5 py-3">{resource}</a>)
              }
            </div>
            </div>
      </div>

      {/*Top right corner*/}
      <div className="flex gap-x-4 absolute w-auto right-3">

      {/*search bar*/}
      <div className="bg-stone-100  rounded-3xl px-3 lg:flex hidden  gap-2">
        <div>🔍</div>
        <input type="text" className="bg-stone-100 w-11/12 px-3" value={creator} ></input>
      </div>

      <button>Log In</button>
      <button className="red-button hover:underline">Create on Patreon</button>

        <div className="nav-menu-button" onClick={()=>{
          if(NavMenu==="nav-menu"){setNavMenu("hidden")}
          else{setNavMenu("nav-menu");}
        }
          
         } >
          <div className="w-5 h-0.5 my-1 bg-black"></div>
          <div className="w-5 h-0.5 my-1 bg-black"></div>
          <div className="w-5 h-0.5 my-1 bg-black"></div>
        </div>
      </div>

      {/*Responsive searchbar*/}
      <div className="bg-stone-100  w-full h-10 mt-12 rounded-3xl px-3 flex lg:hidden  gap-2">
        <div>🔍</div>
        <input type="text" className="bg-stone-100 w-11/12 px-3" value={creator} ></input>
      </div>

    </div>
    <div className={NavMenu} >
        <div className="flex relative w-full h-10  border-slate-200 border-b">
            {/*Logo*/}
            <div className="flex gap-1 ">
              <div className="bg-red-500 h-6 w-1"></div>
              <div className="bg-red-500 h-4 w-4 rounded-full "></div>
            </div>
            {/*Cross*/}
            <img src={cross} className="h-6 w-6 absolute right-0 cursor-pointer" onClick={()=>(NavMenu==="nav-menu"?setNavMenu("hidden"):setNavMenu("nav-menu"))} alt=""></img>
        </div>

        <div className={navP==="closed"?"nav-dropdown h-14":"nav-dropdown h-auto"} >
          <button className="mt-3 w-full text-left " onClick={(navP==="closed")?()=>setNavP("open"):()=>setNavP("closed")}>Product</button>
          <div className={(navP==="open")?"nav-dropdown-content cursor-pointer":"hidden"}>
            <div><p className="font-semibold">Lite</p><p className="font-light text-sm">Simple tools to set up reccuring support from your fans</p></div>
            <div><p className="font-semibold">Pro</p><p className="font-light text-sm">All tools to build and grow a thriving membership business</p></div>
            <div><p className="font-semibold">Premium</p><p className="font-light text-sm">For established creators and creative businesses</p></div>
          </div>
        </div>
        <div className={navFC==="closed"?"nav-dropdown h-14":"nav-dropdown h-auto"}>
          <button className="mt-3 w-full text-left " onClick={(navFC==="closed")?()=>setNavFC("open"):()=>setNavFC("closed")}>For creators</button>
          <div className={(navFC==="open")?"nav-dropdown-content cursor-pointer":"hidden"}>
            {
              props.Forcreators.map((creator) =><div><p className="font-light">{creator.FC}</p></div> )
            }
          </div>
        </div>
        <div className="nav-dropdown h-14">
          <button className="mt-3 w-full text-left ">Pricing</button>
        </div>
        <div className={navR==="closed"?"nav-dropdown h-14":"nav-dropdown h-auto"}>
          <button className="mt-3 w-full text-left " onClick={(navR==="closed")?()=>setNavR("open"):()=>setNavR("closed")}>Resources</button>
          <div className={(navR==="open")?"nav-dropdown-content cursor-pointer":"hidden"}>
            {
              props.Resources.map((resource) =><div><p className="font-light">{resource}</p></div> )
            }
          </div>
        </div>
        <div className="nav-dropdown h-14">
          <button className="mt-3 w-full text-left ">Create on Patreon</button>
        </div>
        <div className="nav-dropdown h-14">
          <button className="mt-3 w-full text-left ">Log In</button>
        </div>
        <div className="nav-dropdown h-14">
          <button className="mt-3 w-full text-left ">Sign up</button>
        </div>

    </div>
    </>
  )
}
