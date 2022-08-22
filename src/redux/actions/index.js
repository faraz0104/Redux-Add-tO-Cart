export const ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}


export const DELETE = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}



export const REMOVE = (itemss) => {
    return {
        type: "REMOVE_ONE",
        payload: itemss
    }
}