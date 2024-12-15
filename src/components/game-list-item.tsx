import { GameTile } from "@/types/category";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default async function GameListItem({ game }: { game: GameTile }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Typography>{game.gameText}</Typography>
      <Image
        src={game.image.thumbnail?.src || ""}
        width={100}
        height={100}
        alt={game.image.alt}
      ></Image>
    </Grid>
  );
}
