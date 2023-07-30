interface Contents {
  children: React.ReactNode;
  classes: string;
}


export default function BoxContainer({ children, classes }: Contents) {
  return (
    <section className={`border border-[#AD00EA] rounded-tl-2xl rounded-br-2xl lg:my-5 lg:ml-5 lg:mr-2 p-5 ${classes} bg-[#AD00EA] bg-opacity-10`} >
      {children}
    </section>
  );
}
