"use client"

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
        >
          ✕
        </button>
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">{title}</h3>
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="max-w-full max-h-[70vh] object-contain mx-auto rounded"
          />
        </div>
      </div>
    </div>
  )
}
