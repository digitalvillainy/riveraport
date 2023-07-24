import BoxContainer from "@/components/BoxContainer";
import ProfilePic from "@/public/ProfilePic.jpg";
import Image from "next/image";
import Html5icon from '@/public/HtmlFive.svg';
import JSicon from '@/public/JSicon.svg';
import CssIcon from '@/public/CssIcon.svg';
import TsIcon from '@/public/TypeScriptIcon.svg';
import PhpIcon from '@/public/PhpIcon.svg';
import NodeIcon from '@/public/NodeIcon.svg';
import ReactIcon from '@/public/ReactIcon.svg';
import VueIcon from '@/public/VueIcon.svg';
import TailWindIcon from '@/public/TailWind.svg';
import BootStrapIcon from '@/public/BootStrap.svg';
import AlpineJsIcon from '@/public/AlpineIcon.svg';
import SassIcon from '@/public/Sass.svg';
import JqueryIcon from '@/public/JQueryIcon.svg';
import ExpressIcon from '@/public/ExpressIcon.svg';

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row">
        <BoxContainer width="w-fit" height="h-fit">
          <Image src={ProfilePic} alt="Roberto Rivera" className="rounded-tl-xl rounded-br-xl h-40 w-auto" />
        </BoxContainer>
        <BoxContainer width="w-11/12" height="h-fit">
          <h1 className="text-5xl text-cyan-400 mb-8 font-extrabold">
            Hello Everyone!
          </h1>
          <span className="text-2xl font-bold text-cyan-400">
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
      </div>

      <div>
        <BoxContainer width="w-full" height="h-min">
          <div className="flex flex-row justify-center">
            <Image className="mx-3" src={Html5icon} alt="Html Icon" />
            <Image className="mx-3" src={JSicon} alt="JavaScript Icon" />
            <Image className="mx-3" src={CssIcon} alt="CSS3 Icon" />
            <Image className="mx-3" src={TsIcon} alt="Typescript Icon" />
            <Image className="mx-3" src={PhpIcon} alt="PHP Icon" />
            <Image className="mx-3" src={NodeIcon} alt="Node Icon" />
          </div>

          <div className="flex flex-row justify-center">
            <Image className="mx-3" src={ReactIcon} alt="React Icon" />
            <Image className="mx-3" src={VueIcon} alt="Vue Icon" />
            <Image className="mx-3" src={TailWindIcon} alt="TailWind Icon" />
            <Image className="mx-3" src={BootStrapIcon} alt="BootStrap Icon" />
            <Image className="mx-3" src={AlpineJsIcon} alt="Alpine Js Icon" />
            <Image className="mx-3" src={SassIcon} alt="Sass Icon" />
            <Image className="mx-3" src={JqueryIcon} alt="jQuery Icon" />
            <Image className="mx-3" src={ExpressIcon} alt="Express Icon" />
          </div>
        </BoxContainer>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-3xl text-cyan-400 w-full text-center">Experience</h2>
        <div className="flex flex-row">
          <BoxContainer width="w-6/12" height="h-min">
            <span className="font-extrabold">
              Productive Edge, Chicago Illinois (Remote) — Front-End Web Developer III
            </span>
            <p className="my-2 font-extrabold">April 2022 - Present</p>
            <p className="my-2">Planned the front-end architecture for development of websites and web applications for clients.</p>
            <p className="my-2">Coordinated with back-end developers, project managers, and clients to develop solutions and maintain transparency in project progress.</p>
            <p className="my-2">Developed websites and web applications based on project needs.</p>
            <p className="my-2">Answered questions from junior developers and collaborated on solutions. Reviewed, tested and debugged code from other developers.</p>
          </BoxContainer>
          <BoxContainer width="w-6/12" height="h-min">
            <span className="font-extrabold">
              Red Banner Media, LLC, Oneonta, NY — Full Stack Web Developer, CEO
            </span>
            <p className="my-2 font-extrabold">April 2020 - April 2022</p>
            <p className="my-2">Collaborating with other teams of developers to create a full roadmap for development.</p>
            <p className="my-2">Acted as a Scrum master for WriterBoards. Coordinating between a small team to maintain a large catalog of features and bugs presented by users.</p>
            <p className="my-2">Reviewed, tested and debugged code from other developers. Co-Designed API backend made with PHP and MySQL.</p>
            <p className="my-2">Removed superfluous aspects of the Front-End  codebase to match needs of project and Vue best practices.</p>
          </BoxContainer>
        </div>

        <BoxContainer width="w-fit" height="h-min">
          <span className="font-extrabold">
            Eagle Productivity Solutions, Rochester, NY — Full Stack Web Developer
          </span>
          <p className="my-2 font-extrabold">August  2018 - January 2020</p>
          <p className="my-2">Develop websites and web/mobile applications. Coordinate with a team of other developers and programmers, Project Managers, Graphic Designers, and Production Staff.</p>
          <p className="my-2">Work with writers and instructional designers to understand content and offer design, layout, and user-interaction/functionality suggestions as needed.</p>
          <p className="my-2">Consult with client and internal team on best use of client infrastructure. (Existing web servers, SharePoint, External platforms)</p>
        </BoxContainer>
      </div>
    </section>
  )
}
