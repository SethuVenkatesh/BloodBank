const initialState={
    user:null
}
export const userReducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "USER_LOG_IN":
            console.log(action.type)
            return { 
                ...state,
                user:action.payload
            }
        case  "USER_LOG_OUT":
            return {
                ...state,
                user:""
            }
        default:return state
    }
}