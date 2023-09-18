import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-400 px-5 py-5 border-b-8 border-stone-950 space-y-3">
      <Link to="/" className="tracking-widest text-xl italic">PizzaaNow Co.</Link>
      <SearchOrder />
     <Username/>
    </header>
  );
}

export default Header;
