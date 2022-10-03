import axios from "axios";

import {
    fetchBeersPending,
    fetchBeersSuccess,
    fetchBeersError,
} from "./beersActions";

const API_URL = "https://api.punkapi.com/v2/beers";

const fetchBeers = () => {
    return (dispatch) => {
        dispatch(fetchBeersPending());

        axios
            .get(API_URL)
            .then((res) => {
                dispatch(fetchBeersSuccess(res.data));
            })
            .catch((error) => {
                dispatch(fetchBeersError(error));
            });
    };
};

export default fetchBeers;
