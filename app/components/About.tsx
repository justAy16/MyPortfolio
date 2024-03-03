"use client"
import React, {useState, useTransition} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { TAB_DATA } from '../data/Data';

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange=(id:string)=>{
        startTransition(()=>{
            setTab(id)
        })
    }
    

  return (
    <section id='about'><div className="md:grid md:grid-cols-2 gap-8 items-center py-20 px-4 xl:gap-16 sm:py-24 md:py-36 xl:px-16">
        <Image 
        src="/aboutIMG.jpg"
        alt='about Me'
        height={500}
        width={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
<h2 className="text-4xl font-bold text-white mb-4"> About Me</h2> 
<p className="text-base lg:text-lg text-[#ADB7BE] text-cof"> I&apos;m a full-stack web developer with a knack for building immersive and dynamic web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, Typescript,
 Git and always looking to advance my knowledge.
I&apos;m deeply passionate about web development and thrive on the ever-evolving nature of the field. With a natural curiosity and an insatiable hunger for knowledge, I&apos;m constantly seeking opportunities to broaden my knowledge and skill set. Collaborating with fellow developers fuels my creativity, and I approach each project with a blend of enthusiasm and innovation. Let&apos;s build something amazing together!
</p>
<div className='flex flex-row justify-start mt-8'>
<TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >{" "}Skills{" "}</TabButton>
    <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
{/* <span className='mr-3 font-semibold hover:text-[#ADB7BE] border-b border-purple-500'>Skills</span> */}

    </div> 
    <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
    </div>
        </div></section>
  )
}

export default About
