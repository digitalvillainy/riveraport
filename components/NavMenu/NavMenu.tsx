import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="flex flex-row justify-end w-full">
      <ul className="flex flex-row justify-between place-items-center w-fit">
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
        <li className="flex flex-row ml-8 !hover:text-cyan-300 cursor-pointer">
          <Link href="#contact">
            <div className="relative mr-8 mb-1">
              <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-8"></span>
              <span className="w-5 h-5 bg-white absolute top-1 -left-7"></span>
            </div>
            <span className="hover:text-cyan-300">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
