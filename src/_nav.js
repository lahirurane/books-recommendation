export default {
  items: [
    {
      name: 'Home',
      url: '/',
      icon: 'icon-home'
    },
    {
      name: 'Books',
      url: '/books',
      icon: 'icon-notebook'
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user',
      children: [
        {
          name: 'My Page',
          url: '/user/user-home',
          icon: 'icon-puzzle'
        },
        {
          name: 'Purchases',
          url: '/user/purchases',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
};
