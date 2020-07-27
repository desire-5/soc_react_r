import { UsersType } from './../types/types';
import { usersAPI } from "../api/api";

// action type
const CHECK_FOLLOW = 'CHECK_FOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CUR_PAGE = 'SET_CUR_PAGE'
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

// action creator

type CheckFollowType = {
    type: typeof CHECK_FOLLOW
    userId: number
    followed: boolean
}
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
type SetCurPageType = {
    type: typeof SET_CUR_PAGE
    currentPage: number
}
type SetTotalCountPageType = {
    type: typeof SET_TOTAL_COUNT_PAGE
    count: number
}
type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING
    is_fetching: boolean
}
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    is_fetching: boolean
    userId: number
}
export const checkFollow = (userId: number, followed: boolean): CheckFollowType => ({ type: CHECK_FOLLOW, userId, followed });
export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users });
export const setCurPage = (currentPage: number): SetCurPageType => ({ type: SET_CUR_PAGE, currentPage });
export const setTotalCountPage = (count: number): SetTotalCountPageType => ({ type: SET_TOTAL_COUNT_PAGE, count: count });
export const setIsFetching = (is_fetching: boolean): SetIsFetchingType => ({ type: SET_IS_FETCHING, is_fetching });
export const toggleFollowingProgress = (is_fetching: boolean, userId: number): ToggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, is_fetching, userId });

let initialState = {
    users: [] as Array<UsersType>,
    totalPages: 23,
    currentPage: 1,
    pageSize: 3,
    isFetching: false,
    followingInProgress: [] as Array<number>, // [22,1,4] userid
    test: 0,
}
type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    // debugger
    switch (action.type) {
        case CHECK_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !action.followed }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users] // add new users to []
                users: action.users // just replace on new array
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

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.is_fetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case "TEST":
            return {
                ...state,
                test: state.test + 1
            }

        default: return state;
    }
}


// THUNK CREATOR
export const getUsers = (pageSize: number, currentPage: number) =>
    async (dispatch: any) => {
        dispatch(setIsFetching(true))
        let res = await usersAPI.getUsers(pageSize, currentPage)
        dispatch(setUsers(res.items)) // recive only data from usersAPI returned promise
        dispatch(setIsFetching(false))
        dispatch(setCurPage(currentPage))
        // this.props.setTotalCountPage(res.data.totalCount)
    }

//then
// export const getUsers=(pageSize,currentPage) => {
//     return (dispatch) =>  {
//          dispatch(setIsFetching(true))
//          usersAPI.getUsers(pageSize, currentPage)
//              .then(res => {
//              // debugger
//                  dispatch(setUsers(res.items)) // recive only data from usersAPI returned promise
//                  dispatch(setIsFetching(false))
//                  dispatch(setCurPage(currentPage))
//              // this.props.setTotalCountPage(res.data.totalCount)
//          })
//      }
//  }

export const checkFollowUnfollow = async (dispatch: any, id: any, followed: any, apiMethod: any) => {
    dispatch(toggleFollowingProgress(true, id))
    let res = await apiMethod(id)
    if (res.data.resultCode === 0) {
        dispatch(checkFollow(id, followed))
        dispatch(toggleFollowingProgress(false, id))
    }
}

export const follow = (id: number, followed: true) => {
    return async (dispatch: any) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        checkFollowUnfollow(dispatch, id, followed, apiMethod)
    }
}

export const unfollow = (id: number, followed: boolean) => {
    return async (dispatch: any) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI)
        dispatch(toggleFollowingProgress(true, id))

        checkFollowUnfollow(dispatch, id, followed, apiMethod)

    }
}
//  export const follow =(id, followed) => {
//     return async (dispatch) =>  {
//         dispatch(toggleFollowingProgress(true, id))
//         let res = await usersAPI.follow(id)
//         if(res.data.resultCode == 0){
//             dispatch(checkFollow(id, followed))
//             dispatch(toggleFollowingProgress(false, id))
//         }
//      }
//  }


//  export const unfollow =(id, followed) => {
//     return async (dispatch) =>  {
//         dispatch(toggleFollowingProgress(true, id))

//         let res = await usersAPI.unfollow(id)
//             if(res.data.resultCode == 0){
//                 dispatch(checkFollow(id, followed))
//                 dispatch(toggleFollowingProgress(false, id))
//             }
//      }
//  }
export default usersReducer;

