import { CategoryResponse } from "@/types/category";
import { ConfigResponse, MenuItem } from "@/types/config";

const BASE_URL = "https://casino.api.pikakasino.com/v1/pika";
// type SearchParams = 'search' | 'pageNumber' | 'pageSize';

export async function getMenuItems(): Promise<MenuItem[]> {
  const respBody: Promise<ConfigResponse> = (
    await fetch(`${BASE_URL}/en/config`)
  ).json();
  return (await respBody).menu.lobby.items;
}

export async function getCategory(slug: string[]): Promise<CategoryResponse> {
  const url = (await getMenuItems()).find(
    (item) => item.path === `/${slug.join("/")}`,
  )?.links.getPage;

  if (!url) {
    throw new Error();
  }
  return (await fetch(url)).json();
}

export async function getPage() {}
