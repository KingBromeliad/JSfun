const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
var socket = io('http://socketserver.com:1923');


// Vue use modules
Vue.use(VueSocketIOExt, socket);

/****************************** 
            ROUTES
 ******************************/
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

// Router
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

/****************************** 
             COMPONENTS
 ******************************/

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

const app = new Vue({
    router
  }).$mount('#app')