import React from 'react'
import {twitter,facebook,youtube,instagram} from '../Assets/FooterAssets';
const Footer = (props) => {
    const icons = [twitter,facebook,youtube,instagram]
  return (
    <div className=" bg-black text-white p-16  ">
       {/*Logo*/}
      <div className="flex gap-1 ">
        <div className="bg-white h-6 w-1"></div>
        <div className="bg-white h-4 w-4 rounded-full "></div>
        <div className="md:hidden flex absolute right-16">
            {
                icons.map((icon) =><img src={icon} alt="" className="rounded-full w-10 h-10"></img>)
            }
         </div>
      </div>

          <div className='md:flex my-14 '>
              <div className="  flex flex-col gap-2 md:w-2/5">
                  <div className=" border rounded-sm p-2 w-full">Language: English (United Kingdom)</div>
                  <div className=" border rounded-sm p-2 w-full">🇮🇳 India</div>
                  <div className=" border rounded-sm p-2 w-full">Currency: USD</div>
                  <div className="md:flex md:mt-40 hidden">
                  {
                      icons.map((icon) =><img src={icon} alt="" className="rounded-full w-10 h-10"></img>)
                  }
                  </div>
              </div>

              <div className="  w-full  md:flex  md:gap-14 justify-center grid grid-cols-2 my-5 md:my-0 mx-5 ">
                  <div className=" "><p className="text-sm font-bold my-3">Product</p>
                      {props.Product.map((product) => <p className="font-extralight">{product.P}</p>)}
                  </div>
                  <div className=""><p className="text-sm font-bold my-3">For Creator</p>
                      {props.Forcreators.map((creator) => <p className="font-extralight">{creator.FC}</p>)}
                  </div>
                  <div className=""><p className="text-sm font-bold my-3">Resources</p>
                      {props.Resources.map((resource) => <p className="font-extralight">{resource}</p>)}
                  </div>
                  <div className=""><p className="text-sm font-bold my-3">Company</p>
                      {props.Company.map((company) => <p className="font-extralight">{company}</p>)}
                  </div>
              </div>
          </div>
        <div className="">
            <p>©Patreon Sitemap </p>
            <div className="text-sm my-2 space-y-2">
                  <p>600 Townsend Street, Suite 500</p>
                  <p>San Francisco, CA 94103</p>
                  <p>USA</p>
                  <p>Phone: +1 (833) 972-8766</p>
             </div>
            
        </div>    


      

    </div>
  )
}

export default Footer