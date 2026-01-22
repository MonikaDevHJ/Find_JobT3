import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  companyLogo: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
    async ({ file }) => {
      return {
        url: file.url,
      };
    }
  ),
} satisfies FileRouter;

// ✅ EXPORT TYPE (PascalCase)
export type OurFileRouter = typeof ourFileRouter;
