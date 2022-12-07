

const initialState = {
    dataBlog: [],
    name: "benk"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: "Skuy"
        }
    }
    return state

}

export default globalReducer