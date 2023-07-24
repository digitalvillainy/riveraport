export default function NavMenu() {
  return (
    <div className="flex flex-row justify-end mx-4">
      <ul className="flex flex-row justify-between w-3/12">
        <li className="flex flex-row mx-4">
          <div className="relative mr-8 mb-3 cursor-pointer">
            <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-1 "></span>
            <span className="w-5 h-5 bg-white absolute top-1"></span>
          </div>
          <span className="hover:text-cyan-300">About</span>
        </li>
        <li className="flex flex-row mx-4 !hover:text-cyan-300 cursor-pointer">
          <div className="relative mr-8 mb-3">
            <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-1"></span>
            <span className="w-5 h-5 bg-white absolute top-1"></span>
          </div>
          <span className="hover:text-cyan-300">Experience</span>
        </li>
        <li className="flex flex-row mx-4 !hover:text-cyan-300 cursor-pointer">
          <div className="relative mr-8 mb-3">
            <span className="w-5 h-5 bg-purple-700 hover:bg-cyan-300 z-40 absolute -left-1"></span>
            <span className="w-5 h-5 bg-white absolute top-1"></span>
          </div>
          <span className="hover:text-cyan-300">Contact</span>
        </li>
      </ul>
    </div>
  );
}
