// action type
const CHECK_FOLLOW = 'CHECK_FOLLOW';
// const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CUR_PAGE = 'SET_CUR_PAGE'
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


// action creator
export const checkFollow = (userId,followed) => ({type: CHECK_FOLLOW, userId, followed});
// export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurPage = (currentPage) => ({type: SET_CUR_PAGE, currentPage});
export const setTotalCountPage = (count) => ({type: SET_TOTAL_COUNT_PAGE, count:count});
export const setIsFetching = (is_fetching) => ({type: SET_IS_FETCHING, is_fetching});
let  initialState= {
       users: [ 
        //    {
        //         id:1,
        //         fullName: 'Don',
        //         location: { country: 'Italy', city: 'Rym'},
        //         status: 'i am Don',
        //         followed: true
        //     }, 
        //     {
        //         id:2,
        //         fullName: 'Dima',
        //         country: 'Ukraine',
        //         city: 'Lvov',
        //         status: 'wonna coffe',
        //         followed: false
        //     }, 
        ],
        totalPages: 23,
        currentPage: 1,
        pageSize:3,
        isFetching: false,
}

const usersReducer = (state=initialState, action) => {
    // debugger
    switch(action.type){
       case CHECK_FOLLOW:
        return {
                ...state,
                // users: [...state.users],
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed:!action.followed}
                        // return {...u, followed:true}
                    }
                    return u;
                })
        }
        
        // case UNFOLLOW: 
        //     return {   
        //             ...state,
        //             users: state.users.map( u => {
        //                 if(u.id === action.userId){
        //                     return {...u, followed:false}
        //                 }
        //                 return u;
        //             })
        //     }

        case SET_USERS:
            return {
                ...state,
                // users: action.users // just replace
                // users: [...state.users, ...action.users] // add new users to []
                users: action.users
            }
        case SET_CUR_PAGE: 
        return {
            ...state,
            currentPage: action.currentPage
        }
        case SET_TOTAL_COUNT_PAGE:
            return {
                ...state,
                totalPages: action.count

            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.is_fetching
            }
            

   
        
        default: return state;
    }
}

export default usersReducer;

