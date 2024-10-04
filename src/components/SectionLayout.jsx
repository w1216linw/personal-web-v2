const SectionLayout = ({ children }) => {
  return (
    <div className="responsive">
      <div className="xl:col-start-3 xl:col-end-11 lg:col-start-2 lg:col-end-12 sm:col-start-1 sm:col-end-13 grid gap-y-20">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
