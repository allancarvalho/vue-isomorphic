import {app, router, store} from '../app';

export default (ctx) => {
  router.push(ctx.url);
  const components = router.getMatchedComponents();
  if (!components.length) {
    return Promise.reject({ code: '404' })
  }
  const arrPromises = components.map(component => component.fetch.call(store, store));
  return Promise.all(arrPromises)
    .then((data) => {
      ctx.initialState = store.state
      return app;
  });
};
