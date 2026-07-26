import { motion } from "framer-motion";
import { Award, Loader2 } from "lucide-react";
import { certifications } from "../data/portfolio";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import PdfModal from "@/components/PdfModal";
import { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function CertCardPreview({ pdfPath }: { pdfPath: string }) {
  const [loadError, setLoadError] = useState(false);

  if (loadError) {
    return (
      <div className="flex h-full items-center justify-center">
        <Award size={32} className="text-electric-blue/40" />
      </div>
    );
  }

  return (
    <Document
      file={pdfPath}
      onLoadSuccess={() => {}}
      onLoadError={() => setLoadError(true)}
      loading={
        <div className="flex h-full items-center justify-center">
          <Loader2 size={20} className="text-electric-blue animate-spin" />
        </div>
      }
      className="flex h-full w-full items-center justify-center"
    >
      <Page
        pageNumber={1}
        width={260}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        className="!h-full !w-auto"
        loading={
          <div className="flex h-full items-center justify-center">
            <Loader2 size={20} className="text-electric-blue animate-spin" />
          </div>
        }
      />
    </Document>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{
    pdfPath: string;
    title: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate offset positions for each card
  const cardPositions = [
    { top: "top-8", left: "left-[5%]", rotate: "-rotate-[6deg]" },
    { top: "top-24", left: "left-[20%]", rotate: "-rotate-[3deg]" },
    { top: "top-16", left: "left-[38%]", rotate: "rotate-[4deg]" },
    { top: "top-32", left: "left-[52%]", rotate: "rotate-[7deg]" },
    { top: "top-12", left: "left-[65%]", rotate: "-rotate-[2deg]" },
    { top: "top-28", left: "left-[78%]", rotate: "rotate-[5deg]" },
    { top: "top-40", left: "left-[10%]", rotate: "rotate-[10deg]" },
  ];

  return (
    <section id="certifications" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-gray-muted mt-3 max-w-2xl text-base"
        >
          Drag and explore each certificate card. Click to view the full PDF.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="relative mt-16"
        >
          <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center md:min-h-[700px]">
            <div
              ref={containerRef}
              className="absolute inset-0"
              aria-hidden="true"
            />
            {certifications.map((cert, index) => (
              <DraggableCardBody
                key={cert.title}
                containerRef={containerRef}
                className={`bg-dark-card border-gray-subtle ${cardPositions[index].top} ${cardPositions[index].left} ${cardPositions[index].rotate} absolute flex min-h-52 w-64 cursor-grab flex-col overflow-hidden rounded-xl border shadow-xl active:cursor-grabbing sm:w-72`}
                onClick={() =>
                  setSelectedCert({
                    pdfPath: cert.pdfPath,
                    title: cert.title,
                  })
                }
              >
                {/* PDF Preview */}
                <div className="absolute inset-0 overflow-hidden">
                  <CertCardPreview pdfPath={cert.pdfPath} />
                </div>

                {/* Overlay with info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pt-12">
                  <div className="flex items-start gap-3">
                    <div className="bg-electric-blue/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg backdrop-blur-sm">
                      <Award size={16} className="text-electric-blue" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-off-white text-base leading-snug font-semibold drop-shadow-lg">
                        {cert.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-gray-300 drop-shadow-lg">
                        {cert.issuer}
                      </p>
                      <span className="mt-1 block font-mono text-xs text-gray-400 drop-shadow-lg">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </motion.div>
      </div>

      <PdfModal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        pdfPath={selectedCert?.pdfPath ?? ""}
        title={selectedCert?.title ?? ""}
      />
    </section>
  );
}
