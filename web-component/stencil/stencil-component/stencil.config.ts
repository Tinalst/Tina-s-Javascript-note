import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'tinalsthearder',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
