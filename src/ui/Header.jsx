import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">PizzaaNow Co.</Link>
      <SearchOrder />
      <p>Aish user</p>
    </header>
  );
}

export default Header;
