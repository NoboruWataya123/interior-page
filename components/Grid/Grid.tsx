import styles from './Grid.module.css'
import { GridProps } from "./Grid.props";

export default function Grid({children}: GridProps): JSX.Element {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}