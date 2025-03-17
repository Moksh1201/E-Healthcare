export default function Button({ children, onClick, type = "button" }) {
    return (
      <button type={type} onClick={onClick} className="w-full bg-blue-600 text-white p-2 rounded-md">
        {children}
      </button>
    );
  }
  