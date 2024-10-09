import { AiOutlineLoading } from "react-icons/ai";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.icon}>
                <AiOutlineLoading />
            </span>
        </div>
    );
};

export default Loading;
