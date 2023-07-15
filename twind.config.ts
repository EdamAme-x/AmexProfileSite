import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
      }
    }
  },
  variants: {},
  plugins: [
   
  ]
} as Options;
