const inputReducer = (state = '', action) => {


    switch (action.type){
        case 'INPUT_VALUE': {
            return action.payload;
            break;
        }
        default: {
            return state;
        }
    }
}

module.exports = inputReducer;