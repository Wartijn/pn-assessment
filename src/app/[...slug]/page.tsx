import { GameList } from "@/types/category";
import { getCategory } from "@/utils/api";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug;
  const category = await getCategory(slug);
  // assuming there's always exactly one game-list
  const gameList: GameList = category.components.find(
    (c) => c?.type === "game-list",
  )!;
  console.log(category);
  return (
    <>
      <h1>{category.meta.title}</h1>
      <h2>{category.meta.description}</h2>
      <h2>Game list</h2>
      total{gameList.total}, nextPage {gameList.nextPage}
      {gameList.games.map((gameTitle) => (
        <span key={gameTitle.id}>{gameTitle.gameText}</span>
      ))}
    </>
  );
}
