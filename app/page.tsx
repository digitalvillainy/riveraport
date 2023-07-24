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
import NextJsIcon from '@/public/NextJs.svg';
import GitHubIcon from '@/public/GitHub.svg';
import BitBucketIcon from '@/public/BitBucket.svg';
import ApacheIcon from '@/public/ApacheIcon.svg';
import GitIcon from '@/public/GitIcon.svg';
import DockerIcon from '@/public/DockerIcon.svg';

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row">
        <BoxContainer width="w-fit" height="h-fit">
          <Image src={ProfilePic} alt="Roberto Rivera" className="rounded-tl-xl rounded-br-xl h-auto w-52" />
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

      <div className="flex flex-row justify-start items-start relative">
        <h4 className="text-3xl text-cyan-400 -rotate-90 absolute bottom-20 -left-20">Technology</h4>
        <BoxContainer width="w-full" height="h-min">
          <div className="flex flex-col">
            <span className="ml-2 font-extrabold text-cyan-400">Languages</span>
            <div className="flex flex-row flex-wrap justify-start place-items-center my-4">
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={Html5icon} alt="Html Icon" />
                <span className="text-red-800 font-extrabold">HTML 5</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={JSicon} alt="JavaScript Icon" />
                <span className="text-red-800 font-extrabold">JavaScript</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={CssIcon} alt="CSS3 Icon" />
                <span className="text-red-800 font-extrabold">CSS</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={TsIcon} alt="Typescript Icon" />
                <span className="text-red-800 font-extrabold">Typescript</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={PhpIcon} alt="PHP Icon" />
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={NodeIcon} alt="Node Icon" />
                <span className="text-red-800 font-extrabold">Node JS</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-8">
            <span className="ml-2 font-extrabold text-cyan-400">Libraries & Frameworks</span>
            <div className="flex flex-row flex-wrap justify-center items-end my-4">
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={ReactIcon} alt="React Icon" />
                <span className="text-red-800 font-extrabold">React</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={VueIcon} alt="Vue Icon" />
                <span className="text-red-800 font-extrabold">Vue</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={TailWindIcon} alt="TailWind Icon" />
                <span className="text-red-800 font-extrabold">TailWind</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={BootStrapIcon} alt="BootStrap Icon" />
                <span className="text-red-800 font-extrabold">BootStrap</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={AlpineJsIcon} alt="Alpine Js Icon" />
                <span className="text-red-800 font-extrabold">Alpine Js</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={SassIcon} alt="Sass Icon" />
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={JqueryIcon} alt="jQuery Icon" />
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={ExpressIcon} alt="Express Icon" />
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3" src={NextJsIcon} alt="Next Js Icon" />
                <span className="text-red-800 font-extrabold">Next Js</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-8">
            <span className="ml-2 font-extrabold text-cyan-400">Software & Tools</span>
            <div className="flex flex-row justify-start items-end my-4">
              <div className="flex flex-col text-center">
                <Image className="mx-3 w-16 h-16" src={GitHubIcon} alt="GitHub Icon" />
                <span className="text-red-800 font-extrabold">GitHub</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3 w-16 h-16" src={GitIcon} alt="Git Icon" />
                <span className="text-red-800 font-extrabold">Git</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3 w-16 h-16" src={BitBucketIcon} alt="BitBucket Icon" />
                <span className="text-red-800 font-extrabold">BitBucket</span>
              </div>
              <div className="flex flex-col text-center">
                <Image className="mx-3 w-16 h-16" src={ApacheIcon} alt="Apache Icon" />
                <span className="text-red-800 font-extrabold">Apache</span>
              </div>

              <div className="flex flex-col text-center">
                <Image className="mx-3 w-16 h-16" src={DockerIcon} alt="Docker Icon" />
                <span className="text-red-800 font-extrabold">Docker</span>
              </div>
            </div>
          </div>
        </BoxContainer>
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-3xl text-cyan-400 w-full text-center">Experience</h2>
        <div className="flex flex-row">
          <BoxContainer width="w-6/12" height="h-min">
            <span className="font-extrabold text-cyan-400">
              Productive Edge, Chicago Illinois (Remote) — Front-End Web Developer III
            </span>
            <p className="my-2 font-extrabold">April 2022 - Present</p>
            <p className="my-2">Planned the front-end architecture for development of websites and web applications for clients.</p>
            <p className="my-2">
              Coordinated with back-end developers, project managers, and clients to
              develop solutions and maintain transparency in project progress.
            </p>
            <p className="my-2">Developed websites and web applications based on project needs.</p>
            <p className="my-2">
              Answered questions from junior developers and collaborated on solutions. Reviewed, tested and debugged code from other developers.
            </p>
          </BoxContainer>
          <BoxContainer width="w-6/12" height="h-min">
            <span className="font-extrabold text-cyan-400">
              Red Banner Media, LLC, Oneonta, NY — Full Stack Web Developer, CEO
            </span>
            <p className="my-2 font-extrabold">April 2020 - April 2022</p>
            <p className="my-2">Collaborating with other teams of developers to create a full roadmap for development.</p>
            <p className="my-2">
              Acted as a Scrum master for WriterBoards. Coordinating between a small team to maintain a large catalog of features and
              bugs presented by users.
            </p>
            <p className="my-2">Reviewed, tested and debugged code from other developers. Co-Designed API backend made with PHP and MySQL.</p>
            <p className="my-2">Removed superfluous aspects of the Front-End  codebase to match needs of project and Vue best practices.</p>
          </BoxContainer>
        </div>

        <BoxContainer width="w-fit" height="h-min">
          <span className="font-extrabold text-cyan-400">
            Eagle Productivity Solutions, Rochester, NY — Full Stack Web Developer
          </span>
          <p className="my-2 font-extrabold">August  2018 - January 2020</p>
          <p className="my-2">
            Develop websites and web/mobile applications. Coordinate with a team of other developers and programmers,
            Project Managers, Graphic Designers, and Production Staff.
          </p>
          <p className="my-2">
            Work with writers and instructional designers to understand content and offer design, layout, and
            user-interaction/functionality suggestions as needed.
          </p>
          <p className="my-2">
            Consult with client and internal team on best use of client infrastructure. (Existing web servers, SharePoint, External platforms)
          </p>
        </BoxContainer>
      </div>
    </section>
  )
}
