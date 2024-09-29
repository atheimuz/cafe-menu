import ItemTitle from "@/components/ItemTitle";
import styles from "./Options.module.scss";

const Options = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>옵션 제공</ItemTitle>
            <ul className={styles.options}>
                <li className={styles.option}>
                    <img
                        className={styles.icon}
                        src="/images/icons/coffee.png"
                        alt="카페인"
                    />
                    <dl>
                        <dt>카페인</dt>
                        <dd>디카페인</dd>
                        <dd>1/2디카페인</dd>
                    </dl>
                </li>
                <li className={styles.option}>
                    <img
                        className={styles.icon}
                        src="/images/icons/milk.png"
                        alt="우유"
                    />
                    <dl>
                        <dt>우유</dt>
                        <dd>아몬드밀크</dd>
                        <dd>오트밀크</dd>
                    </dl>
                </li>
                <li className={styles.option}>
                    <img
                        className={styles.icon}
                        src="/images/icons/sugar.png"
                        alt="당"
                    />
                    <dl>
                        <dt>당</dt>
                        <dd>스테비아</dd>
                        <dd>라이트 바닐라시럽</dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
};

export default Options;
