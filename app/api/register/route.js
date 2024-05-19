import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connect from "../../../utils/mongodb";
import User from "../../../models/User";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("This email is already registered", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (err) {
    return new NextResponse("Registration failed, please try again", { status: 500 });
  }
};
