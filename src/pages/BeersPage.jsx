import { useSelector } from "react-redux";
import { beersSelectors } from "../store/beers";

import Filter from "../components/Filter";
import BeerCardsContainer from "../components/BeerCardsContainer";

const BeersPage = () => {
    const { loading } = useSelector(beersSelectors.getBeersData);

    return (
        <div className="p-3 h-full">
            {loading ? (
                <div>LOADING...</div>
            ) : (
                <div className="h-full">
                    <Filter />
                    <BeerCardsContainer />
                </div>
            )}
        </div>
    );
};

export default BeersPage;
