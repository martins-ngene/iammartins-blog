import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: 'martins-ngene/iammartins-blog',
        },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'The title of the blog post',
          },
          slug: {
            label: 'URL Slug',
            description: 'Slug used in the post URL (/blog/[slug])',
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Brief summary displayed on post cards and SEO previews',
          multiline: true,
          validation: { isRequired: true },
        }),
        pubDate: fields.date({
          label: 'Published Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: 'Updated Date (Optional)',
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          description: 'Optional banner image for social cards and post header',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          description: 'List of topics (e.g. engineering, automation, ai)',
          itemLabel: (props) => props.value || 'New Tag',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Keep this post hidden from archive indices and production feeds',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
});
