import BoxContainer from "@/components/BoxContainer";
import ProfilePic from "@/public/ProfilePic.jpg";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <section className="flex flex-col justify-items-center">
      <div className="flex flex-col lg:flex-row relative w-full" id="about">
        <BoxContainer classes="w-fit my-4 h-fit">
          <Image src={ProfilePic} alt="Roberto Rivera" className="rounded-tl-xl rounded-br-xl h-auto w-52" />
        </BoxContainer>
        <h4 className="lg:hidden text-3xl text-cyan-400 text-center">About</h4>
        <BoxContainer classes="w-full mt-6 mt-0 lg:w-11/12 lg:mx-auto h-fit">
          <h1 className="text-2xl text-cyan-400 mb-8 font-extrabold">
            Hello Everyone!
          </h1>
          <span className="text-lg font-bold text-cyan-400">
            Looking for someone that can make something for the web? I love making things for the web!
          </span>
          <p className="mt-2 mb-4">
            I have been a web developer since 2018, and during that time I have had the privilege to work for a variety of clients.
            From web apps that help streamline a process to web sites that bring in customers, I not only build the things that clients want,
            I build the things that their business needs.
          </p>
          <p className="my-2">
            As a self-taught developer, I make it my business to stay on top of current trends in technology and have learned the value in being
            flexible. I am always look for the right tool for the right job. That may mean I work on a LAMP stack one week or using a light-weight
            framework like Alpinejs on simple static pages. Regardless, I’m always excited to find a new challenge.
          </p>
        </BoxContainer>
        <h4 className="hidden lg:block text-3xl text-cyan-400 rotate-90 absolute bottom-12 -right-14">About</h4>
      </div>

      <Skills />
      <Experience />
      <ContactForm />
    </section>
  );
}
