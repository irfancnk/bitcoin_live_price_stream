export const graphReducer = (state = {}, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    return newState;
};