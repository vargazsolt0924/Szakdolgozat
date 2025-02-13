const expectedUrls = {
  Main: 'https://wearecommunity.io/',
  Login:
    'https://access.epam.com/auth/realms/plusx/protocol/openid-connect/auth?client_id=oauth-client.epm-evnt.community-z.prod&response_type=code&redirect_uri=https://wearecommunity.io/sso-callback&scope=openid+profile+email',
  Logout: 'https://access.epam.com/auth/realms/plusx/protocol/openid-connect/logout?redirect_uri=https://wearecommunity.io/',
  Communities: 'https://wearecommunity.io/communities',
  Events: 'https://wearecommunity.io/events',
  'Idea Pool': 'https://wearecommunity.io/communities/idea-pool',
  Speakers: 'https://wearecommunity.io/speakers',
  profile: 'https://wearecommunity.io/users/laszlo-szikszai',
  'GitHub profile': 'https://wearecommunity.io/users/laszlo-szikszai',
};

module.exports = expectedUrls;
