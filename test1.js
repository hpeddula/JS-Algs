import fetch, { Headers } from "node-fetch"
// import axios from axios;
// const baseURL = 'https://ktwjky3be.execute-api-us-east-1.amazonaws.com'
// function findAllCustomerData(baseURL){
//     return new Promise(function(resolve,reject){
//         axios.post('customers',{},{baseURL:baseURL})
//         .then(function(result){
//             var dataPromises = result.data.customerIds.map(function(customerId) {
//                 return axios.get("customers/"+customerId,{baseURL:baseURL})
//             })
//             Promise.all(dataPromises)
//             .then(function(res){
//                 resolve(res.map(function(result){
//                     return result.data
//                 }))
//             })
//             .catch(function(err) {
//                 reject(err)
//             })
//         }).catch(function(err){
//             console.log(err)
//             reject(err)
//         })
//     })
// }

// (function(){

// }) ()

// //refactored Function
// const getAllCustomerData = async() => {
//     try {
//         const customers  = await axios.post('customers',{},{baseURL:baseURL});
//         const dataPromises = await customers.data.customerIds.map(function(customerId) {
//             return axios.get("customers/"+customerId,{baseURL:baseURL})
//         })
//         const finalData = await Promise.all(dataPromises)
//     } catch (error) {

//     }
// }

const url = 'https://api.github.com/users'

const followers_url =  'https://api.github.com/users/mojodna/followers'

const getGitHubUsers = async () => {
    try {
        const users = await (await fetch(url, {
            headers: new Headers({
                "Authorization": "Bearer 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"
            })
        })).json()
        console.log(users)
        // const follweUrls = users.map(({ followers_url }) => fetch(followers_url))
        // const followeData = await Promise.all(follweUrls)
        // console.log('Follower Data',followeData)
    } catch (error) {
        console.log(error)
    }

}
getGitHubUsers()
// const getGitHubUserId = async() => {
//     try {
//         const users = await (await fetch(url)).json()
//         console.log(users)
//     } catch (error) {
//         console.log(error)
//     }
// }