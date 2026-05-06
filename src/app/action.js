// // app/actions.js
// // "use server";

// // import { redirect } from "next/navigation";

// // export async function createUser(formData) {
// //   const name = formData.get("name");

// //   console.log("Saving user:", name);

// //   // Example: save to DB here

// //     redirect("/");
// // }


// "use server";
// import { z } from "zod";

// const schema = z.object({
//   name: z.string().min(3),
//   email: z.string().email(),
// });


// export async function createUser(formData) {
//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//   };

//   const result = schema.safeParse(data);

//   if (!result.success) {
//     return { error: "Invalid input" };
//   }

//   // save to DB
// }