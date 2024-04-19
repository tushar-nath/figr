import { UserService } from "@/services/user";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 500,
    });
  }

  const { email, name, password } = await req.json();

  try {
    const userService = new UserService();
    await userService.init();
    const user = await userService.createUser(email, name, password);

    return Response.json(user);
  } catch (error) {
    console.error("Signup error:", error);
    return new Response("Method not allowed", {
      status: 500,
    });
  }
}
