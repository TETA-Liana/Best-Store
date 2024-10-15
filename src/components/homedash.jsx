const Homedash=()=>{
    return(
        <div className="flex h-screen">
            <div className="w-1/4 bg-blue-700 text-white p-6">
            <div className="text-lg font-semibold mb-10">DashboardKit</div>
            <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                    <span className="text-2xl">🏠</span>
                    <a href="/" className="text-lg">Home</a>
                </li>
                 <li className="flex items-center space-x-4">
                    <span className="text-2xl">📊</span>
                    <a href='/sales' className="text-lg">Sales</a>
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
        {/* Sales Overview */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Sales Overview</h1>
          <p className="text-gray-500">Your current summary and activity</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <p className="text-xl">Total Sales (Monthly)</p>
            <h2 className="text-3xl font-semibold">$465,486</h2>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <p className="text-xl">Total Purchases</p>
            <h2 className="text-3xl font-semibold">$579,457</h2>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Overall Performance</h3>
          {/* Placeholder for chart */}
          <div className="h-64 bg-gradient-to-b from-blue-200 to-blue-500 rounded-lg">
            <img src='./chart.jpg' alt='example' className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>



        </div>
    )

}
export default Homedash;
