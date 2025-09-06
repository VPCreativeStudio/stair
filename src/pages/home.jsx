import Hero from "../atoms/hero-content";
import Visa from "../components/visa-enquiry";
import Service from "../components/service";
import Destination from "../components/destination";
import About from "../components/about";
import Testimonial from "../components/testimonial";
import HeaderBlock from "../components/HeaderBlock";

function Home() {
  return (
    <main>
      <section className="landing">
        <Hero />
        <Visa />
      </section>

      <section className="service">
        <HeaderBlock title="Service" header="Why book using" highlight="ST" />
        <Service />
      </section>
      <section className="trips">
        <HeaderBlock
          title="TOP selling"
          header="Explore popular"
          highlight="destinations"
        />
        <Destination />
      </section>
      <section className="about">
        <HeaderBlock
          title="ST Air"
          header="Why you want to"
          highlight="choose us"
        />
        <About />
      </section>
      <section className="testimonial">
        <HeaderBlock
          title="testimonials"
          header="lets hear something from our"
          highlight="happy customers"
        />
        <Testimonial />
      </section>
    </main>
  );
}

export default Home;
