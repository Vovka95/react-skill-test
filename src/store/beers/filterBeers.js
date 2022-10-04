import { filterBeersRequest } from "./beersActions";

const filterBeers = (beersData, filterData) => {
    return (dispatch) => {
        const filteredBeersData = beersData
            .filter((item) => {
                return (
                    item.abv >= filterData.minValue &&
                    item.abv <= filterData.maxValue
                );
            })
            .filter((item) => {
                if (filterData.searchValue === "") return true;

                return item.name.includes(filterData.searchValue);
            });

        dispatch(filterBeersRequest(filteredBeersData));
    };
};

export default filterBeers;
