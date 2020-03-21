import { ROUTE } from '../../data/dummy-data';
import { TOGGLE_DATE } from '../actions/route';

const initialState = {
    dateTime: new Date(),
    routes: ROUTE,
    filteredRoutes: ROUTE,
    savedRoutes: []
};

const routeReducer = (state = initialState, action)=> {
    switch (action.type) {
        case TOGGLE_DATE:
            return ({...state, date: action.date});
        default:
            return state;
    };
    return state;
};

export default routeReducer;