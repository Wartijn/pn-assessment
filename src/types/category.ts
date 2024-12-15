// these types are based on the responses from calls to the urls of /v1/pika/en/config -> menu.lobby.items[].links.getConfig
// todo generate these types using the api docs

import { Image } from "@/types/media";

interface Tag {
  value: string;
  color: string;
  backgroundColor: string;
}

interface BetSize {
  min: number;
  max?: number;
}

interface GameTile {
  type: "game-tile";
  id: string;
  platformId: string;
  slug: string;
  image: Image;
  gameText: string;
  provider: string;
  provider_slug: string;
  providerLogo?: Image;
  tag?: Tag;
  betSize?: BetSize;
  liveRtp?: number | null;
}

interface BannerCarouselItem {
  id: string;
  name: string;
  type: string;
  bannerImage: Image;
  backgroundImage: Image;
  bannerText: {
    id: string;
    type: string;
    htmlContent: string;
  };
  legalBannerHtml: {
    id: string;
    type: string;
    htmlContent: string;
  };
  ctaButton: {
    id: string;
    type: string;
    text: string;
    link: string;
  };
}

interface BannerCarousel {
  id: string;
  name: string;
  type: "banner-carousel";
  carousel: BannerCarouselItem[];
}

interface GameCarousel {
  type: "game-carousel";
  id: string;
  title: string;
  path: string;
  collectionName: string;
  items: (GameTile | null)[];
  nextPage?: string;
}

interface HtmlComponent {
  id: string;
  type: "html";
  htmlString?: string;
}

export interface GameList {
  id: string;
  type: "game-list";
  listParameters: {
    providers: string[];
    collections: string[];
    collectionsV2: string[][];
    pageNumber: number;
    pageSize: number;
    promotedGameIds: string[];
  };
  total: number;
  nextPage?: string;
  games: GameTile[];
  promoted: GameTile[];
}

interface AvailableLanguages {
  [key: string]: {
    path: string;
  };
}

interface Meta {
  title: string;
  description: string;
  path: string;
  availableLanguages: AvailableLanguages;
  indexed: boolean;
}

type Component =
  | BannerCarousel
  | GameCarousel
  | HtmlComponent
  | GameList
  | null;

export interface CategoryResponse {
  meta: Meta;
  components: Component[];
}
