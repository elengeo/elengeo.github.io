// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} George Elengikal
        </p>
      </footer>
    );
  }