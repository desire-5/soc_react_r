import { createSelector } from 'reselect'


 const getUsersSelect = (state) => {
    return state.usersPage.users
    // return state.usersPage.users.filter( u => true)
}
// often doing rerender
// export const getUserSuperSelector = (state) => {
//     return state.usersPage.users.filter( u => true)
// }

export const getUserSuperSelector = createSelector(getUsersSelect, users => {
    // debugger
    return users.filter( u => true)
}) 


export const getTotalPages = (state) => {
    return state.usersPage.totalPages
}
export const getcurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
