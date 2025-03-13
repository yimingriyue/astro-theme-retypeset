import { generateDescription } from '@/utils/description'
import { OGImageRoute } from 'astro-og-canvas'
import { getCollection } from 'astro:content'

// eslint-disable-next-line antfu/no-top-level-await
const blogEntries = await getCollection('posts')

// Convert to page data objects
const pages = Object.fromEntries(
  blogEntries.map(post => [
    post.slug,
    {
      title: post.data.title,
      description: post.data.description || generateDescription(post),
    },
  ]),
)

// Configure Open Graph image generation route
export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/image/Logo-On-OpenGraph.png', // Required local path and PNG format
      size: [70],
    },
    font: {
      title: {
        families: ['Noto Sans SC'], // or Noto Serif SC
        weight: 'Bold',
        color: [34, 33, 36],
        lineHeight: 1.5,
      },
      description: {
        families: ['Noto Sans SC'], // or Noto Serif SC
        color: [72, 71, 74],
        lineHeight: 1.5,
      },
    },
    fonts: [
      'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
      'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
      // 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/SC/NotoSerifSC-Bold.otf',
      // 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/SC/NotoSerifSC-Regular.otf',
    ],
    bgGradient: [[242, 241, 245]],
  }),
})
