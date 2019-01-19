import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
    <section>
      <img src={require('../static/images/test.jpg')} width="100%"/>
    </section>
  </main>
);