import Image from "next/image";
import ProductGallery from "./middlecom";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="flex justify-between items-center py-6 px-8">
          <div className="text-2xl font-bold text-yellow-500">S<span className="text-gray-900">tudio</span>.</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Sales</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Sign in</button>
        </header>

        <main className="flex flex-col lg:flex-row items-center lg:justify-between py-16 px-8">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Make Your Interior Unique & Modern.</h1>
            <p className="text-gray-600 mb-6">Turn your room with panto into a lot more minimalist and modern.</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg">Discover Now</button>
              <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg">Watch Video</button>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex -space-x-2">
                <img src="/Furniture-Renting/furniture-renting/src/app/us1.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/path/to/user3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/path/to/user4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <span className="ml-3 text-gray-600">Used by 300,000 people globally</span>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative z-10">
              {/* Additional content can go here */}
            </div>
            <div className="mt-16">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img src="andres-jasso-ssbgw3cKdXg-unsplash.jpg" alt="Sofa" />
                <p className="text-gray-600">Sofa</p>
                <p className="text-xl font-bold text-gray-900">$88.59</p>
                <div className="flex space-x-2 mt-2">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-16">
        <ProductGallery />
      </div>
    </div>
  );
}