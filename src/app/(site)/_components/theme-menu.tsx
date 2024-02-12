"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const ThemeMenu = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuThemeGroup = [
    {
      label: "Light",
      value: "light",
      icon: <Sun />,
      function: () => setTheme("light"),
    },
    {
      label: "Dark",
      value: "dark",
      icon: <Moon />,
      function: () => setTheme("dark"),
    },
    {
      label: "System",
      value: "system",
      icon: <Moon />,
      function: () => setTheme("system"),
    },
  ];

  if (!mounted) return null;

  return (
    <>
      {menuThemeGroup.map((item) => (
        <DropdownMenuItem
          key={item.label}
          className="cursor-pointer text-md sm:text-sm"
          onClick={item.function}
        >
          {item.label}
        </DropdownMenuItem>
      ))}
    </>
  );
};

export default ThemeMenu;
