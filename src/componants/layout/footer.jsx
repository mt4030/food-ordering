export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6  text-center ">
                     <p className="text-sm text-gray-500 mt-4 sm:mt-0">
          © {new Date().getFullYear()} D&D. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
