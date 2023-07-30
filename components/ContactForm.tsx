'use client';

import BoxContainer from "./BoxContainer";

export default function ContactForm() {
  const sendEmail = () => {
    return
  };

  return (
    <div className="flex flex-row justify-center relative" id="contact">
      <h4 className="text-3xl text-cyan-400 text-center absolute -rotate-90 left-44 top-20">Contact Me</h4>
      <BoxContainer classes="w-6/12 mx-auto lg:ml-0 h-fit flex flex-row justify-center">
        <form onSubmit={sendEmail} className="w-10/12 mx-auto">
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <input className="bg-transparent text-white h-full w-full p-4" type="email" placeholder="Your email here..." />
          </BoxContainer>
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <input className="bg-transparent text-white h-full w-full p-4" type="text" placeholder="Subject here..." />
          </BoxContainer>
          <BoxContainer classes="w-full h-fit lg:ml-0 p-0">
            <textarea rows={5} cols={33} placeholder="Enter message here..." className="bg-transparent text-white h-full w-full p-4"></textarea>
          </BoxContainer>
          <BoxContainer classes="text-center lg:ml-0 h-fit w-full hover:border-[#C00CFF] hover:bg-[#2F0040] counter-pointer">
            <button className="font-extrabold text-white text-3xl w-full" type="submit">SEND</button>
          </BoxContainer>
        </form>
      </BoxContainer>
    </div>
  );

}
