import { ConfigResponse, MenuItem } from "@/utils/types";

const BASE_URL = "https://casino.api.pikakasino.com/v1/pika";
// type SearchParams = 'search' | 'pageNumber' | 'pageSize';

export async function getMenuItems(): Promise<MenuItem[]> {
  const respBody: Promise<ConfigResponse> = (
    await fetch(`${BASE_URL}/en/config`)
  ).json();
  return (await respBody).menu.lobby.items;
}

export async function getPage() {}
