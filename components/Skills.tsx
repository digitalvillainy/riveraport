import BoxContainer from "./BoxContainer";
import Image from "next/image";
import Html5icon from '@/public/HtmlFive.svg';
import JSicon from '@/public/JSicon.svg';
import CssIcon from '@/public/CssIcon.svg';
import TsIcon from '@/public/TypeScriptIcon.svg';
import PhpIcon from '@/public/PhpIcon.svg';
import ReactIcon from '@/public/ReactIcon.svg';
import VueIcon from '@/public/VueIcon.svg';
import TailWindIcon from '@/public/TailWind.svg';
import AlpineJsIcon from '@/public/AlpineIcon.svg';
import LaravelIcon from '@/public/LaravelIcon.svg';
import LaravelLivewireIcon from '@/public/LaravelLivewire.svg';
import GitHubIcon from '@/public/GitHub.svg';
import ApacheIcon from '@/public/ApacheIcon.svg';
import GitIcon from '@/public/GitIcon.svg';
import DockerIcon from '@/public/DockerIcon.svg';
import MysqlIcon from '@/public/MysqlIcon.svg';
import StoryBookIcon from '@/public/StorybookIcon.svg';
import FigmaIcon from '@/public/FigmaIcon.svg';

export default function Skills() {
  return (

    <div className="flex flex-col justify-start items-start mt-6 lg:mt-0 lg:flex-row lg:relative w-full" id="technology">
      <h4 className="text-3xl text-cyan-400 -rotate-90 absolute bottom-20 -left-20 hidden lg:block">Technology</h4>
      <h4 className="text-3xl text-cyan-400 text-center w-full lg:hidden">Technology</h4>
      <BoxContainer classes="w-full h-min">
        <div className="flex flex-col">
          <p className="ml-2 font-extrabold w-full text-center lg:text-left text-cyan-400">Languages</p>
          <div className="flex flex-row flex-wrap justify-between place-items-center my-4">
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={Html5icon} alt="Html Icon" />
              <span className="text-red-800 font-extrabold">HTML 5</span>
            </div>
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={JSicon} alt="JavaScript Icon" />
              <span className="text-red-800 font-extrabold">JavaScript</span>
            </div>
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={CssIcon} alt="CSS3 Icon" />
              <span className="text-red-800 font-extrabold">CSS</span>
            </div>
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={TsIcon} alt="Typescript Icon" />
              <span className="text-red-800 font-extrabold">Typescript</span>
            </div>
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={PhpIcon} alt="PHP Icon" />
              <span className="text-red-800 font-extrabold">PHP</span>
            </div>
            <div className="flex flex-col text-center">
              <Image className="mx-3 w-14 h-14" src={MysqlIcon} alt="MySql Icon" />
              <span className="text-red-800 font-extrabold">MySql</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center my-8">
          <p className="ml-2 text-center lg:text-left font-extrabold text-cyan-400">Libraries & Frameworks</p>
          <div className="flex flex-row justify-between flex-wrap items-end my-4">
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={ReactIcon} alt="React Icon" />
              <span className="text-red-800 font-extrabold">React</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={VueIcon} alt="Vue Icon" />
              <span className="text-red-800 font-extrabold">Vue</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={LaravelIcon} alt="Laravel Icon" />
              <span className="text-red-800 font-extrabold">Laravel</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={LaravelLivewireIcon} alt="Livewire Icon" />
              <span className="text-red-800 font-extrabold">Livewire</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={TailWindIcon} alt="TailWind Icon" />
              <span className="text-red-800 font-extrabold">TailWind</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-14 h-14" src={AlpineJsIcon} alt="Alpine Js Icon" />
              <span className="text-red-800 font-extrabold">Alpine Js</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center my-8">
          <p className="ml-2 text-center lg:text-left font-extrabold text-cyan-400 ">Software & Tools</p>
          <div className="flex flex-row justify-between flex-wrap items-end my-4">
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={GitHubIcon} alt="GitHub Icon" />
              <span className="text-red-800 font-extrabold">GitHub</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={GitIcon} alt="Git Icon" />
              <span className="text-red-800 font-extrabold">Git</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={ApacheIcon} alt="Apache Icon" />
              <span className="text-red-800 font-extrabold">Apache</span>
            </div>

            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={DockerIcon} alt="Docker Icon" />
              <span className="text-red-800 font-extrabold">Docker</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={StoryBookIcon} alt="StoryBook Icon" />
              <span className="text-red-800 font-extrabold">Storybook</span>
            </div>
            <div className="flex flex-col text-center my-2">
              <Image className="mx-3 w-10 h-10" src={FigmaIcon} alt="Figma Icon" />
              <span className="text-red-800 font-extrabold">Figma</span>
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
