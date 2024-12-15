// these types are based on the response from a call to /v1/pika/en/config
// todo generate these types using the api docs

import { AnimatedSvg, Image } from "@/types/media";

export interface ConfigResponse {
  gamesOfTheMonth: GameTile[];
  menu: {
    lobby: MenuSection;
    liveLobby: MenuSection;
  };
  gameFilterConfig: GameFilterConfig[];
  liveGameFilterConfig: GameFilterConfig[];
  metadata: {
    updatedAt: string;
  };
  // empty array in the response
  sidebarLinks: unknown[];
  footerContent: FooterContent;
  // empty array in the response
  paymentMethods: unknown[];
  featureToggles: FeatureToggles;
}

export interface MenuItem {
  id: string;
  image: Image;
  activeImage: Image | null;
  name: string;
  path: string;
  isLiveCasino: boolean;
  links: {
    getPageMetadata: string;
    getPage: string;
  };
  animatedSvg: AnimatedSvg;
  type: "categoryRows" | "categoryFilter" | "allGames" | "liveCategoryRows";
  categoryFilter: string | null;
}

interface GameTag {
  value: string;
  color: string;
  backgroundColor: string;
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
  tag?: GameTag;
  betSize: {
    min: number;
  };
  liveRtp: number | null;
}

interface MenuSection {
  items: MenuItem[];
}

interface GameFilterItem {
  id: string;
  text: string;
  filter: {
    providerId?: string;
    collectionSlug?: string;
  };
}

interface GameFilterConfig {
  id: string;
  type: "provider-game-filter" | "collection-game-filter";
  title: string;
  items: GameFilterItem[];
}

interface FooterLink {
  text: string;
  path: string;
}

interface LicenseLogo {
  title: string;
  imageUrl: string;
  link: string;
}

interface ProviderLogo {
  name: string;
  path: string;
  imageUrl: string;
}

interface FooterContent {
  logoUrl: string;
  links: FooterLink[];
  licenseLogos: LicenseLogo[];
  copyright: string;
  licenseText: string;
  responsibleGambling: string;
  providerLogos: ProviderLogo[];
}

interface FeatureToggles {
  manualRegistration: boolean;
  christmas: boolean;
}
