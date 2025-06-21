
'use client';

import Link from 'next/link';
import RotatingText from '../../components/RotatingTextF';
import OurRecentClients from '../../components/OurRecentClients';
import HoverTouchVideoGrid from '../../components/HoverTouchVideoGrid'
import Review from '../../components/Review';
import OurTeam from '../../components/OurTeam'
import { PackageSearch,Store,PencilRuler,MonitorCog,BrainCog } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="p-2 mx-5 xl:mx-40 font-handre">
          <div className="text-3xl sm:text-5xl xl:text-7xl tracking-wide leading-[1.5] pt-5 font-boldonse"><a className="text-red-500">G</a>lobal-Class Design Company</div>

            
          <div className="flex items-center h-15 xl:h-auto  text-2xl md:text-4xl xl:mt-10">
              <div className="">Creative</div>
              <div className="px-2 ml-1 bg-blue-200 rounded-md ">
                <RotatingText  
                  texts={[
                    "Hello, World!",
                    "React is Awesome!",
                    "Animating with Framer Motion!"
                  ]}
                  rotationInterval={2000}
                  />
            </div>
          </div>

          <div className="flex justify-center pt-5 overflow-hidden">
           <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              controls
              className="w-full max-w-[800px]"
              onError={(e) => console.error('Video error:', e)}
            >
              <source src="/Videos/degzzo-logo-v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          
          <Link rel="stylesheet" href="" >
           <div className="flex justify-center mt-6  items-center cursor-pointer ">
            <div className=" text-2xl xl:text-4xl ">Get in touch</div>
            <div className="pl-3"><FaArrowRight size={25}  /></div>
          </div>
          </Link>

          <div className="">
              <div className="text-2xl pt-10 lg:text-3xl font-poppins font-bold ">Our Servies</div>
              <div className="pt-3 text-xl  md:text-2xl">We create beautiful Digital Products & Branding that your customers will love and we do a whole lot more.</div>
                <div className="pt-4 flex flex-wrap justify-center xl:gap-10 text-base sm:text-xl xl:text-4xl">
                    {/* First Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 px-2 xl:px-6 rounded-2xl  transition hover:-translate-y-2">Design<div className="pt-2"><PackageSearch className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 px-4 xl:px-6 rounded-2xl  transition hover:-translate-y-2">3D,VFX<div className="pt-2"><Store className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2">Websites<div className="pt-2"><MonitorCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /> </div></div></Link>
                    </div>
                    {/* 2 Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2"><div>Videos</div><div className="pt-2"><PencilRuler className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2"><div>AI Design</div><div className="pt-2"><BrainCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                    </div>
                </div>

          </div>

          <div className="pb-10 pt-10">
                <div className="text-2xl  lg:text-3xl font-poppins font-bold ">Our Results</div>
                <div className="pt-3 text-xl  md:text-2xl">We partner with start-ups to corporates, creating, or elevating their digital needs.</div>
                <div className="flex items-center cursor-pointer "><div className=" text-lg  ">Expoler</div><div className="pl-3"><FaArrowRight /></div> 
                 
          </div>
          <HoverTouchVideoGrid/>
                
          </div>
          
      </div>
      <OurRecentClients/>
      <Review/>
      <OurTeam/>
      {/* <div className="2xl:mx-30">
      <HomeResultImage2/>
      </div> */}
    </>
  );
}

export default Home;