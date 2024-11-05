import fsp from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { z } from 'zod';

const Metadata = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
});

export type BlogMetadata = z.infer<typeof Metadata>;

export async function getPost(pathname: string) {
  const { content, frontmatter } = await compileMDX({
    source: await fsp.readFile(pathname),
    options: {
      parseFrontmatter: true,
    },
  });
  const slug = path.basename(pathname, path.extname(pathname));
  const metadata = Metadata.parse({ slug, ...frontmatter });
  return { content, metadata };
}
