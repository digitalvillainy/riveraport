import BoxContainer from "./BoxContainer";

export default function() {
  return (
    <div className="flex flex-col w-full mt-8" id="experience">
      <div className="flex flex-col lg:flex-row w-full lg:relative">
        <h4 className="text-3xl text-cyan-400 text-center lg:hidden">Experience</h4>
        <BoxContainer classes="w-full mt-4 lg:w-6/12 grow">
          <span className="font-extrabold text-cyan-400">
            Productive Edge, Chicago Illinois (Remote) — Front-End Web Developer III
          </span>
          <p className="my-2 font-extrabold">April 2022 - February 2024</p>
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
        <BoxContainer classes="w-full lg:w-6/12 my-4 h-min">
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

        <h4 className="text-3xl text-cyan-400 rotate-90 absolute bottom-24 -right-24 hidden lg:block">Experience</h4>
      </div>

      <div className="flex flex-row w-full">
        <BoxContainer classes="w-full pr-8 h-min">
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
            user-interaction/ functionality suggestions as needed.
          </p>
          <p className="my-2">
            Consult with client and internal team on best use of client infrastructure. (Existing web servers, SharePoint, External platforms)
          </p>
        </BoxContainer>
      </div>
    </div>
  );
}
