import fsp from 'node:fs/promises';
import path from 'node:path';
import rehypeShiki from '@shikijs/rehype';
import { compileMDX } from 'next-mdx-remote/rsc';
import { z } from 'zod';
import components from '@/components/Markdown';

const BlogMetadata = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
});

export type BlogMetadata = z.infer<typeof BlogMetadata>;

export async function getPost(pathname: string) {
  const { content, frontmatter } = await compileMDX({
    source: await fsp.readFile(pathname),
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypeShiki, { theme: 'github-dark-high-contrast' }]],
      },
    },
  });

  const slug = path.basename(pathname, path.extname(pathname));
  const metadata = BlogMetadata.parse({ slug, ...frontmatter });

  return { content, metadata };
}
