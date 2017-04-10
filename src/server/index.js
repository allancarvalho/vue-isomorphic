import {app} from '../app';

export default (ctx) => {
  app.$router.push(ctx.url);
  return Promise.resolve(app);
};
