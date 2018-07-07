import {plainToClass} from "class-transformer";

const ICON_URLS_BY_LANGUAGE = {
  "JavaScript": "https://cdn.svgporn.com/logos/javascript.svg",
  "HTML": "https://cdn.svgporn.com/logos/html-5.svg",
  "C#": "https://coconala.akamaized.net/coconala-public-files/service_images/original/f1dcf744-413067.png",
  "PHP": "https://cdn.svgporn.com/logos/php.svg",
  "Python": "https://cdn.svgporn.com/logos/python.svg",
  "TypeScript": "https://cdn.svgporn.com/logos/typescript-icon.svg",
  "Shell": "https://cdn.svgporn.com/logos/bash.svg",
  "Java": "https://cdn.svgporn.com/logos/java.svg",
  "Ruby": "https://cdn.svgporn.com/logos/ruby.svg",
  "C": "https://cdn.svgporn.com/logos/c.svg",
  "Go": "https://cdn.svgporn.com/logos/gopher.svg",
  "Kotlin": "https://cdn.svgporn.com/logos/kotlin.svg",
  "Perl": "https://cdn.svgporn.com/logos/perl.svg",
  "Vim script": "https://cdn.svgporn.com/logos/vim.svg",
  "C++": "https://cdn.svgporn.com/logos/c%2B%2B.svg",
  "Scala": "https://cdn.svgporn.com/logos/scala.svg",
  "Rust": "https://cdn.svgporn.com/logos/rust.svg",
  "Nim": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNwVzfc5cDp1_U3tm1h1ZMboAim1Ts37d9cqCcbyBAfAevCcQNg",
}

export interface Owner {
  id: number;
  login: string;
  avatar_url: string;
}

export class Repository {
  id: number;
  owner: Owner;
  language: string;
  description: string;
  stargazers_count: number;

  get languageIconUrl(): string | undefined {
    return ICON_URLS_BY_LANGUAGE[this.language];
  }
}

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
  async nuxtClientInit({ commit }, { app }) {
    const URL = "https://api.github.com/search/repositories?q=git&sort=stars&order=desc";
    const repositories = (await app.$axios.$get(URL)).items.map(x => plainToClass(Repository, x));
    commit("setRepositories", repositories);
  }
};
