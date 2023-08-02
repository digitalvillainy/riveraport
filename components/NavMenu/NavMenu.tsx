"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import GitHubIcon from '@/public/GitHub.svg'
import BitBucketIcon from '@/public/BitBucket.svg'
import RbmLogo from '@/public/RbmLogo.svg'
import email from '@/public/email.svg'

export default function NavMenu() {
  const [toggle, setToggle] = useState<boolean>(false);


  return (
    <nav>
      <div className="hidden lg:flex flex-row justify-end w-full">
        <ul className="flex flex-col lg:flex-row justify-between place-items-center w-fit lg:mr-10 2xl:mr-28 lg:mt-8">
          <li className="flex flex-row mx-8 place-items-center">
            <Link href="#about">
              <div className="relative mr-8 mb-1 cursor-pointer">
                <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8 "></span>
                <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span>
              </div>
              <span className="hover:text-cyan-300">About</span>
            </Link>
          </li>
          <li className="flex flex-row mx-8">
            <Link href="#technology">
              <div className="relative mr-8 mb-1 cursor-pointer">
                <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8"></span>
                <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span>
              </div>
              <span className="hover:text-cyan-300">Technology</span>
            </Link>
          </li>
          <li className="flex flex-row mx-8 !hover:text-cyan-300 cursor-pointer">
            <Link href="#experience">
              <div className="relative mr-8 mb-1">
                <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8"></span>
                <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span>
              </div>
              <span className="hover:text-cyan-300">Experience</span>
            </Link>
          </li>
          {/* <li className="flex flex-row ml-8 !hover:text-cyan-300 cursor-pointer"> */}
          {/*   <Link href="#contact"> */}
          {/*     <div className="relative mr-8 mb-1"> */}
          {/*       <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8"></span> */}
          {/*       <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span> */}
          {/*     </div> */}
          {/*     <span className="hover:text-cyan-300">Contact</span> */}
          {/*   </Link> */}
          {/* </li> */}
        </ul>
      </div>
      <div
        className="flex flex-row lg:hidden justify-end my-4 mx-3"
        onClick={() => setToggle(!toggle)}
      >
        {
          !toggle ?
            <svg
              className="w-6 h-6 stroke-cyan-400 fill-cyan-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            :
            <svg
              className="w-6 h-6 stroke-cyan-400 fill-cyan-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 
                11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
        }
      </div>
      {
        toggle &&
        <div className="relative">
          <ul className="flex flex-col justify-end w-full p-3 z-30 absolute bg-cyan-800 bg-opacity-90 shadow-black">
            <li className="flex flex-row w-full justify-end py-3">
              <Link href="#about">
                About
              </Link>
            </li>
            <li className="flex flex-row w-full justify-end py-3">
              <Link href="#technology">
                Technology
              </Link>
            </li>
            <li className="flex flex-row w-full justify-end py-3">
              <Link href="#experience">
                Experience
              </Link>
            </li>
            <li className="flex flex-row w-full justify-end place-items-center">

              <Link href={'mailto:rrivera@redbannermedia.com'} target='_blank'>
                <Image className='mb-3' src={email} alt='Mail' width={43} height={43} />
              </Link>
              <Link href={'https://www.bitbucket.com'} target='_blank'>
                <Image className="mx-3" src={BitBucketIcon} alt='BitBucket Icon' width={23} height={23} />
              </Link>
              <Link href={'https://www.github.com/digitalvillainy'} target='_blank'>
                <Image className="mx-3" src={GitHubIcon} alt='GitHub Icon' width={23} height={23} />
              </Link>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
}
