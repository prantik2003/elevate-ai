import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  const email = user.emailAddresses?.[0]?.emailAddress;
  if (!email) return null;

  try {
    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

    const upsertedUser = await db.user.upsert({
      where: { email },
      update: {
        name,
        imageUrl: user.imageUrl,
        clerkUserId: user.id, // update clerk ID in case it changed
      },
      create: {
        email,
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
      },
    });

    return upsertedUser;
  } catch (error) {
    console.error("checkUser error:", error);
    return null;
  }
};




// import { currentUser } from "@clerk/nextjs/server";
// import { db } from "./prisma";

// export const checkUser = async () => {
//   const user = await currentUser();

//   if (!user) {
//     return null;
//   }

//   try {
//     const loggedInUser = await db.user.findUnique({
//       where: {
//         clerkUserId: user.id,
//       },
//     });

//     if (loggedInUser) {
//       return loggedInUser;
//     }

//     const name = `${user.firstName} ${user.lastName}`;

//     const newUser = await db.user.create({
//       data: {
//         clerkUserId: user.id,
//         name,
//         imageUrl: user.imageUrl,
//         email: user.emailAddresses[0].emailAddress,
//       },
//     });

//     return newUser;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
