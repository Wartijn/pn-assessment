import { MenuItem } from "@/types/config";
import Link from "next/link";

export default async function CategoryMenuItem({
  category,
}: {
  category: MenuItem;
}) {
  return (
    <>
      <Link href={category.path}>
        <h1>{category.name}</h1>
      </Link>
    </>
  );
}
