import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Outlet />
    </div>
  );
};

export default Auth;
