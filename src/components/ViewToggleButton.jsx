export default function ViewToggleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 mb-4 rounded-lg shadow-lg hover:shadow-black text-lg font-semibold transition duration-300 ease-in-out bg-white"
    >
      {children}
    </button>
  );
}
