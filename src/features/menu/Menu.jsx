import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

// render as you fetch strategy ...
function Menu() {
  //get the data inside the comp using custom hook useLoaderData
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//loader function to fetch data from api
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
