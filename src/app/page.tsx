
'use client';

import Link from 'next/link';
import RotatingText from '../../components/RotatingTextF';
import HoverTouchVideoGrid from '../../components/HoverTouchVideoGrid'
import GlobalClients from "../../components/GlobalClients";
import Review from '../../components/Review';
import OurTeam from '../../components/OurTeam'
import { PackageSearch,Store,PencilRuler,MonitorCog,BrainCog } from 'lucide-react';

function Home() {
  return (
    <>
      <div className="p-2  font-handre">
        <div className="mx-5  xl:mx-40 flex xl:flex-row flex-col gap-5 xl:gap-10 items-center justify-between">
            <div className="relative xl:w-1/2">
                <div className="text-3xl sm:text-5xl xl:text-6xl tracking-wide leading-[1.5]  font-boldonse"><a className="font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">G</a>lobal-Class Design Company</div>
                <h1   className='absolute pt-5 xl:pt-6 right-0 xl:left-0 font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>THE DESIGN PARTENER</h1>
            </div>
            <div className=" xl:w-1/2 overflow-hidden">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                controls
                className="w-[900px] xl:w-full h-[250px] md:h-[300px] object-cover"
                onError={(e) => console.error('Video error:', e)}
              >
                <source src="/videos/1000X1200-logo-v.mp4" type="video/mp4" />
              </video>
              <div className="flex items-center pt-2  text-2xl md:text-4xl ">
                    <div className="">Creative</div>
                    <div className="px-2 ml-1 text-purple-500 rounded-md ">
                      <RotatingText  
                        texts={[
                          "Hello, World!",
                          "React is Awesome!",
                        ]}
                        rotationInterval={2000}
                        />
                  </div>
                </div>
            </div>
          </div>

          <div className="mx-5 xl:mx-40 text-center py-25">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Our Servies</div>
              <div className="pt-3 text-xl  md:text-xl">We create beautiful Digital Products & Branding that your customers will love and we do a whole lot more.</div>
                <div className="pt-4 flex flex-wrap justify-center xl:gap-10 text-base sm:text-xl xl:text-4xl">
                    {/* First Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 px-2 xl:px-6 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">Design<div className="pt-2"><PackageSearch className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 px-4 xl:px-6 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">3D,VFX<div className="pt-2"><Store className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">Websites<div className="pt-2"><MonitorCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /> </div></div></Link>
                    </div>
                    {/* 2 Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]"><div>Videos</div><div className="pt-2"><PencilRuler className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/OurService"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]"><div>AI Design</div><div className="pt-2"><BrainCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                    </div>
                </div>

          </div>
          {/* About */}
          <div className="bg-[#ff9100] text-white py-10">
            <div className="mx-5 xl:mx-40">
            <h1 className='text-3xl'>Design is our language. Enhancing engagement between brands and people.</h1>
            <p>5+ Years. 25+ Clients.</p>
            </div>
          </div>




          <div className="pb-10 text-center pt-10 bg-blue-100">
            <div className="mx-5 xl:mx-40">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Our Results</div>
                <div className="pt-3 text-xl  md:text-2xl">We partner with start-ups to corporates, creating, or elevating their digital needs.</div>
                <HoverTouchVideoGrid/>
            </div>
          </div>
          
      </div>
        <div className=" bg-gray-800">
          <div className="mx-5 xl:mx-40">
        <GlobalClients/>
        </div>
      </div>

      <Review/>
      <OurTeam/>
      {/* <div className="2xl:mx-30">
      <HomeResultImage2/>
      </div> */}
    </>
  );
}

export default Home;