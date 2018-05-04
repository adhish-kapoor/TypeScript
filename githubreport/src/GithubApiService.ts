import request from 'async-request';
import { User } from './User';
import { Repo } from './Repo';

const options:any={
    headers:{
        'User-Agent':'request'
    },
    //json:true
}
export class GithubApiService{
    async getUserInfo(userName:string){

        let response=await request('https://api.github.com/users/'+userName,options) //request is a function now
         //console.log(response)
        //console.log(typeof(response))
       let user=new User(JSON.parse(response.body));//converting string into JS object
      
       return(user);
       
    }
    
     async getRepos(userName:string){
        let response=await request('https://api.github.com/users/'+userName+'/repos',options)

        let repoinfo=JSON.parse(response.body).map((repo:any)=>new Repo(repo))
        return repoinfo;
     }


}