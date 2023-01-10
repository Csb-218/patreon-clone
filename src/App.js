
import React from 'react';
import {Podcast,Video,Music,Visual,Communities,Writers,Gaming,Nonprofits,Tutorial,Local,Creators} from './Assets/HeaderAssets';
import {Header} from './Components/Header';
import Sliders from './Components/Sliders';
import MidContent from './Components/MidContent';
import Categories from './Components/Categories';
import Footer from './Components/Footer';

const Product =[
  { P:"Lite",
    text:"Simple tools to set up reccuring support from your fans"},
  { P:"Pro",
    text:"All tools to build and grow a thriving membership business "},
  { P:"Premium",
    text:"For established creators and creative businesses "}
]
const Forcreators = [
  {FC:"Podcasters",img:Podcast},
  {FC:"Video Creators",img:Video},
  {FC:"Musicians",img:Music,},
  {FC:"Visual Artists",img:Visual},
  {FC:"Communities",img:Communities},
  {FC:"Writers & Journalists",img:Writers},
  {FC:"Gaming Creators",img:Gaming},
  {FC:"Non-Profits",img:Nonprofits},
  {FC:"Tutorials and Education",img:Tutorial},
  {FC:"Local Businesses",img:Local},
  {FC:"Creators-of-all-kinds",img:Creators}  
]
const Resources = ["Blog","Creator Community","Events","Patreon U"]

const Company = ["About","Press","Careers","Privacy","Policy & Terms","Privacy Preferences","Accesibility","Impressum"]


const App = () => {
  return (
    <>
   <Header Product={Product}  Forcreators ={ Forcreators } Resources={Resources} />
   <Sliders/>
   <MidContent/>
   <Categories/>
   <Footer Product={Product}  Forcreators ={ Forcreators } Resources={Resources} Company={Company}/>


   
   </>
  )
}

export default App