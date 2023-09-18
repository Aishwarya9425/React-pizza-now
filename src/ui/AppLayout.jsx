import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

//parent route of every other route
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
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
