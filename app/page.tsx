import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <article>
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <button type="submit">Submit</button>
                </div>
            </article>
        </main>
    );
}
