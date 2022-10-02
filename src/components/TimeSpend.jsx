import { useSelector } from "react-redux";
import { timeSelectors } from "../store/time";

import { formatSecondsToHoursMinutesSeconds } from "../utils/timeFormatUtils";

const TimeSpend = ({ className }) => {
    const timePassed = useSelector(timeSelectors.getTimePassed);

    return (
        <div className={className}>
            <span className="text-xl">
                Time spend on site:{" "}
                {formatSecondsToHoursMinutesSeconds(timePassed)}
            </span>
        </div>
    );
};

export default TimeSpend;
