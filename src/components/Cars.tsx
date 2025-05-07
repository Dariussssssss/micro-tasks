import type {TopCarsProps} from "./Body.tsx";

type Cars = {
    topCars: TopCarsProps[],
}

export const Cars = ({topCars}: Cars) => {
    return (
        <table className="table">
            <tbody>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {topCars.map((topCar, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{topCar.manufacturer}</td>
                        <td>{topCar.model}</td>
                    </tr>

                )
            })}
            </tbody>
        </table>
    )
}
