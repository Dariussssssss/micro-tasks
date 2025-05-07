import {Button} from "./Button.tsx";
import {useState} from "react";

type BodyProps = {
    text: string;
    students: StudentsProps[]
    topCars: TopCarsProps[]
    money: MoneyProps[]
    setMoney: (money: MoneyProps[]) => void
}

type StudentsProps = {
    id: number,
    name: string,
    age: number
}

type TopCarsProps = {
    manufacturer: string,
    model: string
}

type MoneyProps = {
    banknots: string,
    value: number,
    number: string
}

type Filter = 'All' | 'Dollars' | 'RUBLS'

export const Body = ({text, students, topCars, money}: BodyProps) => {
    const onClick0 = () => {
        console.log("click heandler 0");
    }
    const onClick1 = (arg: number, color: string) => {
        console.log(arg + color);
    }
    const onClick2 = () => {
        console.log("click heandler 2");
    }

    let [filt, setFilter] = useState<Filter>('All')
    let moneyList = money
    if (filt === 'Dollars') {
        moneyList = money.filter((element) => element.banknots === "Dollars")

    }
    if (filt === 'RUBLS') {
        moneyList = money.filter((element) => element.banknots === "RUBLS")
    }

    const foo = (arg: Filter) => {
        setFilter(arg)
    }


    let [a, setA] = useState(1)

    const foo1 = () => {
        setA(++a)
    }
    const foo2 = () => {
        setA(0)
    }


    return (
        <>{text}
            <ul>
                {students.map((student, index) => {
                    return (
                        <li key={index}>{student.name}<span>age: {student.age}</span></li>
                    )
                })}
            </ul>

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
            <div>
                <Button title={'Push'} onClick={onClick0}/>
                <Button title={'Push'} onClick={() => onClick1(100200, 'orange')}/>
                <Button title={'Push'} onClick={onClick2}/>
            </div>
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
                <div>
                    <div>
                        {a}
                    </div>
                    <Button title={'+'} onClick={foo1}/>
                    <Button title={'0'} onClick={foo2}/>
                </div>
            </div>
        </>
    )
}
