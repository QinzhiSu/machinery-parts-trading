// Spare Part Detail Modal with image gallery and full specifications
import { X, ChevronLeft, ChevronRight, Package, Wrench, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { SparePart } from '@/data/products';

interface SparePartDetailModalProps {
  part: SparePart | null;
  isOpen: boolean;
  onClose: () => void;
  onInquiry: (part: SparePart) => void;
  brandName: string;
  brandColor: string;
}

export default function SparePartDetailModal({
  part,
  isOpen,
  onClose,
  onInquiry,
  brandName,
  brandColor,
}: SparePartDetailModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  if (!isOpen || !part) return null;

  // Extract specifications from description
  const descParts = part.description.split('.');
  const compatibleModels = descParts[1]?.trim() || '';
  const engineModels = descParts[2]?.trim() || '';

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === 0 ? 0 : prev));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'oklch(0 0 0 / 0.5)' }}>
      <div
        className="bg-white rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between p-4 border-b"
          style={{ background: 'oklch(0.97 0.005 90)', borderColor: 'oklch(0.88 0.008 90)' }}
        >
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.18 0.04 265)' }}
            >
              {brandName} {part.partNumber}
            </h2>
            <p className="text-xs mt-1" style={{ color: 'oklch(0.5 0.02 265)' }}>
              {part.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white rounded transition-colors"
            aria-label="Close"
          >
            <X size={20} style={{ color: 'oklch(0.45 0.02 265)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Gallery */}
          <div className="mb-6">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-3 h-64 flex items-center justify-center">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-full object-cover"
              />
              {/* Image navigation (placeholder for future multi-image support) */}
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 text-white text-xs rounded">
                1 / 1
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevImage}
                disabled={imageIndex === 0}
                className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextImage}
                disabled={imageIndex === 0}
                className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Part Information */}
          <div className="space-y-4 mb-6">
            {/* OEM Number */}
            <div className="flex items-start gap-3">
              <Package size={16} style={{ color: brandColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  OEM Part Number
                </p>
                <p
                  className="text-sm font-bold font-mono"
                  style={{ fontFamily: 'var(--font-mono)', color: brandColor }}
                >
                  {part.partNumber}
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-start gap-3">
              <Wrench size={16} style={{ color: brandColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  Category
                </p>
                <p className="text-sm font-semibold" style={{ color: 'oklch(0.18 0.04 265)' }}>
                  {part.category}
                </p>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                Description
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.02 265)' }}>
                {part.description}
              </p>
            </div>

            {/* Compatible Models */}
            {compatibleModels && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  Compatible Vehicles
                </p>
                <p className="text-sm" style={{ color: 'oklch(0.45 0.02 265)' }}>
                  {compatibleModels}
                </p>
              </div>
            )}

            {/* Engine Models */}
            {engineModels && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'oklch(0.5 0.02 265)' }}>
                  Engine Models
                </p>
                <p className="text-sm font-mono" style={{ fontFamily: 'var(--font-mono)', color: 'oklch(0.45 0.02 265)' }}>
                  {engineModels}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                onInquiry(part);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:opacity-90 rounded"
              style={{ background: brandColor, fontFamily: 'var(--font-display)' }}
            >
              <MessageSquare size={14} />
              Send Inquiry
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-all rounded"
              style={{
                background: 'oklch(0.97 0.005 90)',
                color: 'oklch(0.45 0.02 265)',
                border: '1px solid oklch(0.88 0.008 90)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
