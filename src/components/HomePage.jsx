import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timeActions } from "../store/time";

import TimeSpend from "./TimeSpend";
import Button from "./Button";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(timeActions.updateTime(1));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>Welcome to Ucan</h1>
            <TimeSpend className="my-4" />
            <Button
                title="toggle"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light"
            />
        </div>
    );
};

export default HomePage;
