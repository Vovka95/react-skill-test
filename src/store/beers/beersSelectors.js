import beersSlice from "./beersSlice";

export const getBeersData = (state) => {
    const beers = beersSlice(state);

    return beers;
};
