import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div 
    className="bg-blue-300 uppercase font-semibold px-5 py-5 sm:px-6 md:text-base 
    flex items-center justify-between">
      <p className="font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
