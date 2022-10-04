import {
    FETCH_BEERS_PENDING,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_ERROR,
    FILTER_BEERS_REQUEST,
} from "../types";

export const fetchBeersPending = () => {
    return {
        type: FETCH_BEERS_PENDING,
    };
};

export const fetchBeersSuccess = (beersData) => {
    return {
        type: FETCH_BEERS_SUCCESS,
        payload: beersData,
    };
};

export const fetchBeersError = (error) => {
    return {
        type: FETCH_BEERS_ERROR,
        payload: error,
    };
};

export const filterBeersRequest = (filteredBeersData) => {
    return {
        type: FILTER_BEERS_REQUEST,
        payload: filteredBeersData,
    };
};
