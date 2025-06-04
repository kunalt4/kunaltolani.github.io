import React, { useState } from "react";
import { Dialog, IconButton, Spinner } from "@material-tailwind/react";
import { Document, Page, pdfjs } from 'react-pdf';
import { HandwrittenHeading } from "./HandwrittenHeading";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setLoading(false);
    setError(null);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error): void {
    setLoading(false);
    setError('Failed to load PDF. Please try again later.');
    console.error('PDF Load Error:', error);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kunal Resume 2024.pdf';
    link.download = 'Kunal Resume 2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog
      open={open}
      handler={onClose}
      className="bg-surface-container p-0 max-w-5xl w-[95vw] h-[90vh] overflow-hidden rounded-[30px] sm:rounded-[40px_20px_50px_30px] hover:rounded-[30px_50px_20px_40px] shadow-level5 transition-all duration-500 border border-primary-80/20 backdrop-blur-sm group"
      {...sharedProps}
      dismiss={{ outsidePress: false }}
    >
      <div className="relative w-full h-full flex flex-col bg-gradient-to-br from-surface-container-low/50 to-surface-container-high/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/5 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></div>
        
        {/* Header with controls - Simplified */}
        <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b border-primary-80/10 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <HandwrittenHeading size="medium" className="text-primary-80">
              Resume
            </HandwrittenHeading>

            {numPages > 1 && (
              <div className="flex items-center gap-2">
                <IconButton
                  variant="text"
                  onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                  disabled={pageNumber <= 1}
                  className="bg-surface-container-highest/80 text-primary-60 hover:text-primary-70 hover:scale-110 transition-all duration-300"
                  {...sharedProps}
                >
                  <span className="material-icons">chevron_left</span>
                </IconButton>
                <span className="text-sm text-primary-80 min-w-[80px] text-center">
                  {pageNumber} / {numPages}
                </span>
                <IconButton
                  variant="text"
                  onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                  disabled={pageNumber >= numPages}
                  className="bg-surface-container-highest/80 text-primary-60 hover:text-primary-70 hover:scale-110 transition-all duration-300"
                  {...sharedProps}
                >
                  <span className="material-icons">chevron_right</span>
                </IconButton>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              onClick={handleDownload}
              className="bg-surface-container-highest/80 text-primary-60 hover:text-primary-70 hover:scale-110 transition-all duration-300 group/btn"
              {...sharedProps}
            >
              <span className="material-icons group-hover/btn:rotate-12 transition-transform duration-500">download</span>
            </IconButton>
            <IconButton
              variant="text"
              onClick={onClose}
              className="bg-surface-container-highest/80 text-primary-60 hover:text-primary-70 hover:scale-110 transition-all duration-300 group/btn"
              {...sharedProps}
            >
              <span className="material-icons group-hover/btn:rotate-12 transition-transform duration-500">close</span>
            </IconButton>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto pdf-container bg-surface-container-lowest/50">
          <div className="flex flex-col items-center py-4">
            {loading && (
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-30/20 via-secondary-30/20 to-accent-30/20 rounded-full blur-xl animate-spin-slow"></div>
                  <Spinner className="h-12 w-12 text-primary-60" {...sharedProps} />
                </div>
                <p className="mt-4 text-primary-80">Loading PDF...</p>
              </div>
            )}
            
            {error && (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
                <div className="relative mb-4">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-30/20 via-accent-30/30 to-accent-30/20 rounded-full blur-xl"></div>
                  <span className="material-icons text-4xl text-accent-50">error_outline</span>
                </div>
                <p className="text-accent-50 mb-6">{error}</p>
                <button 
                  onClick={handleDownload}
                  className="px-6 py-3 bg-primary-60 text-white rounded-full hover:bg-primary-70 transition-all duration-300 shadow-level2 hover:shadow-level3 hover:scale-105 flex items-center gap-2 group/btn"
                >
                  <span className="material-icons group-hover/btn:rotate-12 transition-transform duration-500">download</span>
                  Download PDF
                </button>
              </div>
            )}

            <Document
              file="/Kunal Resume 2024.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null}
              className="w-full flex justify-center"
            >
              <div className="shadow-level3 hover:shadow-level4 transition-shadow duration-300 rounded-[20px] overflow-hidden bg-white">
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  loading={null}
                  canvasBackground="transparent"
                />
              </div>
            </Document>
          </div>
        </div>
      </div>
    </Dialog>
  );
} 