import {
    FETCH_BEERS_PENDING,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_ERROR,
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
