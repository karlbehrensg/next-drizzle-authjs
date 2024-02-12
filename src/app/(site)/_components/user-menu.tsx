import Link from "next/link";
import { auth, signOut } from "@/auth";
import { Moon, Sun } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeMenu from "./theme-menu";

import { type Session } from "next-auth";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const menuMainGroup = [{ label: "Profile", href: "/profile" }];

const logoutMenu = { label: "Logout", href: "/logout" };

const UserButton = ({ session }: { session: Session }) => {
  return (
    <div className="relative">
      <div
        className="
              flex 
              flex-row 
              items-center
              justify-start
              gap-2
              rounded-full
              max-md:border-0
              md:px-3
              md:py-2
              md:h-14
              md:max-w-52
              hover:bg-accent hover:text-accent-foreground
              cursor-pointer
            "
      >
        <Avatar>
          <AvatarFallback className="bg-primary" />
          <AvatarImage src={session.user?.image || "/images/placeholder.jpg"} />
        </Avatar>
        <div
          className="
                hidden
                text-sm
                font-semibold
                sm:block
                truncate
              "
        >
          {session.user?.name || "Anónimo"}
        </div>
      </div>
    </div>
  );
};

const LoggedUserMenuDesktop = ({ session }: { session: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserButton session={session} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session.user?.name || "Anónimo"}</DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs leading-none text-muted-foreground -mt-2">
          {session.user?.email || "Anónimo"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuMainGroup.map((item) => (
            <Link href={item.href} key={item.label}>
              <DropdownMenuItem key={item.label} className="cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <ThemeMenu />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit" className="text-left w-full">
              {logoutMenu.label}
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LoggedUserMenuMobile = ({ session }: { session: Session }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <UserButton session={session} />
      </SheetTrigger>
      <SheetContent side="bottom" className="h-5/6">
        <SheetHeader className="-space-y-1 py-2 border-b border-separate">
          <SheetTitle className="text-left">{session.user?.name}</SheetTitle>
          <SheetDescription className="text-left">
            {session.user?.email}
          </SheetDescription>
        </SheetHeader>

        {menuMainGroup.map((item) => (
          <SheetClose
            asChild
            className="w-full border-b border-separate py-3"
            key={item.label}
          >
            <Link href={item.href} key={item.label} className="w-full">
              <Label className="text-lg w-full">{item.label}</Label>
            </Link>
          </SheetClose>
        ))}

        <div className="flex flex-row justify-between items-center w-full border-b border-separate py-2">
          <Label className="text-lg">Theme</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ThemeMenu />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <SheetClose asChild className="border-b border-separate py-3">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="text-left w-full text-lg font-medium"
            >
              {logoutMenu.label}
            </button>
          </form>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

const LoggedUserMenu = ({ session }: { session: Session }) => {
  return (
    <>
      <div className="hidden sm:flex justify-center items-center py-2 md:px-8">
        <LoggedUserMenuDesktop session={session} />
      </div>

      <div className="sm:hidden justify-center items-center py-2 md:px-8">
        <LoggedUserMenuMobile session={session} />
      </div>
    </>
  );
};

const UnloggedUserMenu = () => {
  return (
    <Link
      href="/login"
      className="flex justify-center items-center py-2 md:px-8"
    >
      <div className="relative">
        <div
          className="
            flex 
            flex-row 
            items-center
            justify-start
            gap-2
            rounded-full
            max-md:border-0
            md:px-3
            md:py-2
            md:h-14
            md:w-40
            hover:bg-accent hover:text-accent-foreground
            cursor-pointer
          "
        >
          <Avatar>
            <AvatarFallback className="bg-primary" />
            <AvatarImage src="/images/placeholder.jpg" />
          </Avatar>
          <div
            className="
              hidden
              text-sm
              font-semibold
              md:block
              truncate
            "
          >
            Iniciar sesión
          </div>
        </div>
      </div>
    </Link>
  );
};

const UserMenu = async () => {
  const session = await auth();

  if (!session) {
    return <UnloggedUserMenu />;
  }

  return <LoggedUserMenu session={session} />;
};

export default UserMenu;
