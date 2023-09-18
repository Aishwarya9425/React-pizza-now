import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

//parent route of every other route
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        {/* render nested children routes inside parent outlet*/}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
