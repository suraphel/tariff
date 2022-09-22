// form to be used to add Tariff rules

import React, { useRef } from "react";
//import { chargingPoints } from "../components/chargingPointsList"; // need to fix the nameing problem

const Tariff: React.FC = () => {
        const chargingPoint = useRef<HTMLInputElement>(null); //it will take in a string

        const submitHandler = (event: React.FormEvent) => {
                event.preventDefault();
                const chargingPointName = chargingPoint.current!.value; // to tell ts that will return something
                const chargingPointList: string[] = ["a", "v", "c"]; //

                chargingPointList.push(chargingPointName);

                chargingPointList.forEach((element) => {
                        console.log(element);
                });
                console.log(chargingPointList.length);
        };

        return (
                <div>
                        <form onSubmit={submitHandler}>
                                <label htmlFor="chargingPoint">
                                        Charging Point
                                </label>
                                <input type="string" ref={chargingPoint} />
                                <button>Submit </button>
                        </form>
                </div>
        );
};

export default Tariff;
