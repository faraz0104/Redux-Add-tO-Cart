const InitialState={
    carts:[]
};
 
export const proReducer=(state=InitialState,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
           
        const ObjIndex = state.carts.findIndex((itemss)=> itemss.id === action.payload.id);

        if( ObjIndex >= 0){
            state.carts[ObjIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const res = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, res]
            }
        }

            case "REMOVE_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }
            case "REMOVE_ONE":
                const IteamIndex_dec = state.carts.findIndex((itemss)=> itemss.id === action.payload.id);
       
                if(state.carts[IteamIndex_dec].qnty >= 1){
                    const deleteItem = state.carts[IteamIndex_dec].qnty -= 1
                    console.log([...state.carts,deleteItem]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }

           

            default:
                return state
    }

    

}