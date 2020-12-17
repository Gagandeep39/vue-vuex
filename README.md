# Vue Vuex - State Management

- [Vue Vuex - State Management](#vue-vuex---state-management)
  - [Deployment](#deployment)
  - [Description](#description)
  - [Instalaltion](#instalaltion)
  - [Modules of Vuex](#modules-of-vuex)
    - [Store](#store)
  - [Mutation](#mutation)
  - [Mutation with Params](#mutation-with-params)
  - [Getters](#getters)

## Deployment

- Checkout deployment at <https://gagandeep39.github.io/vue-vuex/>

## Description

- Global Statement tool
- Similar to Redux and Ngrx
- Provides a centralized state management (Global Data management)
  - Global State - Application level data
  - Local state - Component level data
- Need
  - Managing appwide data can be difficult
  - Requires lots of coding
  - Unpredicatable behavior
  - Difficult to know when state has changed
  - Difficut to respond to state changes

## Instalaltion

- `yarn add vuex`, `npm install --save vuex`

## Modules of Vuex

### Store

- Centralized location where all data is stored
- Creating a store
- **NOTE** Below snippet is not a correct implementation

```js
import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
});
createApp(App)
  .use(store)
  .mount('#app');
```

- Accessing store data

```html
<h3>{{ $store.state.counter }}</h3>
```

```js
methods: {
    increment() {
      this.$store.state.counter++;
    },
  }
```

## Mutation

- Centralized bussiness logic for state manipuation
- Having multiple logic at different places is difficult to manage
- Large code is more prone to error
- We must **NEVER** update state drectly from component (**Always** use mutation)
- To fix this we use mutation

```js
// Creating mutation
// ...
const store = createStore({
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
  },
});
// ...
```

```js
// accessing mutation
this.$store.commit('increment');
```

## Mutation with Params

- To perform certain operation, we require parameter
- We can pass parameter to muation methods as payload

```js
// Mutation methd
mutations: {
    incrementBy(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
```

```js
// Calling the method
this.$store.commit('incrementBy', { value: 10 });
// OR
this.$store.commit({
  type: 'incrementBy',
  value: 10,
});
```

## Getters

- Allows us to fetch store data
- Used to specify formatting logic

```js
// Implementation
const store = createStore({
  state() {
    return {
      // ..
    };
  },
  mutations: {
    // ..
  },
  getters: {
    finalValue(state, getter) {
      // getter - Provides value of other getter
      // state - Values of state
      return state.counter;
    },
  },
});
```

```js
// Accessing a getter
this.$store.getters.finalValue;
```
