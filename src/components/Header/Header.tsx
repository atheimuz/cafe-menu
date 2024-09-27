import Link from "next/link";
import { CgChevronLeft } from "react-icons/cg";
import styles from "./Header.module.scss";

interface Props {
    title?: string;
}
const Header = ({ title }: Props) => {
    return (
        <header className={styles.wrapper}>
            <Link className={styles.btn} href="/">
                <CgChevronLeft />
            </Link>
            {title && <p className={styles.title}>{title}</p>}
        </header>
    );
};

export default Header;
