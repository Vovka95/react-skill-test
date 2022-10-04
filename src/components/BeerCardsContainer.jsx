import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { beersSelectors } from "../store/beers";

import BeerCard from "../components/BeerCard";

const BeerCardsContainer = () => {
    const { filteredBeersData } = useSelector(beersSelectors.getBeersData);

    return (
        <div className="h-90-present overflow-auto card__container">
            {filteredBeersData.map(({ id, name, abv, image_url }) => (
                <Link key={id} to={`/beers/${id}`}>
                    <BeerCard src={image_url} title={name} abv={abv} />
                </Link>
            ))}
        </div>
    );
};

export default BeerCardsContainer;
