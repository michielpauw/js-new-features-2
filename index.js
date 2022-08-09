import { Temporal } from '@js-temporal/polyfill';

console.log(
  `It's ${Temporal.Now.plainTimeISO().round('second')}. Time to start coding!`
);
