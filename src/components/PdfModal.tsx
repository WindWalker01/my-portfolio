import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  title: string;
}

export default function PdfModal({
  isOpen,
  onClose,
  pdfPath,
  title,
}: PdfModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(
    typeof window !== "undefined" ? Math.min(800, window.innerWidth - 80) : 800,
  );

  // Update page width on resize
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(Math.min(800, window.innerWidth - 80));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && numPages && pageNumber < numPages) {
        setPageNumber((p) => p + 1);
      }
      if (e.key === "ArrowLeft" && pageNumber > 1) {
        setPageNumber((p) => p - 1);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, numPages, pageNumber]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError() {
    setLoading(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-card border-gray-subtle relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border shadow-2xl"
          >
            {/* Header */}
            <div className="border-gray-subtle flex items-center justify-between border-b px-6 py-4">
              <h3 className="text-off-white truncate text-lg font-semibold">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={pdfPath}
                  download
                  className="bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="text-gray-muted hover:text-off-white rounded-lg p-2 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* Loading state */}
              {loading && (
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2
                      size={32}
                      className="text-electric-blue animate-spin"
                    />
                    <p className="text-gray-muted text-sm">Loading PDF...</p>
                  </div>
                </div>
              )}

              {/* Document */}
              <div className="flex-1 overflow-auto">
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={null}
                  className="flex flex-col items-center py-4"
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer
                    renderAnnotationLayer
                    className="shadow-lg"
                    width={pageWidth}
                    loading={
                      <div className="flex h-96 items-center justify-center">
                        <Loader2
                          size={24}
                          className="text-electric-blue animate-spin"
                        />
                      </div>
                    }
                  />
                </Document>
              </div>

              {/* Page navigation footer */}
              {numPages && numPages > 1 && (
                <div className="border-gray-subtle flex items-center justify-center gap-4 border-t px-6 py-3">
                  <button
                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                    disabled={pageNumber <= 1}
                    className="text-gray-muted hover:text-off-white disabled:text-gray-muted/30 flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-all disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                  <span className="text-gray-muted font-mono text-sm">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() =>
                      setPageNumber((p) => Math.min(numPages, p + 1))
                    }
                    disabled={pageNumber >= numPages}
                    className="text-gray-muted hover:text-off-white disabled:text-gray-muted/30 flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-all disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
