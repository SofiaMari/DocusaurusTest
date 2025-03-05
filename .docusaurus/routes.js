import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/DocusaurusTest/__docusaurus/debug',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug', '7e5'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/config',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/config', '2c5'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/content',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/content', 'aba'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/globalData',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/globalData', 'd7f'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/metadata',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/metadata', 'ead'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/registry',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/registry', 'baa'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/routes',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/routes', 'd6d'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog',
    component: ComponentCreator('/DocusaurusTest/blog', '3cb'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/archive',
    component: ComponentCreator('/DocusaurusTest/blog/archive', 'ab3'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/authors',
    component: ComponentCreator('/DocusaurusTest/blog/authors', 'a3d'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/DocusaurusTest/blog/authors/all-sebastien-lorber-articles', '380'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/authors/yangshun',
    component: ComponentCreator('/DocusaurusTest/blog/authors/yangshun', 'c43'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/first-blog-post',
    component: ComponentCreator('/DocusaurusTest/blog/first-blog-post', '554'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/long-blog-post',
    component: ComponentCreator('/DocusaurusTest/blog/long-blog-post', '4d7'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/mdx-blog-post',
    component: ComponentCreator('/DocusaurusTest/blog/mdx-blog-post', '319'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/tags',
    component: ComponentCreator('/DocusaurusTest/blog/tags', '61a'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/tags/docusaurus',
    component: ComponentCreator('/DocusaurusTest/blog/tags/docusaurus', '838'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/tags/facebook',
    component: ComponentCreator('/DocusaurusTest/blog/tags/facebook', '50a'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/tags/hello',
    component: ComponentCreator('/DocusaurusTest/blog/tags/hello', '29e'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/tags/hola',
    component: ComponentCreator('/DocusaurusTest/blog/tags/hola', '999'),
    exact: true
  },
  {
    path: '/DocusaurusTest/blog/welcome',
    component: ComponentCreator('/DocusaurusTest/blog/welcome', '767'),
    exact: true
  },
  {
    path: '/DocusaurusTest/markdown-page',
    component: ComponentCreator('/DocusaurusTest/markdown-page', '5dd'),
    exact: true
  },
  {
    path: '/DocusaurusTest/docs',
    component: ComponentCreator('/DocusaurusTest/docs', 'bc2'),
    routes: [
      {
        path: '/DocusaurusTest/docs',
        component: ComponentCreator('/DocusaurusTest/docs', 'f61'),
        routes: [
          {
            path: '/DocusaurusTest/docs',
            component: ComponentCreator('/DocusaurusTest/docs', 'e40'),
            routes: [
              {
                path: '/DocusaurusTest/docs/category/tutorial---basics',
                component: ComponentCreator('/DocusaurusTest/docs/category/tutorial---basics', 'c4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/category/tutorial---extras',
                component: ComponentCreator('/DocusaurusTest/docs/category/tutorial---extras', 'e7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/intro',
                component: ComponentCreator('/DocusaurusTest/docs/intro', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/congratulations', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-blog-post', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-document', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-page', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/deploy-your-site', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/markdown-features', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-extras/manage-docs-versions', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-extras/translate-your-site', 'a9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/DocusaurusTest/',
    component: ComponentCreator('/DocusaurusTest/', '20b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
