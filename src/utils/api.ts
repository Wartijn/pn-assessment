import { CategoryResponse } from "@/types/category";
import { ConfigResponse, MenuItem } from "@/types/config";

const BASE_URL = "https://casino.api.pikakasino.com/v1/pika";
// type SearchParams = 'search' | 'pageNumber' | 'pageSize';

export async function getMenuItems(): Promise<MenuItem[]> {
  const respBody: Promise<ConfigResponse> = (
    await fetch(`${BASE_URL}/en/config`)
  ).json();
  return (await respBody).menu.lobby.items.filter(
    (item) => item.type === "categoryFilter" || item.type === "allGames",
  );
}

export async function getCategory(slug: string): Promise<CategoryResponse> {
  const url = (await getMenuItems()).find((item) => {
    const split = item.path.split("/");
    return split[split.length - 1] === slug;
  })?.links.getPage;

  if (!url) {
    throw new Error();
  }
  return (await fetch(url)).json();
}

export async function getPage() {}
