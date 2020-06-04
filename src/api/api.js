import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"9680d2da-e6e5-43f8-9e5f-859516593ef6"
    }
})
export const usersAPI = {
    // page users
    getUsers(pageSize=3,curPage=1) {
        return instance.get(`users?count=${pageSize}&page=${curPage}`) // return promise
            .then(res => {
                return res.data;
            })
    },
    follow(userId) {
        // debugger
        return instance.post(`follow/${userId}`)    
    },
    unfollow(userId){
        // debugger
        return instance.delete(`follow/${userId}`)
    },
    // Profile
    getProfile(user_id){
    //    return instance.get(`profile/${user_id}`)
    return profileAPI.getProfile(user_id); // use ather method
    },
}

export const profileAPI = {
    getProfile(user_id){
        return instance.get(`profile/${user_id}`)
     },
     getUserStatus(user_id){
        return instance.get(`profile/status/${user_id}`)
     },
     updateStatus(status){
         return instance.put(`profile/status`,{status:status})
     }
}
export const authAPI = {
    me(){
        return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe});
       
    },
    logout(){
        return instance.delete(`auth/login`);
       
    }

}

// nstance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`