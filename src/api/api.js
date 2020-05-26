import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"3ded3cb2-444b-4bcb-b115-dae85c5ca5ff"
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
       return instance.get(`profile/${user_id}`)
    },
}

export const authAPI = {
    me(){
        return  instance.get(`auth/me`)
    }
}

// nstance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`