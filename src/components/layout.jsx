import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
    
      <aside className="w-1/4 bg-blue-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">DashboardKit</h1>
          <p>details</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/home1" className="flex items-center mb-4">
                <span className="material-icons">home</span>
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/clothes" className="flex items-center mb-4">
                <span className="material-icons">shopping_bag</span>
                <span className="ml-2">Clothes</span>
              </Link>
            </li>
            <li>
              <Link to="/shoes" className="flex items-center mb-4">
                <span className="material-icons">shoes</span>
                <span className="ml-2">Shoes</span>
              </Link>
            </li>
            <li>
              <Link to="/jeweleries" className="flex items-center mb-4">
                <span className="material-icons">diamond</span>
                <span className="ml-2">Jeweleries</span>
              </Link>
            </li>

          </ul>
        </nav>
      </aside>

     
      <main className="w-3/4 bg-gray-100 p-6">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
