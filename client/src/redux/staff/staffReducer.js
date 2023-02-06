const initialState={
    staff:null,
}
export const staffReducer=(state=initialState,action)=>{
    switch(action.type){
        case "STAFF_LOG_IN":
            return {
                ...state,
                staff:action.payload
            }
        case  "STAFF_LOG_OUT":
            return {
                ...state,
                staff:""
            }
        default :return state
    }
}