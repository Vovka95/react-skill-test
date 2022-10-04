import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import filterBeers from "../store/beers/filterBeers";
import { beersSelectors } from "../store/beers";

import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";

const DEFAULT_FILTER_DATA = {
    minValue: 0,
    maxValue: 30,
    searchValue: "",
};

const LOCAL_STORAGE_FILTER_KEY = "filterData";

const Filter = () => {
    const dispatch = useDispatch();
    const { beersData } = useSelector(beersSelectors.getBeersData);
    const [filterData, setFilterData] = useState(
        () =>
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY)) ??
            DEFAULT_FILTER_DATA
    );

    const handleABVRangeChanged = ({ min, max }) => {
        setFilterData((prevState) => {
            return {
                ...prevState,
                minValue: min,
                maxValue: max,
            };
        });
    };

    const handleSearchChanged = (value) => {
        setFilterData((prevState) => {
            return {
                ...prevState,
                searchValue: value,
            };
        });
    };

    useEffect(() => {
        dispatch(filterBeers(beersData, filterData));

        localStorage.setItem(
            LOCAL_STORAGE_FILTER_KEY,
            JSON.stringify(filterData)
        );
    }, [filterData, beersData]);

    return (
        <div className="h-10-present flex items-center p-2">
            <div className="flex items-center justify-around w-1/3">
                <div>ABV</div>
                <MultiRangeSlider
                    minValue={filterData.minValue}
                    maxValue={filterData.maxValue}
                    min={0}
                    max={30}
                    onChange={handleABVRangeChanged}
                />
            </div>
            <div className="flex items-center justify-around w-1/3">
                <input
                    className="p-2 bg-slate-300 rounded-lg focus:outline-none"
                    type="text"
                    placeholder="Search"
                    value={filterData.searchValue}
                    onChange={(e) => handleSearchChanged(e.target.value)}
                />
            </div>
        </div>
    );
};
export default Filter;
