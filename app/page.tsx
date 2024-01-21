import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
    return (
        <main>
            <article className={styles.article}>
                <figure className={styles.article__figure}>
                    <Image
                        width={16}
                        height={17}
                        src="/images/icon-star.svg"
                        alt=""
                    />
                </figure>
                <h1 className={styles.article__heading}>How did we do?</h1>
                <p className={styles.article__intro}>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div className={styles.article__ratings}>
                    <span className={styles.article__ratings__ratingGrade}>
                        1
                    </span>
                    <span className={styles.article__ratings__ratingGrade}>
                        2
                    </span>
                    <span className={styles.article__ratings__ratingGrade}>
                        3
                    </span>
                    <span className={styles.article__ratings__ratingGrade}>
                        4
                    </span>
                    <span className={styles.article__ratings__ratingGrade}>
                        5
                    </span>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </div>
            </article>
        </main>
    );
}
