import { MenuItem } from "@/types/config";
import { ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

export default async function CategoryMenuItem({
  category,
}: {
  category: MenuItem;
}) {
  return (
    <ListItem disablePadding>
      <Link href={category.path}>
        <ListItemText primary={category.name} />
      </Link>
    </ListItem>
  );
}
