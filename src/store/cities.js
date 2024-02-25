import axios from "axios";
const api =
  "https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/7bc28b7ede222e25fe44fec52ad1e74a03168501/cities-response.json";

const state = {
  cities: [],
  cityDialog: false,
  citiesLoaded: false,
  citiesError: null,
  selectedCity: {
    name: "Almaty",
    code: "750000000",
  },
};

const mutations = {
  setCities(state, citiesData) {
    state.cities = citiesData;
    state.citiesLoaded = true;
  },
  setCitiesError(state, error) {
    state.citiesLoaded = false;
    state.citiesError = error;
  },
  setSelectedCity(state, code) {
    const city = state.cities.cities.find((item) => item.code === code);
    if (city) {
      state.selectedCity = city;
    }
    state.cityDialog = false;
  },
  setCityDialog(state, isVisible) {
    state.cityDialog = isVisible;
  },
};

const actions = {
  async fetchCities({ commit }) {
    try {
      const response = await axios.get(api);
      commit("setCities", response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
      commit("setCitiesError", error.message);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
