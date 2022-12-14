import React, { useEffect, useState } from "react";

export const NomalColumns = (props) => {
    console.log(props)
    return (
        <tr>
            <td className="stationName">{props.stationName}</td>
            <td className="arrivalTime">{props.arrivelTime}</td>
        </tr>
    )
}
export const ArrivalColumns = (props) => {
    // 終着駅が違うので、その点を考慮する
    return (
        <tr>
            <td className="stationName">{props.stationName}</td>
            <td className="arrivalTime">{props.arrivelTime}</td>
        </tr>
    )
}

export const UsePossibleTimetables = () => {
    const [arrivalTrains, setArrivalTrains] = useState([])
    const [targetStation, setTargetStation] = useState("")
    useEffect(() => {
        const api_url = 'http://localhost:3000/api1'
        fetch(api_url)
            .then((res) => res.json())
            .then((mes) => mes.message)
            .then((mes) => {
                setArrivalTrains(mes.arrivalTrains)
                setTargetStation(mes.targetStation)
            })
    }, []);

    const set_column = (target) => {
        if (target.arrivelStation === targetStation) {
            return <NomalColumns stationName={target.arrivelStation} arrivelTime={target.arrivelTime} />
        } else {
            return <ArrivalColumns stationName={target.arrivelStation} arrivelTime={target.arrivelTime} />
        }
    }
    return (
        <table>
            <tbody>
                <tr>
                    <th>終着駅</th>
                    <th>到着予定時刻</th>
                </tr>
                {arrivalTrains.map((train) => set_column(train))}
            </tbody>
        </table>
    )
}


export default UsePossibleTimetables;
