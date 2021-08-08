import React, {memo} from 'react';
import styles from './Sandbox.module.scss';
import Mock from "../common/Mock";

const Sandbox: React.FC = () => {
    return (
        <section className={`${styles.wrapper} default-box`}>
            <Mock/>
        </section>
    );
}

export default memo(Sandbox);
