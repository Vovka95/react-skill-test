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

                const itemName = item.name.toUpperCase();
                const searchValue = filterData.searchValue.toUpperCase();

                return itemName.includes(searchValue);
            });

        dispatch(filterBeersRequest(filteredBeersData));
    };
};

export default filterBeers;
