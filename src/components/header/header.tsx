"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { logout } from "@/lib/actions";
import { useCommonContext } from "@/lib/context/commonContext";

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
  const { session } = useCommonContext();

  return (
    <div>
      <div className="flex pb-6">
        <div>
          <h1 className="text-4xl font-medium">
            identity<span className="text-blue-500">.</span>
          </h1>
        </div>

        <div className="ml-auto gap-3 flex">
          <Button variant="outline" className="mr-8">
            Save Project
          </Button>
          <Button className="mr-8">Generate</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="cursor-pointer"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue={session.name}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="username"
                    defaultValue={session.email}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Separator className="my-4" />
    </div>
  );
};
