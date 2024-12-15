import GameListItem from "@/components/game-list-item";
import { GameList } from "@/types/category";
import { getCategory } from "@/utils/api";
import { drawerWidth } from "@/utils/consts";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

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
  return (
    <>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {category.meta.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          {gameList.games.map((game) => (
            <GameListItem key={game.id} game={game}></GameListItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}
