import type {MouseEvent} from "react";

type ButtonProps = {
    title: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({title, onClick}: ButtonProps) => {
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        onClick(event);
    }
    return (
        <button onClick={onClickHandler}>{title}</button>
    )
}

//event: MouseEvent<HTMLButtonElement>
