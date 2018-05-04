import {GithubApiService} from './GithubApiService';
import {User} from './User'
import { Repo } from './Repo';

let service=new GithubApiService();
service.getUserInfo('adhish-kapoor')
.then((user:User)=>console.log(user))

service.getRepos('adhish-kapoor')
.then((repos:Repo[])=>console.log(repos))