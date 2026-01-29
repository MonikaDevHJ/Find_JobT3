import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  companyLogo: f({ image: { maxFileSize: "2MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("UPLOAD COMPLETE SERVER:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
