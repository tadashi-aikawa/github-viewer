import {plainToClass} from "class-transformer";
import axios from "axios";

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
  license: {
    spdx_id: string;
  };
  stargazers_count: number;

  get languageIconUrl(): string | undefined {
    return ICON_URLS_BY_LANGUAGE[this.language];
  }

  get licenseName(): string {
    return this.license && this.license.spdx_id ? this.license.spdx_id : 'Unknown';
  }
}

export class Response {
  total_count: number;
  items: Repository[];
}

export const state = () => ({
  total: 0,
  repositories: [],
  searchingRepositories: false
});

export const mutations = {
  setTotal(state, total) {
    state.total = total;
  },
  setRepositories(state, repositories) {
    state.repositories = repositories
  },
  startSearchRepositories(state) {
    state.searchingRepositories = true;
  },
  endSearchRepositories(state) {
    state.searchingRepositories = false;
  }
};

export const actions = {
  async nuxtClientInit({ commit }, { app }) {
    // Write if you want to do something when application started
  },

  async searchRepositories({commit}, word) {
    commit("startSearchRepositories");
    const URL = `https://api.github.com/search/repositories?q=${word}&sort=stars&order=desc`;
    const res: Object  = (await axios.get(URL)).data;
    const response: Response = plainToClass(Response, res);
    commit("setTotal", response.total_count);
    commit("setRepositories", response.items);
    commit("endSearchRepositories");
  }
};
