export const graphReducer = (state = {}, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "GRAPH_CHANGED":
            newState.data = action.payload;
            return newState;
        default:
            return newState;
    }
};