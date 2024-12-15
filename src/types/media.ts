interface ImageMetadata {
  size?: number;
  width?: number;
  height?: number;
}

interface ImageVariant {
  src: string;
  metadata: ImageMetadata;
}

export interface Image {
  alt: string;
  original?: ImageVariant;
  small?: ImageVariant;
  thumbnail?: ImageVariant;
}

export interface AnimatedSvg {
  mobile: Image;
  desktop: Image;
}
