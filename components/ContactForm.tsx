'use client';
import { useState } from "react";
import BoxContainer from "./BoxContainer";

export default function ContactForm() {
  const [messageSent, setmessageSent] = useState<boolean | null>(false)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hit');

  };


  return (
    <div className="flex flex-row justify-center relative" id="contact">
      {
        messageSent &&
        <span className="text-green-500 w-full text-center">MESSAGE SENT</span>
      }
      <h4 className="text-3xl text-cyan-400 text-center absolute -rotate-90 left-40 top-20">Contact Me</h4>
      <BoxContainer classes="w-6/12 mx-auto lg:ml-0 h-fit flex flex-row justify-center">
        <form onSubmit={sendEmail} className="w-10/12 mx-auto">
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <input className="bg-transparent text-white h-full w-full p-4 focus:outline-0 hover:border-[#C00CFF] hover:bg-[#2F0040] hover:rounded-xl"
              type="email" placeholder="Your email here..." />
          </BoxContainer>
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <input className="bg-transparent text-white h-full w-full p-4 focus:outline-0 hover:border-[#C00CFF] hover:bg-[#2F0040] hover:rounded-xl"
              type="text" placeholder="Subject here..." />
          </BoxContainer>
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <textarea rows={5} cols={33} placeholder="Enter message here..."
              className="bg-transparent text-white h-full w-full p-4 focus:outline-0 hover:border-[#C00CFF] hover:bg-[#2F0040] hover:rounded-xl"
            ></textarea>
          </BoxContainer>
          <button className="border border-[#AD00EA] rounded-tl-2xl rounded-br-2xl lg:my-5 lg:ml-5 lg:mr-2 p-5 ${classes} bg-[#AD00EA] bg-opacity-10 
            text-center lg:ml-0 h-fit w-full hover:border-[#C00CFF] hover:bg-[#2F0040] cursor-pointer font-extrabold text-white text-3xl"
            type="submit">SEND</button>
        </form>
      </BoxContainer>
    </div>
  );

}
