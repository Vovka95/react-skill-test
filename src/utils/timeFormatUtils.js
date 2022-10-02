import moment from "moment";
import "moment-duration-format";

export const formatSecondsToHoursMinutesSeconds = (seconds) => {
    return moment.duration(seconds, "seconds").format("hh:mm:ss", {
        trim: false,
    });
};
