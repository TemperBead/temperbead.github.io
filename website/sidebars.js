module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'Tweets',
    },
    {
      type: 'category',
      label: 'Apps',
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'Apps' }],
    },
    {
      type: 'category',
      label: 'Whitepapers',
      collapsed: false,
      items: [
        'wp_dreamcatcher',
        'wp_dos',
        'wp_interblock',
        'wp_inversion',
        'wp_appstore',
      ],
    },
    // Features: ['mdx'],
    {
      type: 'doc',
      id: 'Dictionary_Conventions',
    },
    {
      type: 'category',
      label: 'User Dictionary',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'User_Dictionary',
        },
      ],
    },
    {
      type: 'category',
      label: 'Architecture Dictionary',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Architecture_Dictionary',
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'References',
        },
      ],
    },
    {
      type: 'category',
      label: 'DRAFTS',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'DRAFTS',
        },
      ],
    },
  ],
}
