import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
    return (
        <main>
            <article className="article">
                <h1 className="article__heading">How did we do?</h1>
                <p className="article__intro">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div className="article__ratings">
                    <span className="article__ratings__rating-grade">1</span>
                    <span className="article__ratings__rating-grade">2</span>
                    <span className="article__ratings__rating-grade">3</span>
                    <span className="article__ratings__rating-grade">4</span>
                    <span className="article__ratings__rating-grade">5</span>
                    <button type="submit">Submit</button>
                </div>
            </article>
        </main>
    );
}
