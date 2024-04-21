import { User } from "@/lib/types";
import axios from "axios";

export class API {
  static async getUser(email: string) {
    const user = await axios.get<User>(`/api/user?email=${email}`);
    console.log(user, "this is the userrrrr");
    return user.data;
  }
}
