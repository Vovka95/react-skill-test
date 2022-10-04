const BeerCard = ({ src, title, abv }) => (
    <div className="card">
        <div className="card__header">
            <img src={src} alt="card" className="h-52 w-auto" />
        </div>
        <div className="card__body">
            <h4>{title}</h4>
            <div className="tag">
                <p>{abv}</p>
            </div>
        </div>
    </div>
);

export default BeerCard;
