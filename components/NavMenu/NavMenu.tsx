"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import GitHubIcon from '@/public/GitHub.svg'
import BitBucketIcon from '@/public/BitBucket.svg'
import email from '@/public/email.svg'

export default function NavMenu() {
  const [toggle, setToggle] = useState<boolean>(false);


  return (
    <nav className="flex flex-row justify-end">
      <div className="hidden lg:flex flex-row justify-end w-full">
        <ul className="flex flex-col lg:flex-row justify-between place-items-center w-fit lg:mt-8">
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
          <li className="flex flex-row ml-8 !hover:text-cyan-300 cursor-pointer">
            <Link href="#experience">
              <div className="relative mr-8 mb-1">
                <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8"></span>
                <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span>
              </div>
              <span className="hover:text-cyan-300">Experience</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative w-full lg:hidden">
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
          <div className="flex flex-col w-full z-30 absolute bg-cyan-800 bg-opacity-80 px-4 text-end">
            <div className="py-2">
              <Link href="#about">
                About
              </Link>
            </div>
            <div className="py-2">
              <Link href="#technology">
                Technology
              </Link>
            </div>
            <div className="py-2">
              <Link href="#experience">
                Experience
              </Link>
            </div>
            <div className="flex flex-row justify-between py-5">
              <div>
                <Link href={'mailto:roberto@robertorivera.dev'} target='_blank'>
                  <Image src={email} alt='Mail' width={23} height={33} />
                </Link>
              </div>
              <div>
                <Link href={'https://www.bitbucket.com'} target='_blank'>
                  <Image src={BitBucketIcon} alt='BitBucket Icon' width={23} height={23} />
                </Link>
              </div>
              <div>
                <Link href={'https://www.github.com/digitalvillainy'} target='_blank'>
                  <Image src={GitHubIcon} alt='GitHub Icon' width={23} height={23} />
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    </nav>
  );
}
