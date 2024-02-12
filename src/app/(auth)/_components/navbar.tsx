import Brand from "@/components/brand";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row border-b border-separate py-2 px-4 items-center shadow-sm justify-between gap-2">
      <Brand />
    </nav>
  );
};

export default Navbar;
