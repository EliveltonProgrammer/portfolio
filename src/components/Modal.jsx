import { useEffect } from "react";

import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, children }) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="
    bg-white
    w-full
    max-w-4xl
    h-[90vh]
    rounded-2xl
    shadow-2xl
    flex
    flex-col
  "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b p-4 shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 overflow-y-auto min-h-0 p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}