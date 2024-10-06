"use client";

import { Spinner } from "@atheimuz/react-ui";
import styles from "./Loading.module.scss";

const Loading = () => {
    // return <p>loading</p>
    return (
        <div className={styles.wrapper}>
            <Spinner />
        </div>
    );
};

export default Loading;
