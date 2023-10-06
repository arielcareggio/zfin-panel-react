import Dashboard from './dashboard/Dashboard.tsx';
import Sidebar from './Sidebar.tsx';
import Navbar from './dashboard/navbar/Navbar.tsx';

const Layout = () => {
  
  return (
    <div className="flex bg-fondo-dashboard">
     <Sidebar />
     <div className='flex-grow' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};
export default Layout;