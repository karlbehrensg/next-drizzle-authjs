import Navbar from "./_components/navbar";

const Layout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full p-4 md:p-8">{children}</main>
    </>
  );
};

export default Layout;
