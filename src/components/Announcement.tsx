const Announcement = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text bg-textPrimary color-bgPrimary fixed top-0 left-0 w-full py-1 text-center text-sm uppercase">
      {children}
    </div>
  );
};

export default Announcement;
