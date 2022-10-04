const BeerDetail = ({ info }) => {
    const { name, description, image_url, abv, ibu } = info;

    return (
        <div className="w-full h-full flex">
            <div className="w-1/4">
                <div className="w-full flex justify-center p-3">
                    <img src={image_url} alt="card" className="h-52 w-auto" />
                </div>
                <div className="w-full flex p-2">
                    <div className="tag bg-red-500 p-1 w-auto m-1">
                        <p>ABV: {abv}</p>
                    </div>
                    <div className="tag bg-amber-400 p-1 w-auto m-1">
                        <p>IBU: {ibu}</p>
                    </div>
                </div>
            </div>
            <div className="w-3/4">
                <h4 className="p-1 text-3xl">{name}</h4>
                <p className="p-1">{description}</p>
            </div>
        </div>
    );
};

export default BeerDetail;
