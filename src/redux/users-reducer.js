const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"

let initialState = {
    users: [
        {id: 1, photoUrl:"http://drasler.ru/wp-content/uploads/2018/09/orig-2.jpg",
            fullName: 'Aliqa Macale', email: "support@gmail.com", followed:true, location:{city:"Ivano-Frankivsk", country:"Ukraine"}},
        {id: 2, photoUrl:"http://drasler.ru/wp-content/uploads/2018/09/orig-2.jpg",
            fullName: 'Taras Macale', email: "support@gmail.com", followed:false, location:{city:"Chernivtsi", country:"Ukraine"}},
        {id: 3, photoUrl:"http://drasler.ru/wp-content/uploads/2018/09/orig-2.jpg",
            fullName: 'Vasyl Macale', email: "support@gmail.com", followed:true, location:{city:"Ivano-Frankivsk", country:"Ukraine"}},
    ],
}
const usersReducer = (state = initialState,action) =>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return{...u, followed:true}
                    }
                })
            }
        default:
            return state;
    }

}
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})

export default usersReducer;