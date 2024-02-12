// import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  disable?: boolean;
};

const Brand: React.FC<BrandProps> = ({ disable = false }) => (
  <div className="flex items-center px-0 sm:px-4 py-2 sm:space-x-2 w-full">
    <Link
      href={"/"}
      className={`
      flex
      space-x-2
      items-center
      ${!disable && "cursor-pointer"}
    `}
    >
      {/* <Image
        alt="Logo"
        height="40"
        width="40"
        src="/logo.svg"
        className="min-w-[40px]"
      /> */}
      <p className="hidden sm:block text-3xl font-bold">Logo</p>
    </Link>
  </div>
);

export default Brand;
