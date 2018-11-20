import {plainToClass, Type} from "class-transformer";
import 'reflect-metadata'
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
  "Matlab": "http://www.tmsi.com/media/zoo/images/matlab_bbfdbefb7fc6396bda511da334a95fd6.png",
  "Jupyter Notebook": "https://tommru.com/wp-content/uploads/2018/01/7388996-1.png",
  "Batchfile": "http://cdn-ak.f.st-hatena.com/images/fotolife/o/orangeclover/20110127/20110127223928.png",
  "Haskell": "https://cdn.svgporn.com/logos/haskell.svg",
  "Makefile": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Heckert_GNU_white.svg/200px-Heckert_GNU_white.svg.png",
  "Frege": "https://github.com/Frege/frege/raw/master/resources/Frege_logo.png",
  "TeX": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TeX_logo.svg/1028px-TeX_logo.svg.png",
  "Elixir": "https://cdn-ak.f.st-hatena.com/images/fotolife/m/muziyoshiz/20161122/20161122004038.png",
  "Lua": "https://cdn.svgporn.com/logos/lua.svg",
  "CSS": "https://cdn.svgporn.com/logos/css-3.svg",
  "Julia": "https://pbs.twimg.com/profile_images/3331406046/647b7cf75cb5662b96901bc521968e94_400x400.png",
  "CoffeeScript": "https://cdn.svgporn.com/logos/coffeescript.svg",
  "Objective-C": "https://raw.githubusercontent.com/github/explore/41a2f55bebabb0c5cd5babcbfb4f8a8487f9e39b/topics/objective-c/objective-c.png",
  "Swift": "https://cdn.svgporn.com/logos/swift.svg",
  "Nim": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNwVzfc5cDp1_U3tm1h1ZMboAim1Ts37d9cqCcbyBAfAevCcQNg",
  "Nimrod": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNwVzfc5cDp1_U3tm1h1ZMboAim1Ts37d9cqCcbyBAfAevCcQNg",
  "Visual Basic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SNQbmAAmkpxONVhOSbjS1Tji4-4zicjhZDAAQ2OPecfGR7INog",
  "PowerShell": "https://gitlab.com/harbottle/powershell-wix/avatar",
  "NSIS": "https://www.softexia.com/wp-content/uploads/2016/07/NSIS_logo.jpg",
  "Emacs Lisp": "http://spacemacs.org/layers/+lang/emacs-lisp/img/emacs-lisp.png",
  "Clojure": "https://cdn.svgporn.com/logos/clojure.svg",
  "AutoHotkey": "https://pbs.twimg.com/profile_images/1401832717/ahk_400x400.png",
  "Groovy": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/614px-Groovy-logo.svg.png",
  "Arduino": "https://cdn.svgporn.com/logos/arduino.svg",
  "Crystal": "https://cdn.svgporn.com/logos/crystal.svg",
  "Haxe": "https://cdn.svgporn.com/logos/haxe.svg",
  "Elm": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/120px-Elm_logo.svg.png",
  "Vue": "https://cdn.svgporn.com/logos/vue.svg",
  "OCaml": "https://ucarecdn.com/818e173e-4d3f-4aae-ad26-70a8d4b00ddd/",
  "R": "https://cdn.svgporn.com/logos/r-lang.svg",
  "MoonScript": "https://camo.githubusercontent.com/4af51706dd39969c7bb6573906b940b85d0e94fd/687474703a2f2f6c6561666f2e6e65742f64756d702f7361696c6f726d6f6f6e7363726970742e706e67",
  "D": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/124px-D_Programming_Language_logo.svg.png",
  "Dart": "https://cdn.svgporn.com/logos/dart.svg",
  "Erlang": "https://cdn.svgporn.com/logos/erlang.svg",
  "unknown": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oXV8iFyw89aTGZuBiyJjzuuZvFm1cFoHWFY57c1aqSqohOEPuA",
};

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
  created_at: string;
  updated_at: string;
  license: {
    spdx_id: string;
  };
  stargazers_count: number;

  get created_date(): string {
    return this.created_at.split('T')[0];
  }

  get updated_date(): string {
    return this.updated_at.split('T')[0];
  }

  get languageIconUrl(): string | undefined {
    return ICON_URLS_BY_LANGUAGE[this.language || "unknown"];
  }

  get licenseName(): string {
    return this.license && this.license.spdx_id ? this.license.spdx_id : 'Unknown';
  }
}

export class Response {
  total_count: number;

  @Type(() => Repository)
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
