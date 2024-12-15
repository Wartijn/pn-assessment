import { getMenuItems } from "@/utils/api";
import CategoryMenuItem from "./category-menu-item";
import { Box, Drawer, List, Toolbar } from "@mui/material";
import { drawerWidth } from "@/utils/consts";

export default async function CategoryMenu() {
  const menuItems = await getMenuItems();
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar />
          <List>
            {menuItems.map((item) => (
              <CategoryMenuItem
                category={item}
                key={item.id}
              ></CategoryMenuItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
