import { useSelector } from "react-redux";
import { beersSelectors } from "../store/beers";

import BeerCard from "../components/BeerCard";

const BeersPage = () => {
    const { beersData, loading } = useSelector(beersSelectors.getBeersData);

    return (
        <div className="p-3 h-full">
            {loading ? (
                <div>LOADING...</div>
            ) : (
                <>
                    <div className="h-full overflow-auto card__container">
                        {beersData.map(({ id, name, abv, image_url }) => (
                            <BeerCard
                                key={id}
                                src={image_url}
                                title={name}
                                abv={abv}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BeersPage;
