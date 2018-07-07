export const state = () => ({
    repositories: []
});

export const mutations = {
    setRepositories(state, repositories) {
        state.repositories = repositories
    }
};

export const actions = {
    // async nuxtServerInit({ commit }, { app }) {
    async nuxtClientInit ({ commit }, { app }) {
        const URL = "https://api.github.com/search/repositories?q=miroir&sort=stars&order=asc";
        const repositories = (await app.$axios.$get(URL)).items;
        console.log(repositories)
        commit("setRepositories", repositories);
    }
};
