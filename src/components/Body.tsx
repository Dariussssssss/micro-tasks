import {Button} from "./Button.tsx";
import {useState} from "react";
import {Students} from "./Students.tsx";
import {Cars} from "./Cars.tsx";
import {Money} from "./Money.tsx";

type BodyProps = {
    text: string;
    students: StudentsProps[]
    topCars: TopCarsProps[]
    money: MoneyProps[]
    setMoney: (money: MoneyProps[]) => void
}

export type StudentsProps = {
    id: number,
    name: string,
    age: number,
}

export type TopCarsProps = {
    manufacturer: string,
    model: string
}

export type MoneyProps = {
    banknots: string,
    value: number,
    number: string
}

export type FilterType = 'All' | 'Dollars' | 'RUBLS'



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

    const [filter, setFilterer] = useState<FilterType>('All')
    let moneyList = money
    if (filter === 'Dollars') {
        moneyList = money.filter((element) => element.banknots === "Dollars")

    }
    if (filter === 'RUBLS') {
        moneyList = money.filter((element) => element.banknots === "RUBLS")
    }

    const foo = (arg: FilterType) => {
        setFilterer(arg)
    }


    // eslint-disable-next-line prefer-const
    let [a, setA] = useState(1)

    const foo1 = () => {
        setA(++a)
    }
    const foo2 = () => {
        setA(0)
    }


    return (
        <>
            {text}
            <Students students={students}/>
            <Cars topCars={topCars}/>
            <Money foo={foo} moneyList={moneyList}/>

            <div>
                <Button title={'Push'} onClick={onClick0}/>
                <Button title={'Push'} onClick={() => onClick1(100200, 'orange')}/>
                <Button title={'Push'} onClick={onClick2}/>
            </div>
            <div>
                <div>
                    {a}
                </div>
                <Button title={'+'} onClick={foo1}/>
                <Button title={'0'} onClick={foo2}/>
            </div>
        </>
    )
}
