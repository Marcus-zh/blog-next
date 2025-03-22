import { WalineProps } from "@waline/client";
import { LinkProps } from "@/interface/common";

export default interface Config {
  info: Info;
  social: Social;
  aside: Aside;
  footer: Footer;
  waline?: WalineProps;
}

interface Info {
  siteName: string;
  author: string;
  description: string;
  siteUrl: string;
  avatar: string;
  icon: string;
  favicon: string;
  copyright: string;
  generator: string;
}

interface Social {
  email: string;
  github: string;
  [key: string]: string;
}

interface Aside {
  [key: string]: AsideWidgets;
}

interface AsideWidgets {
  left: string[];
  right: string[];
}

interface Footer {
  left: {
    year: number;
    links?: LinkProps[];
    icp?: LinkProps;
  }
  right:{
    themeSwitch?: boolean;
  }
}