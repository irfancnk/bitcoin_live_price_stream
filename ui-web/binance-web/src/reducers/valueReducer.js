export const valueReducer = (state = {}, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "VALUE_CHANGED":
            newState.btcValue = action.payload;
            return newState;
        default:
            return newState;
    }
};