import axios from "axios";
const api =
  "https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/09c0e12a2b5325e71f36c08e7e29dc8eefbdb081/company-response.json";

const state = {
  company: {},
  companyLoaded: false,
  companyError: null,
};

const mutations = {
  setCompany(state, companyData) {
    state.company = companyData;
    state.companyLoaded = true;
  },
  setCompanyError(state, error) {
    state.companyError = error;
    state.companyLoaded = false;
  },
};

const actions = {
  async fetchCompanyData({ commit }) {
    try {
      const response = await axios.get(api);
      commit("setCompany", response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных о компании:", error);
      commit("setCompanyError", error.message);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
