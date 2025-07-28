"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  base64Data: string;
};

export default function PDFViewer({ base64Data }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[500px]">
      <Document
        file={`data:application/pdf;base64,${base64Data}`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages || 0 }, (_, i) => (
          <Page key={i + 1} pageNumber={i + 1} width={500} />
        ))}
      </Document>
    </div>
  );
}
