module.exports = {
  title: 'Matsumok Tech Blog',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  host: "localhost",
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/matsumok',
        },
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2022 Matsumok',
          link: '',
        },
      ],
    },
    dateFormat: 'YYYY-MM-DD',
  },
}
