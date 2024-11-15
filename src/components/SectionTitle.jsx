const SectionTitle = ({ title }) => {
  return (
    <div className="grid place-items-center gap-10">
      <div className="w-32 border-[--clr-accent] border-2 rounded-lg relative z-10">
        <div className="absolute left-0 w-1/4 aspect-square bg-[--clr-accent] rotate-45 -translate-x-1/2 translate-y-2 -z-10 blur-md opacity-50"></div>
        <div className="absolute -right-0 w-1/4 aspect-square bg-[--clr-accent] rotate-45 translate-x-1/2 translate-y-2  -z-10 blur-md opacity-50"></div>
        <div className="absolute w-full bg-[--clr-accent] aspect-video translate-y-1 rounded-b-[2.5rem] blur-md opacity-50"></div>
        <div className="absolute w-full -top-8 -z-15 bg-[--clr-accent] aspect-square rotate-45 rounded-br-full blur-md opacity-50"></div>
      </div>
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
