import { ModalProps } from "@/types/newsProps";
import ReactDOM from "react-dom";


const NewsModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="bg-neutral-900 center-page w-[85%] lg:w-[60%] rounded-lg px-6 pt-8 pb-16">
      <div className="close-area mb-12">
        <button
          className="absolute top-4 right-3 shadow shadow-red-600 rounded-3xl"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>,
    document.body
  );
};

export default NewsModal;
