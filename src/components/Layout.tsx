import Dashboard from './Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import Navbar from './navbar/Navbar.tsx';

const Layout = () => {
  
  return (
    <div className="flex bg-fondo-dashboard">
      <Sidebar />
      <div className='flex-grow'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};
export default Layout;