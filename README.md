# Vue Vuex - State Management

- [Vue Vuex - State Management](#vue-vuex---state-management)
  - [Deployment](#deployment)
  - [Description](#description)
  - [Instalaltion](#instalaltion)
  - [Modules of Vuex](#modules-of-vuex)
    - [Store](#store)

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
