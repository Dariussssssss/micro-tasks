type FooterProps = {
    text: string;
}

export const Footer = ({text}: FooterProps) => {
    return (
        <footer>{text}</footer>
    )
}
