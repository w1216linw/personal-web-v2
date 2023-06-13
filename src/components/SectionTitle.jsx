const SectionTitle = ({ title }) => {
  return (
    <div className="grid place-items-center gap-5">
      <h1 className="text-5xl font-bold">{title}</h1>
      <hr className="w-32 border-[--clr-accent] border-2 rounded-lg " />
    </div>
  );
};

export default SectionTitle;
