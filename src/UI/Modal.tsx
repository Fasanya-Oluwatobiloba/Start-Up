import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react"; // Import close icon

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if modal is closed

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
      onClick={onClose} // Close when clicking background
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-80 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        {/* Modal Content */}
        {children} {/* Pass dynamic content */}
      </div>
    </div>,
    document.body // Render outside the main app
  );
};

export default Modal;
