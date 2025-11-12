import { LOGO_URL } from "./Constant";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex items-center px-10 py-4 bg-gredient-to-b from-black/80 to-transparent pointer-events-none">
      <img className="w-44" src={LOGO_URL} alt="Netflix-logo" />
    </div>
  );
};

export default Header;
