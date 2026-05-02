export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

const blogModules = import.meta.glob<string>('../../blogs/*.{md,mdx}', {
  eager: true,
  query: '?raw',
  import: 'default'
});

interface FrontmatterResult {
  metadata: Partial<BlogPost>;
  content: string;
}

const parseFrontmatter = (raw: string): FrontmatterResult => {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    return {
      metadata: {},
      content: raw.trim()
    };
  }

  const [, frontmatter, content] = match;
  const metadata: Record<string, string> = {};

  frontmatter.split(/\r?\n/).forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (!key || valueParts.length === 0) return;

    metadata[key.trim()] = valueParts.join(':').trim();
  });

  return {
    metadata,
    content: content.trim()
  };
};

export const loadBlogs = (): BlogPost[] => {
  return Object.entries(blogModules)
    .map(([path, rawContent]) => {
      const { metadata, content } = parseFrontmatter(rawContent as string);
      const fileName = path.split('/').pop()?.replace(/\.(md|mdx)$/, '') || '';

      return {
        id: metadata.id || fileName,
        title: metadata.title || 'Untitled Post',
        category: metadata.category || 'General',
        date: metadata.date || '',
        readTime: metadata.readTime || '5 min read',
        imageUrl: metadata.imageUrl || '/default-blog.jpg',
        excerpt: metadata.excerpt || '',
        content
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const loadBlogById = (id: string): BlogPost | undefined => {
  return loadBlogs().find((post) => post.id === id);
};
