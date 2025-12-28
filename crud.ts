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

createPost();
