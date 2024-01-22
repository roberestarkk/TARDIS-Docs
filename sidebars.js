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
    {
      type: 'html',
      value: '<a href="/"><span id="sidebar-tardis"></span></a>',
      defaultStyle: true,
    },
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
        'randomiser-circuit',
        'flight-modes',
        'flying',
        'throttle',
      ],
    },
    {
      type: 'category',
      label: "Customize Your TARDIS!",
      items: [
        'modifying-the-tardis-interior',
        'ars',
        'desktop-theme',
        'interiors',
        'walls',
        {
          type: 'category',
          label: "Rooms",
          items: [
            'rooms',
            'rooms/gallery',
            'rooms/custom',
            'rooms/garden',
            'rooms/gravity-wells',
            'rooms/rail',
            'rooms/smelter',
            'rooms/vault',
            'rooms/zero',
          ]
        },
        {
            type: 'category',
            label: 'Chamemelon Circuit',
            items: [
        'chameleon-circuit',
                'presets',
                'rooms/shell',
                'chameleon-construction',
                'custom-preset',
                'custom-model-presets',
                'adaptive-presets'
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
        'telepathic-circuit',
        'temporal-locator',
        'monitor',
        'circuit-use',
        'writing-disks',
        'bedrock'
      ],
    },
    {
      type: 'category',
      label: 'Cool Stuff To Do & Use',
      link: {
        type: 'generated-index',
      },
      items: [
        'tardis-items',
        'resource-packs',
        'lazarus',
        {
            type: 'category',
            label: 'Sonic Screwdriver',
            items: [
                'sonic-screwdriver',
                'sonic-configurator',
                'sonic-generator',
                'sonic-dock',
            ]
        },
        'time-rotor',
        'perception-filter',
        'chameleon-arch',
        'siege-mode',
        'junk-tardis',
        'food',
        'accessories',
        'scanner',
        'farming',
        'hads',
        'abandon',
        'emergency-program-one',
        'autonomous',
        'remote-key',
        'translator',
        'achievements',
        'books',
        'schematics',
        'archive',
        'handles',
        'display',
        'map',
        'transmat',
        'rift-manipulator',
        'backdoors',
        'artron-furnace',
        'view-interior',
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
        {
          type: 'autogenerated',
          dirName: 'modules',
        }
      ]
    },
    {
      type: 'category',
      label: 'Admin Stuff',
      link: {
        type: 'generated-index',
      },
      items: [
        'bug-reports',
        'planets',
        'world-management',
        'custom-consoles',
        'item_displays',
        'localisation',
        'placeholders',
        'tips',
        'permissions',
        'permissions-table',
        'kits',
        'recipes',
        'add-permissions',
        'tardis-areas',
        'rooms-and-economies',
        'time-vortex',
        'wiki-sign',
        'prune',
        'api',
        'update-blocks',
        'build-tools',
        'sqlite-mysql-tool',
        'change-log'
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
