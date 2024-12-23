import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  author: 'Camilo Huanca',
  title: '',
  description: "Camilo Huanca's resume and portfolio",
  lang: 'en-GB',
  ogLocale: 'en_GB',
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
};
