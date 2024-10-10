"use client";

import dynamic from "next/dynamic";
import styles from "./ErrorMessage.module.scss";

const Message = dynamic(
    () => import("@atheimuz/react-ui").then((mod) => mod.Message),
    { ssr: false }
);

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.wrapper}>
            <Message color="red">{children}</Message>
        </div>
    );
};

export default ErrorMessage;
