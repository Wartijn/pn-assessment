import { getMenuItems } from "@/utils/api";
import CategoryMenuItem from "./category-menu-item";

export default async function CategoryMenu() {
  const menuItems = await getMenuItems();
  return (
    <>
      <ul>
        {menuItems.map((item) => (
          <CategoryMenuItem category={item} key={item.id}></CategoryMenuItem>
        ))}
      </ul>
    </>
  );
}
