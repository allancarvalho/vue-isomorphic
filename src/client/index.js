import {app} from '../app';

app.$router.getMatchedComponents().map(component => component.fetch.call(app.$store, app.$store));

app.$mount('#app')