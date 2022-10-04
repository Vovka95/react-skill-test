import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { beersSelectors } from "../store/beers";
import { useState } from "react";
import BeerDetail from "../components/BeerDetail";

const BeerDetailsPage = () => {
    const { id } = useParams();
    const { beersData, loading } = useSelector(beersSelectors.getBeersData);
    const [selectedBeerData, setSelectedBeerData] = useState(null);

    useEffect(() => {
        if (!loading) {
            const selectedBeerData = beersData.find(
                (item) => item.id === parseInt(id)
            );

            setSelectedBeerData(selectedBeerData);
        }
    }, [beersData]);

    return (
        <div className="w-full h-full flex p-4">
            {selectedBeerData ? (
                <BeerDetail info={selectedBeerData} />
            ) : (
                <div>Bad gateway</div>
            )}
        </div>
    );
};

export default BeerDetailsPage;
