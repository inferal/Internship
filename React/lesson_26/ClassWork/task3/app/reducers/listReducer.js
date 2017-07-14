const listReducer = (state = true, action) => {


    switch (action.type){
        case 'SHOW_LIST': {
            return state = action.payload;
            break;
        }
        default: {
            return state;
        }
    }
};

module.exports = listReducer;