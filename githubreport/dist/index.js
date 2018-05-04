"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var service = new GithubApiService_1.GithubApiService();
service.getUserInfo('adhish-kapoor')
    .then(function (user) { return console.log(user); });
service.getRepos('adhish-kapoor')
    .then(function (repos) { return console.log(repos); });
