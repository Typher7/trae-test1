import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white w-full">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">Experience the next evolution of connection. <a href="#" className="underline hover:text-blue-200">Learn more about Meta's vision →</a></p>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-4 w-auto" src="/meta-logo.svg" alt="Meta" />
              </div>
              <div className="hidden md:block ml-6 group">
                <div className="flex space-x-8">
                  <div className="relative group/item">
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Meta Quest</a>
                    <div className="absolute hidden group-hover/item:block w-screen -left-[50vw] right-[50vw] top-full z-50 bg-white border-t border-gray-200 shadow-lg">
                      <div className="w-screen max-w-7xl mx-auto grid grid-cols-3 gap-8 p-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Latest Devices</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Meta Quest 3</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Meta Quest Pro</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Compare Devices</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Accessories</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Controllers</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Carrying Case</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Link Cable</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Featured</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <img src="/quest-3.jpg" alt="Meta Quest 3" className="w-full h-32 object-cover rounded mb-4" />
                            <p className="text-sm text-gray-900 font-medium">Experience Mixed Reality</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item">
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Ray-Ban Meta</a>
                    <div className="absolute hidden group-hover/item:block w-screen -left-[50vw] right-[50vw] top-full z-50 bg-white border-t border-gray-200 shadow-lg">
                      <div className="w-screen max-w-7xl mx-auto grid grid-cols-3 gap-8 p-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Collections</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Wayfarer</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Aviator</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Headliner</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Features</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Photo & Video</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Audio Experience</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Smart Features</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Featured</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <img src="/ray-ban.jpg" alt="Ray-Ban Meta" className="w-full h-32 object-cover rounded mb-4" />
                            <p className="text-sm text-gray-900 font-medium">Next Gen Smart Eyewear</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group/item">
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Apps and games</a>
                    <div className="absolute hidden group-hover/item:block w-screen -left-[50vw] right-[50vw] top-full z-50 bg-white border-t border-gray-200 shadow-lg">
                      <div className="w-screen max-w-7xl mx-auto grid grid-cols-3 gap-8 p-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Categories</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Games</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Entertainment</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Fitness</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Top Picks</h3>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">Best Sellers</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900 mb-2">New Releases</a>
                          <a href="#" className="block text-gray-600 hover:text-gray-900">Coming Soon</a>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Featured</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <img src="/horizon.jpg" alt="Meta Horizon" className="w-full h-32 object-cover rounded mb-4" />
                            <p className="text-sm text-gray-900 font-medium">Explore Meta Horizon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side navigation */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">About Meta</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Support</a>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="/quest-3.webp" alt="Meta Quest 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Meta Quest 3</h2>
              <p className="text-gray-600 mb-4">The most advanced all-in-one mixed reality device</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">Starting at $499.99</p>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">Shop now</a>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="/ray-ban.jpg" alt="Ray-Ban Meta Smart Glasses" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Ray-Ban | Meta</h2>
              <p className="text-gray-600 mb-4">Smart glasses that keep you connected</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">Starting at $299.99</p>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">Shop now</a>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="/meta-verse.webp" alt="Meta Horizon" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Meta Horizon</h2>
              <p className="text-gray-600 mb-4">Your gateway to the metaverse</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">Free to explore</p>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">Get started</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
