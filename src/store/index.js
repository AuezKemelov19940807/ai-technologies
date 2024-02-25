import { createStore } from "vuex";
import citiesModule from "./cities.js";
import companyModule from "./company.js";

const store = createStore({
  modules: {
    cities: citiesModule,
    company: companyModule,
  },
});

export default store;
