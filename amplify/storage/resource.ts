import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifyTeamDrive',
    access: (allow) => ({
      'images/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'all-images/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    })
  });