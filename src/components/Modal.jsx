import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-fadeIn">

                {/* Header */}
                <div className="flex items-center justify-between border-b p-4 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-6">
                    {children}
                </div>

            </div>
        </div>
    );
}