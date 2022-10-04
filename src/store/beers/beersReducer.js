import {
    FETCH_BEERS_PENDING,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_ERROR,
    FILTER_BEERS_REQUEST,
} from "../types";

const initialState = {
    loading: false,
    beersData: [],
    filteredBeersData: [],
    error: null,
};

const beersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEERS_PENDING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BEERS_SUCCESS:
            return {
                ...state,
                loading: false,
                beersData: action.payload,
            };
        case FETCH_BEERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FILTER_BEERS_REQUEST:
            return {
                ...state,
                loading: false,
                filteredBeersData: action.payload,
            };
        default:
            return state;
    }
};

export default beersReducer;
