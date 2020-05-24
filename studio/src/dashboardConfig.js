export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec9d264c94566e56c5a1b92',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-x67c8kd9',
                  apiId: '9528ab08-4184-4f1a-a5f1-d2260bfc8324'
                },
                {
                  buildHookId: '5ec9d264f5ea8887fad61138',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ccv3g54h',
                  apiId: '57398e84-f086-48d4-b5a9-c38968372705'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PollockCR/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ccv3g54h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
