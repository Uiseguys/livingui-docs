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
      src: '../node_modules/@livingui/cwc-form-generator/dist',
      dest: 'form-generator-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-inlineedit/dist',
      dest: 'inlineedit-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-inlineedit-textarea/dist',
      dest: 'inlineedit-textarea-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-textarea/dist',
      dest: 'textarea-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-dropdown/dist',
      dest: 'dropdown-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-select/dist',
      dest: 'select-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-datepicker/dist',
      dest: 'datepicker-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-autocomplete-select/dist',
      dest: 'autocomplete-select-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-input/dist',
      dest: 'input-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-video/dist',
      dest: 'video-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-moment/dist',
      dest: 'moment-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-dnd/dist',
      dest: 'dnd-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-resolution-info/dist',
      dest: 'resolution-info-integration'
    },
    {
      src: '../node_modules/@livingui/cwc-switch/dist',
      dest: 'switch-integration'
    }
  ],
  plugins: [sass()]
};
