import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const path = require('path');
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
// import customSidebarItems from './plugins/custom-sidebar-items/custom-sidebar-items';

const config: Config = {
  title: 'ScalarHub',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scalarhub-api-docs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ScalarHub', // Usually your GitHub org/user name.
  projectName: 'Scalarhub-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: 'reference/api-reference',
          docItemComponent: "@theme/ApiItem", 
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi", // Keep the ID as it is
        docsPluginId: "classic", // Reference the classic theme's ID
        config: {
          account: {
            specPath: 'examples/account.yaml', 
            outputDir: 'docs/Endpoints/Accounts'   
          },
          user: {
            specPath: 'examples/user.yaml', 
            outputDir: 'docs/Endpoints/Users'       
          },
          customer: {
            specPath: 'examples/customer.yaml',
            outputDir: 'docs/Endpoints/Customers'       
          },
          entity: {
            specPath: 'examples/entity.yaml', 
            outputDir: 'docs/Endpoints/Entities'     
          },
          s_l_nexus: {
            specPath: 'examples/s_l_nexus.yaml', 
            outputDir: 'docs/Endpoints/S_l_Nexuses'      
          },
          product: {
            specPath: 'examples/product.yaml',
            outputDir: 'docs/Endpoints/Products'    
          },
          subscription: {
            specPath: 'examples/subscription.yaml', 
            outputDir: 'docs/Endpoints/Subscriptions'    
          },
          location: {
            specPath: 'examples/location.yaml', 
            outputDir: 'docs/Endpoints/Locations'     
          },
          exemption_certificate: {
            specPath: 'examples/exemption_certificate.yaml', 
            outputDir: 'docs/Endpoints/Exemption Certificates'     
          },
          location_attribute: {
            specPath: 'examples/location_attribute.yaml',
            outputDir: 'docs/Endpoints/Location Attributes'
          }
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides', // Unique ID for the API reference section
        path: 'guides', // Folder containing API reference docs
        routeBasePath: '/guides/', // Base URL for API reference
        sidebarPath: require.resolve('./sidebarGuides.ts'), // Custom sidebar for API reference
        // editUrl: 'https://github.com/your-repo/edit/main/apireference/',
      },
    ],
    // [customSidebarItems]
  ],
  

  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    // Replace with your project's social card
    navbar: {
      logo: {
        alt: 'ScalarHub Logo',
        src: 'img/top-logo.png',
        href: '/',
      },
      items: [
        {
          to: "/guides/Overview",
          sidebarId: 'guideSidebar',
          label: "Guides",
          position: "left",
          activeBasepath: "/guides/",
        },
        {
          to:"/reference/api-reference",
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API reference',
          activeBasepath: "/reference/api-reference",
        },
       
        {
          href: "https://github.com/scalarHubTech",
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: '/arc/css/custom.css',
      type: 'text/css',
    },
  ]
};

export default config;
