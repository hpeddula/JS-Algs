const inititalState = {
    matchingEntries : []
}

//redux tool kit
const appReducer = createReducer({
    updateEntries :(state,action) => {
        state.updateEntries = [action.payload]
    }
})
//context -version
// const appReducer = (state,action) => {
//     const {type,payload} = action
//     switch (key) {
//         case 'updateEntries':
//         return {...state,matchingEntries:[...payload]}
//         default:
//             break;
//     }
// }
// export const {
//     updateEntries
// }
//Selector functions

const getMatchingEntries = (state) => {
    return state.autoComplete.matchingEntries
}
 {
     autoComplete: {
         matchingEntries:[]
     }
 }
const compA = ()  => {

    const {matchingEntries} = useSelector()
    return  (
        <>Component A</>
    )
}
const compZ = ()  => {
    const {matchingEntries} = useSelector()
    return  (
        <>Component Z</>
    )
}