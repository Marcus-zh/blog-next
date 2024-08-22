import { WalineProps } from "@waline/client";

export default interface Config {
  info: Info;
  social: Social;
  aside: Aside;
  waline?: WalineProps;
}

interface Info {
  siteName: string;
  author: string;
  description: string;
  siteUrl: string;
  avatar: string;
  icon: string;
}

interface Social {
  email: string;
  github: string;
  twitter: string;
  [key: string]: string;
}

interface Aside {
  [key: string]: AsideWidgets;
}

interface AsideWidgets {
  left: string[];
  right: string[];
}
