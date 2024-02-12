import { auth } from "@/auth";

const Page = async () => {
  const session = await auth();

  return (
    <pre className="overflow-auto">{JSON.stringify(session, null, 2)}</pre>
  );
};

export default Page;
