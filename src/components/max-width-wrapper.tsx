import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex flex-col align-middle border-x border-separate min-h-screen max-w-[1920px] w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
