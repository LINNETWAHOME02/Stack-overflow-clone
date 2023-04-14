const authReducer = (state={ data:null }, action) => {    //state={} means that the prop state is equal to any data
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))//using ? means if data exists then execute, if not throw an error
            return {...state, data: action?.data}; //returning store for state along with its the data
        case 'LOGOUT':
            localStorage.clear();
            return {...state, data: null}
        default:
            return state;
    }
}

export default authReducer