import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    This is page with information about us
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Etiam neque. Duis pulvinar. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer malesuada. Maecenas lorem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Vivamus ac leo pretium faucibus. Etiam commodo dui eget wisi. Fusce nibh. Quisque porta.
                </p>
                <img src="/img/1.jpg" width="500" height="500" alt="img1" className="prefetched" />
                <p>
                    Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Fusce nibh. Nulla est. Aliquam in lorem sit amet leo accumsan lacinia. Nullam dapibus fermentum ipsum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. In convallis. Nunc auctor.
                </p>
                <img src="/img/2.jpg" width="500" height="500" alt="img2" className="prefetched" />
                <p>
                    Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nullam at arcu a est sollicitudin euismod. Integer tempor. Duis condimentum augue id magna semper rutrum. Aliquam in lorem sit amet leo accumsan lacinia. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In rutrum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <img src="/img/3.jpg" width="500" height="500" alt="img3" className="prefetched" />
                <p>
                    Mauris dictum facilisis augue. Nulla non lectus sed nisl molestie malesuada. Maecenas sollicitudin. Fusce consectetuer risus a nunc. Curabitur vitae diam non enim vestibulum interdum. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Pellentesque arcu. Etiam quis quam. Integer tempor. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Sed ac dolor sit amet purus malesuada congue. Mauris dictum facilisis augue. Proin in tellus sit amet nibh dignissim sagittis. In enim a arcu imperdiet malesuada. Duis viverra diam non justo.
                </p>
                <p>
                    Suspendisse sagittis ultrices augue. Integer in sapien. Nullam eget nisl. Quisque porta. Mauris elementum mauris vitae tortor. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Praesent vitae arcu tempor neque lacinia pretium. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nunc tincidunt ante vitae massa. Suspendisse nisl. Vivamus ac leo pretium faucibus. Donec vitae arcu. Proin in tellus sit amet nibh dignissim sagittis.
                </p>
            </main>
        </div>
    )
}