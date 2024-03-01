"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../public/githubIcon.svg";
import LinkedinIcon from "../public/linkedin.svg";
import WhatsappIcon from "../public/whatsapp.svg";
import { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const [form, setForm]= useState({
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const handleChange = (e:{target:{ name: any; value: any}})=>{
  //   const {name, value} = e.target;
  //   setForm({...form, [name]: value})
  // } 

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // const data = {
  //   //   email: e.currentTarget.email.value,
  //   //   subject: e.currentTarget.subject.value,
  //   //   message: e.currentTarget.message.value,
  //   // };
  //   // const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   };

  //   const response = await fetch(endpoint);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:{target:{ name: string; value: string}}) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = "/api/send";

    try {
      const response = await axios.post(endpoint, form);
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <section id="contact" className="grid md:grid-cols-2 my-8 md:my-12 py-20 md:py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
        <h5 className="text-xl font-bold text-white my-2">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm excited to explore new opportunities and connect with like-minded individuals. Feel free to reach out anytime – whether it's a question, a project idea, or just to say hello. I'm always eager to chat and will do my utmost to respond promptly!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/justAy16">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/adetayo-ayomide-7691b124b">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://wa.me/07067129268" target='_blank'>
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
        </div>
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
              value={form.email}
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
              value={form.subject}
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
              value={form.message}
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                required
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
          )}
        </div>
        {/* </div> */}
    </section>
  )
}

export default ContactSection