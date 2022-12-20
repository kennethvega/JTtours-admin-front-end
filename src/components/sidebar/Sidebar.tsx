import Card from '../utility/Card';
import logo from '../../assets/JT-tours&travels.jpg';

const Sidebar = () => {
  return (
    <div className="">
      <div className="fixed flex flex-col gap-10 p-3">
        <img src={logo} alt="Logo" className="w-16" />
        <p className="hover:bg-red-500 ">Sidebar</p>
        <p className="hover:bg-red-500 ">Sidebar</p>
        <p className="hover:bg-red-500 ">Sidebar</p>
        <p className="hover:bg-red-500">Sidebar</p>
      </div>
    </div>
  );
};

export default Sidebar;
