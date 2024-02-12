"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const ExternalProviders = () => {
  const onClick = (provider: "github" | "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <CardContent className="space-y-2 sm:space-x-0 justify-center">
      <Button
        variant="outline"
        className="w-full space-x-2"
        onClick={() => onClick("github")}
      >
        <Image src="/brands/github.svg" width={20} height={20} alt="Github" />
        <span className="hidden sm:block text-sm">Continue with Github</span>
        <span className="sm:hidden text-sm">Github</span>
      </Button>

      <Button
        variant="outline"
        className="w-full space-x-2"
        onClick={() => onClick("google")}
      >
        <Image src="/brands/google.svg" width={20} height={20} alt="Google" />
        <span className="hidden sm:block text-sm">Continue with Google</span>
        <span className="sm:hidden text-sm">Google</span>
      </Button>
    </CardContent>
  );
};

export default ExternalProviders;
