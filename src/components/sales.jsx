const Sales= ()=>{
    const orders = [
        {
          id: 1,
          name: 'ANGEL MUTOONI',
          payment: 'cash',
          type: 'Delivery',
          status: 'Completed',
          total: '23k',
          img: './zendaya.jpeg', 
        },
        {
          id: 2,
          name: 'ANGEL MUTOONI',
          payment: 'cash',
          type: 'Delivery',
          status: 'Completed',
          total: '34k',
          img: './zendaya.jpeg', 
        },
        {
          id: 3,
          name: 'ANGEL MUTOONI',
          payment: 'Paid',
          type: 'Collected',
          status: 'Completed',
          total: '28k',
          img: './zendaya.jpeg',
        },
        {
          id: 4,
          name: 'ANGEL MUTOONI',
          payment: 'Paid',
          type: 'Delivery',
          status: 'Cancelled',
          total: '0',
          img: './zendaya.jpeg',
        },
      ];
    
      return (
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-blue-600 h-screen text-white p-4">
            <h2 className="text-xl font-bold mb-4">DashboardKit</h2>
            <ul>
              <li className="mb-4">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l9-9 9 9-9 9-9-9z" />
                  </svg>
                  Home
                </span>
              </li>
              <li className="mb-4">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v8m-4-4h8" />
                  </svg>
                  Sales
                </span>
              </li>
              <li className="mb-4">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Progress
                </span>
              </li>
              <li className="mb-4">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 11v10m9-9H3" />
                  </svg>
                  Settings
                </span>
              </li>
            </ul>
          </div>
    
          {/* Main Content */}
          <div className="w-3/4 p-6 bg-gray-100">
            {/* Top Tabs */}
            <div className="flex mb-6">
              <span className="text-blue-600 border-b-2 border-blue-600 pb-2 px-4 cursor-pointer">All orders</span>
              <span className="text-gray-500 border-b-2 border-transparent pb-2 px-4 cursor-pointer">Goods in stock</span>
              <span className="text-gray-500 border-b-2 border-transparent pb-2 px-4 cursor-pointer">Cancelled</span>
              <span className="text-gray-500 border-b-2 border-transparent pb-2 px-4 cursor-pointer">Completed</span>
            </div>
    
            {/* Orders Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Payment</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="bg-blue-50 even:bg-blue-100">
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={order.img}
                          alt="Customer"
                          className="h-10 w-10 rounded-full mr-2"
                        />
                        {order.name}
                      </td>
                      <td className="px-4 py-2">{order.payment}</td>
                      <td className="px-4 py-2">{order.type}</td>
                      <td className="px-4 py-2">{order.status}</td>
                      <td className="px-4 py-2">{order.total}</td>
                      <td className="px-4 py-2">
                        <svg
                          className="w-6 h-6 text-gray-600 cursor-pointer"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 10V6a2 2 0 00-2-2h-4m0 0V4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4z"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default Sales;