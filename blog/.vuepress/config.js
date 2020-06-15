module.exports = {
  title: 'The Ionoid IoT Blog',
  base: '/blog.ionoid.io/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    sitemap: {
      hostname: 'https://blog.ionoid.io'
    },
    footer: {
      contact: [
        {
          type: 'web',
          link: 'https://ionoid.io/',
        },
        {
          type: 'mail',
          link: 'mailto:support@ionoid.io',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/ionoid.io',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/company/open-devices',
        },
        {
          type: 'github',
          link: 'http://github.com/ionoid',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/ionoid_io',
        },
      ],
      copyright: [
        {
          text: 'Terms and Conditions',
          link: 'https://ionoid.io/terms',
        },
        {
          text: 'Privacy Policy',
          link: 'https://ionoid.io/privacy/',
        },
        {
          text: 'Copyright Open Devices GmbH © 2020 All Rights Reserved',
          link: 'https://www.opendevices.io/',
        },
      ],
    },
  }
}
