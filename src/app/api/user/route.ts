import { UserService } from "@/services/user";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email") as string;
    const userService = new UserService();
    await userService.init();
    const user = await userService.getUser(email);
    console.log("user in server: ", user);
    return Response.json(user);
  } catch (error) {
    return new Response("Intenal server error", {
      status: 500,
    });
  }
}
