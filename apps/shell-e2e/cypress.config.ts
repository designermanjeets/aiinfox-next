import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run shell:start' },
      ciWebServerCommand: 'nx run shell:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
