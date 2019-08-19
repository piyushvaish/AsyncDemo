// Single Waitor in a Restaturant
console.log('Before');
getuser(1,(user)=>{
    console.log('User',user);
    getRepositories(user.gitHubUserName,(repos)=>{
        console.log(repos);
    })
});

console.log('After');

// Callbacks
// Promises
// Async/await

function getuser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from Database...');
        callback({id:id, gitHubUserName:'Piyush'});
    },2000);
    
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Reading a user from Database...');
        callback(['repo1','repo2','repo3']);
    },2000);
}