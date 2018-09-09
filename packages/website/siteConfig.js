/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'NodeBots',
    // You will need to prepend the image path with your baseUrl
    image: '/node-serialport/img/nodebots-logo.svg',
    infoLink: 'http://www.nodebots.io',
    pinned: true,
  },
]

const siteConfig = {
  title: 'Node SerialPort', // Title for your website.
  tagline: 'Node.js package to access serial ports for Linux, OSX and Windows.',
  url: 'https://node-serialport.github.io/', // Your website URL
  baseUrl: '/node-serialport/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'node-serialport',
  organizationName: 'node-serialport',
  customDocsPath: '../docs',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'guide-about', label: 'Guides' },
    { doc: 'api-overview', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/node-serialport-logo-small.png',
  footerIcon: 'img/node-serialport-logo.png',
  favicon: 'img/node-serialport-logo-small.png',

  /* Colors for website */
  colors: {
    primaryColor: '#cc0096',
    secondaryColor: '#373737',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: ['Helvetica', 'sans-serif'],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Node SerialPort`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/node-serialport/node-serialport',
  editUrl: `https://github.com/node-serialport/node-serialport/edit/master/docs/`,
  scrollToTop: true,
}

module.exports = siteConfig
