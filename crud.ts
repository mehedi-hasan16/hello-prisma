import { inflate } from "node:zlib";
import { prisma } from "./lib/prisma";

async function createUser() {
  const createUser = await prisma.user.create({
    data: {
      name: "komol",
      email: "komol@gmail.com",
    },
  });
  console.log("created user", createUser);
}

const createPost = async () => {
  const createPost = await prisma.post.create({
    data: {
      title: "this is mehedi title",
      content: "this is mehedi post content",
      userId: 2,
    },
  });

  console.log("post created successfully", createPost);
};

const createProfile = async () => {
  const createProfile = await prisma.profile.create({
    data: {
      userId: 2,
      bio: "next level web 2",
    },
  });

  console.log("profile created successfully", createProfile);
};

// createUser();
// createPost();
// createProfile();

// retrive user
const user = async () => {
  const user = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  //   console.log(user);
  console.dir(user, { depth: inflate });
};

user();
