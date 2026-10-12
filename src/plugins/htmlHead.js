import { useHead, useSeoMeta } from '@unhead/vue';

export default function setHead(
  title= 'KSP Toolbox',
  path = '/',
  description = 'A set of tools for KSP',
  titleTemplate = '%s - KSP Toolbox',
) {
  useHead({
    title,

    htmlAttrs: { lang: 'en-US' }, // BCP 47 language code
    link: [
      {
        rel: 'canonical',
        href: path,
      },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    ],
    meta: [
      { name: 'theme-color', content: '#FFFFFFFF', media: '(prefers-color-scheme: light)' },
      { name: 'theme-color', content: '#0D0F10FF', media: '(prefers-color-scheme: dark)' },
      { name: 'color-scheme', content: 'light dark' },
    ],
  });

  useSeoMeta({
    title,
    titleTemplate,
    description,
    ogTitle: title,
    ogType: 'website',
    ogDescription: description,
    ogUrl: path, // should match canonical URL
    ogLocale: 'en_US',
    ogSiteName: 'KSP Toolbox',
    ogImage: {
      url: '/social-card.png',
      width: 512,
      height: 512,
      alt: 'KSP Toolbox Kerbal',
      type: 'image/png',
    },
    twitterCard: 'summary_large_image',
  });
}
