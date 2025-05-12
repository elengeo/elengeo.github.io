// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md mb-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">George Elengikal</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experiences">Experiences</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}