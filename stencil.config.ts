import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'ui-lib',
  enableCache: false,
  // generateDistribution: true,
  // serviceWorker: true,
  outputTargets: [
    { type: 'www' },
    { type: 'dist' },
    // {
    //   type: 'dist',
    //   dir: '../path-to-copy-distributive'
    // }
  ],
  copy: [
    {
      src: 'lib'
    },
    // {
    //   src: '../node_modules/@livingui/cwc-tag/dist',
    //   dest: 'tag-integration'
    // },
    // {
    //   src: '../node_modules/@livingui/cwc-popper/dist',
    //   dest: 'popper-integration'
    // },
    {
      src: '../node_modules/@livingui/cwc-autocomplete-select/dist',
      dest: 'autocomplete-select-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-input/dist',
      dest: 'input-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-textarea/dist',
      dest: 'textarea-integration'
    }
  ],
  plugins: [sass()]
};
