const Settings =()=>{
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-gray-500">Manage your profile and settings</p>
            </div>
    
            <div className="grid grid-cols-2 gap-6">
              {/* Left Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">View Clients History</h3>
                <button className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-lg">
                  <span className="text-2xl mr-2">👁️</span> View Clients History
                </button>
              </div>
    
              {/* Right Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                {/* User Profile */}
                <img
                  src="https://via.placeholder.com/50"
                  alt="User profile"
                  className="rounded-full mb-4"
                />
                <button className="bg-gray-200 px-4 py-2 rounded-md text-lg mb-2 w-full text-center">
                  Your Profile
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-md text-lg mb-2 w-full text-center">
                  Change Password
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-md text-lg w-full text-center">
                  Chat
                </button>
              </div>
            </div>
    
            <div className="mt-8 flex justify-center">
              <button className="bg-white border px-6 py-2 rounded-md text-lg">Logout</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Settings;

