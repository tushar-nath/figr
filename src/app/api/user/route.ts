import { UserService } from "@/services/user";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email") as string;
    const userService = new UserService();
    await userService.init();
    const user = await userService.getUser(email);
    return Response.json(user);
  } catch (error) {
    return new Response("Intenal server error", {
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { email, newEmail, newName } = body;

    const userService = new UserService();
    await userService.init();

    const updatedUser = await userService.updateUser(email, newEmail, newName);
    console.log("updated user: ", updatedUser);

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating user: ", error);
    return new Response("Internal server error", {
      status: 500,
    });
  }
}
