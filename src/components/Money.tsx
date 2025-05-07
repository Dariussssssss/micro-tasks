import {Button} from "./Button.tsx";
import type {MoneyProps} from "./Body.tsx";
import type {FilterType} from "./Body.tsx";

type Money = {
    foo: (arg: FilterType) => void,
    moneyList: MoneyProps[],
}

export const Money = ({foo, moneyList}: Money) => {
    return (
        <div className={'money__wrapper'}>
            <table className={'table'}>
                <tbody>
                <tr>
                    <th>number</th>
                    <th>banknots</th>
                    <th>value</th>
                    <th>serial number</th>
                </tr>
                {moneyList.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.banknots}</td>
                            <td>{element.value}</td>
                            <td>{element.number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Button title={'All'} onClick={() => foo('All')}/>
            <Button title={'Dollars'} onClick={() => foo('Dollars')}/>
            <Button title={'Rubles'} onClick={() => foo('RUBLS')}/>
        </div>
    )
}
