
const initialState={
    organisation:null
}
export const organisationReducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "ORGANISATION_LOG_IN":
            console.log(action.type)
            return { 
                ...state,
                organisation:action.payload
            }
        case  "ORGANISATION_LOG_OUT":
            return {
                ...state,
                organisation:""
            }
        default:return state
    }
}