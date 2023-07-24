interface Contents {
  children: React.ReactNode;
  width: string;
  height: string;
}


export default function BoxContainer({ children, width, height }: Contents) {
  return (
    <section className={`border border-[#AD00EA] rounded-tl-2xl rounded-br-2xl my-5 ml-5 mr-2 p-5 ${width} ${height} bg-[#AD00EA] bg-opacity-10`} >
      {children}
    </section>
  );
}
