import ExternalProviders from "@/components/auth-providers";

import { Card, CardHeader } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h1 className="text-xl font-semibold tracking-tight">
            Login with your account
          </h1>
        </CardHeader>
        <ExternalProviders />
      </Card>
    </div>
  );
};

export default Page;
