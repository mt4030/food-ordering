export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-lg font-semibold ">D&D</div>
        
        {/* Links */}
        <nav className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4 sm:mt-0">
          © {new Date().getFullYear()} D&D. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
