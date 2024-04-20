"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator"
import { logout } from "@/lib/actions";

const handleLogout = async () => {
  try {
    console.info(
      "Invoking handleLogout from client. (src/app/Dashboard/page.tsx"
    );
    await logout();
  } catch (error) {
    console.log(error);
  }
};

export const Header = () => {
  return (
    <div>
      <div className="flex pb-6">
        <div>
          <h1 className="text-4xl font-medium">identity.</h1>
        </div>
        <div className="ml-auto gap-3">
          <Button variant="outline" className="mr-8">
            Save Project
          </Button>
          <Button className="mr-8">Generate</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="font-bold">
                ...
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};
