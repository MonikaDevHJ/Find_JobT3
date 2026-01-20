import { createUploadthing, type FileRouter } from "uploadthing/next";

// Create an UplodeThing machine that handle uploads
const f = createUploadthing();

export const ourFileRouter = {
  comapnyLogo: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
    async ({ file }) => {
      return {
        url: file.url,
      };
    },
  ),
} satisfies FileRouter;

export type ourFileRouter = typeof ourFileRouter;
