"use client";

import { useState } from "react";

type Props = {
  accept?: string;
  onFileSelect: (base64: string, file: File) => void;
};

export default function FileUpload({
  accept = "application/pdf",
  onFileSelect,
}: Props) {
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== accept) {
      setError("Invalid file type. Please upload a PDF.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      onFileSelect(base64, file); // Send to parent
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-xl border-2 border-dashed border-gray-400 bg-gray-50 p-6 text-center transition hover:border-fuchsia-500">
        <label className="cursor-pointer">
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-sm text-gray-600">
            Click here to choose file
          </span>
        </label>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
