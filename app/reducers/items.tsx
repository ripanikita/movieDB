let initialState = {items:[], isLoading:false};

export function items(state = initialState, action) {
    switch (action.type) {

        case "ITEMS_IS_LOADING":
            return {...state, ...{isLoading:action.isLoading}};

        case "ITEMS_FETCH_DATA_SUCCESS":
            return {...state, ...{items:action.items}};

        default:
            return state;
    }
}