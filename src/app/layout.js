// src/app/layout.js
export const metadata = {
  title: "George Elengikal's Personal Website",
  description: "Portfolio and Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-gray-800 text-white py-4">
          <h1 className="text-center text-3xl">George Elengikals Portfolio</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <p className="text-center">&copy; {new Date().getFullYear()} George Elengikal</p>
        </footer>
      </body>
    </html>
  );
}