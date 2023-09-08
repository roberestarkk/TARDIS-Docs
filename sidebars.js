/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  //  */
  docs: [
    'index',
    {
      type: 'doc',
      id: 'faqs',
      label: "FAQs"
    },
    {
      type: 'category',
      label: 'First Things First',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation-v5',
        'updating-to-unified-plugin',
        'creating-a-tardis',
        'companions',
        {
          type: 'category',
          label: "Artron Energy",
          link: {
            type: 'generated-index',
          },
          items: [
              'artron-energy',
            'condenser',
            'artron-cells',
            'condensables',
          ]
        },
        'enter-and-exit',
        'removing-a-tardis',
      ],
    },
    {
      type: 'category',
      label: 'Time Travelling',
      link: {
        type: 'generated-index',
      },
      items: [
        'time-travel',
        'advanced-console',
        'crafting-disks',
        'keyboard',
        'malfunction',
        'destination-terminal',
      ],
    },
    {
      type: 'category',
      label: "Customize Your TARDIS!",
      items: [
        'modifying-the-tardis-interior',
        'ars',
        'desktop-theme',
        {
          type: 'category',
          label: "Rooms",
          items: [
            'rooms',
            'room-gallery',
            'custom-rooms',
            'gravity-wells',
            'zero-room',
            'rail-room',
            'vault',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: "Manage Your TARDIS",
      link: {
        type: 'generated-index',
      },
      items: [
          'control-menu',
        'save-sign',
        'chameleon-circuit',
          'invisibility',
      ],
    },
    {
      type: 'category',
      label: 'Cool Stuff To Do & Use',
      link: {
        type: 'generated-index',
      },
      items: [
        'resource-packs',
        'lazarus',
        'sonic-screwdriver',
        'perception-filter',
        'junk-tardis',
        'food',
        'accessories',
        'scanner',
        'farming',
        'hads',
        'emergency-program-one',
        'autonomous',
        'translator',
        'achievements',
        'books',
        'schematics',
        'archive',
        'handles',
        {
          type: 'category',
          label: "Chemistry Lab",
          link: {
            type: "doc",
            id: "chemistry-lab/index"
          },
          items: [
              'chemistry-lab/products',
            'chemistry-lab/compounds',
            'chemistry-lab/elements',
            'chemistry-lab/material-reductions',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: "Commands",
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'commands',
        },
      ]
    },
    {
      type: 'category',
      label: "Plugin Modules",
      link: {
        type: "generated-index"
      },
      items: [
          'modules',
        'modules/generators',
        'modules/weeping-angels',
        'modules/vortex-manipulator',
        'modules/dynmap-tardis',
        'modules/tardis-shop',
        'modules/sonic-blaster'
      ]
    },
    {
      type: 'category',
      label: 'Admin Stuff',
      link: {
        type: 'generated-index',
      },
      items: [
        'localisation',
        'tips',
        'permissions',
        'kits',
        'recipes',
        'add-permissions',
        'tardis-areas',
        'rooms-and-economies',
        'time-vortex',
        'api',
      ],
    },
    {
      type: 'category',
      label: "Plugin Configuration",
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'configuration',
        }
      ]
    }
  ],
};

module.exports = sidebars;
