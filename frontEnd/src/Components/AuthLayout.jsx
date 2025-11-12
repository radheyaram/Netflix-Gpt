import { BG_LOGO_URL } from "./Constant";
import Header from "./Header";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_LOGO_URL}
          alt="background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;
