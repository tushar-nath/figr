import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import ITUser from "@/models/user";

export class UserService {
  private isInit: boolean = false;
  private notInitError = "Service not initalized";
  private userExistsError = "User with email already exists";
  private user = ITUser;

  async init() {
    await dbConnect();
    this.isInit = true;
  }

  async getUser(email: string) {
    if (!this.isInit) {
      throw Error(this.notInitError);
    }
    const user = await this.user.findOne({ email });
    return user;
  }

  async createUser(email: string, name: string, password: string) {
    const user = await this.user.findOne({ email });
    if (user) {
      throw Error(this.userExistsError);
    }
    const createdUser = await this.user.create({
      email,
      name,
      password: bcrypt.hashSync(password, 10),
    });

    return createdUser;
  }

  async updateUser(
    currentEmail: string,
    newEmail: string | undefined,
    newName: string | undefined
  ) {
    if (!this.isInit) {
      throw Error(this.notInitError);
    }

    const user = await this.user.findOne({ email: currentEmail });
    if (!user) {
      throw Error("User not found");
    }

    if (newEmail && newEmail !== currentEmail) {
      const existingEmailUser = await this.user.findOne({ email: newEmail });
      if (existingEmailUser) {
        throw Error(this.userExistsError);
      }
      user.email = newEmail;
    }

    if (newName) {
      user.name = newName;
    }

    await user.save();
    return user;
  }
}
