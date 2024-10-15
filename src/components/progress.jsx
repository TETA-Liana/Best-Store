
const Progress = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-700 text-white p-6">
        <div className="text-lg font-semibold mb-10">DashboardKit</div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <span className="text-2xl">🏠</span>
            <a href="/" className="text-lg">Home</a>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-2xl">📊</span>
            <a href="/sales" className="text-lg">Sales</a>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-2xl">⏳</span>
            <a href="/progress" className="text-lg">Progress</a>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-2xl">⚙️</span>
            <a href="/settings" className="text-lg">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-6">
            <button className="text-xl font-semibold text-blue-500">TODAY</button>
            <button className="text-xl">Last week</button>
            <button className="text-xl">Last month</button>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="search something ..."
              className="p-2 border border-gray-300 rounded-lg"
            />
            <span className="text-xl">🔔</span>
            <div className="flex items-center space-x-2">
              <img
                src="./keith.jpeg"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <span>Keith powers</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-4xl">💰</span>
            <h2 className="text-2xl font-bold mt-4">$513</h2>
            <p>Total revenues</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-4xl">📊</span>
            <h2 className="text-2xl font-bold mt-4">543</h2>
            <p>Total transactions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <span className="text-4xl">🛍️</span>
            <h2 className="text-2xl font-bold mt-4">388</h2>
            <p>Products</p>
          </div>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-2 gap-6">
          {/* Sales Performance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Sales Performance</h3>
            <div className="h-48 bg-gray-200 rounded-lg">
              {/* Placeholder for chart */}
            <img src='./barchart.jpeg'/>
            </div>
            <p className="text-gray-500 mt-4 text-center">
              <span className="font-bold text-blue-500">30%</span> better than last month
            </p>
            <button className="mt-4 block w-full bg-blue-500 text-white py-2 rounded-lg">
              Details
            </button>
          </div>

          {/* Overall Performance */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Overall Performance</h3>
            <div className="h-48 bg-gray-200 rounded-full mx-auto w-48 flex items-center justify-center">
              {/* Placeholder for performance ring */}
              <p className="text-4xl font-bold text-blue-500">350</p>
            </div>
            <p className="text-gray-500 mt-4">Excellent</p>
            <button className="mt-4 block w-full bg-blue-500 text-white py-2 rounded-lg">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
