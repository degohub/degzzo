"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Ourservicefor from '../../../components/Ourservicefor'


const designServices = [
  {
    title: "Digital Branding",
    desc: "Build impactful brand systems across digital platforms.",
  },
  {
    title: "3D Branding Assets",
    desc: "Turn your logos, icons, or mascots into stunning 3D visuals.",
  },
  {
    title: "UI & UX DESIGN",
    desc: "Craft clean, scalable, and modern UI components.",
  },
  {
    title: "3D Animation",
    desc: "Create smooth, dynamic animations that explain, engage, and impress.",
  },
  {
    title: "Motion Graphics",
    desc: "Animate your message to stand out in motion.",
  },
  {
    title: "AR/VR Ready Models",
    desc: "Prepare assets optimized for WebGL, AR try-ons, or immersive demos.",
  },
  
  {
    title: "Digital Illustrations",
    desc: "Custom illustrations that reflect your brand's tone.",
  },
  {
    title: "3D Product Visualization",
    desc: "Showcase your product with photorealistic, interactive 3D renders.",
  },
  {
    title: "Intelligent Design",
    desc: "Merge creative with AI to build adaptive systems.",
  },
];

const videoServices = [
  {
    title: "Video Editing",
    desc: "Crisp, engaging edits that bring your story to life for any platform.",
  },
  {
    title: "Motion Graphics",
    desc: "Dynamic text, icons, and animations that captivate and inform.",
  },
  {
    title: "2D Animation",
    desc: "Illustrated animations for explainer videos, intros, and branding.",
  },
  {
    title: "Reels & Shorts",
    desc: "Fast, trendy edits for Instagram, YouTube Shorts, and TikTok.",
  },
  {
    title: "Product Videos",
    desc: "Polished videos that show off features, benefits, and value.",
  },
  {
    title: "Corporate   Brand Films",
    desc: "Professional storytelling for internal comms or brand marketing.",
  },
];


const buildServices = [
  {
    title: "Front-End Development",
    desc: "Pixel-perfect, performant websites with React and modern frameworks.",
  },
  {
    title: "Web Applications",
    desc: "Custom platforms built to scale with your business.",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform apps with seamless UX on iOS and Android.",
  },
  {
    title: "Custom Applications",
    desc: "Tailored solutions built from the ground up.",
  },
  {
    title: "SAAS Implementation",
    desc: "Launch or integrate Software-as-a-Service products.",
  },
  {
    title: "CMS Integration",
    desc: "Flexible content management with WordPress, Sanity, or Strapi.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen py-10 px-6 md:px-12 xl:px-32 ">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><>
      <div className=""><Ourservicefor/></div>
      <div className="">Our Services</div>
        </>
      </motion.h1>

      <div className="">
        {/* Design Services */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 ">Design Services</h2>
          
          <ul className="grid grid-cols-2 gap-10">
            {designServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                
              >
                {/* <Link
                  href={`/services/${toSlug(service.title)}`}
                  className="block group"
                > */}
                  <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                {/* </Link>
                 */}
              </motion.li>
              
            ))}
          </ul>
          
        </motion.div>

        {/* video editing */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 mt-20">Video Production Services</h2>
          <ul className="grid grid-cols-2 gap-10">
            {videoServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {/* <Link
                  href={`/services/${toSlug(service.title)}`}
                  className="block group"
                > */}
                  <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                {/* </Link> */}
                
              </motion.li>
              
            ))}
          </ul>
          {/* <ViewProjectsVideo/> */}
        </motion.div>
        {/* <div className=" flex flex-wrap rounded-xl  bg-blue-200">
              <div className="w-full sm:w-1/2  p-4 content-center">
                <Image
                  className="rounded-full w-30 mx-auto"
                  src="/200X200-logo.png"
                  alt="Company Logo"
                  width={150}
                  height={150}
                  priority={false}
                />
                <h1 className="text-center text-lg sm:text-xl font-bold">Indumathi</h1>
                <p className="text-center text-sm sm:text-md">Development Head</p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                <p className="text-center text-sm sm:text-md mt-2">
                  Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                </p>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Build%20expert%20for%20Meeting", "hii Degzzo")}>Let&rsquo;s talk</button>
                </div>
              </div>
        </div> */}
            {/* <ViewProjects1/> */}
              <div className=" my-10 flex flex-wrap rounded-xl bg-blue-300">
                  <div className="w-full sm:w-1/2  p-4 content-center">
                    <Image
                      className="rounded-full w-30 mx-auto"
                      src="/200X200-logo.png"
                      alt="Company Logo"
                      width={150}
                      height={150}
                      priority={false}
                    />
                    <h1 className="text-center text-lg sm:text-xl font-bold">HarishRagul</h1>
                    <p className="text-center text-sm sm:text-md">Creative Director</p>
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                    <p className="text-center text-sm sm:text-md mt-2">
                      Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                    </p>
                    <div className="flex justify-center mt-4">
                      <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Design%20expert%20for%20Meeting", "hii Degzzo")}>
                        Let&rsquo;s talk
                      </button>
                    </div>
                  </div>
              </div>

        {/* Build Services */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 mt-6">Build Services</h2>
          <ul className="grid grid-cols-2 gap-10">
            {buildServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {/* <Link
                  href={`/services/${toSlug(service.title)}`}
                  className="block group"
                > */}
                  <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                {/* </Link> */}
                
              </motion.li>
              
            ))}
          </ul>
          {/* <ViewProjectsBuild/> */}
        </motion.div>
        <div className=" mt-10  flex flex-wrap rounded-xl  bg-blue-200">
              <div className="w-full sm:w-1/2  p-4 content-center">
                <Image
                  className="rounded-full w-30 mx-auto"
                  src="/200X200-logo.png"
                  alt="Company Logo"
                  width={150}
                  height={150}
                  priority={false}
                />
                <h1 className="text-center text-lg sm:text-xl font-bold">Indumathi</h1>
                <p className="text-center text-sm sm:text-md">Development Head</p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                <p className="text-center text-sm sm:text-md mt-2">
                  Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                </p>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Build%20expert%20for%20Meeting", "hii Degzzo")}>Let&rsquo;s talk</button>
                </div>
              </div>
        </div>
      </div>
    </main>
  );
}
