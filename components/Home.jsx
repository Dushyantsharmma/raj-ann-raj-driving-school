import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import DrivingSymbols from "./DrivingSymbols";
import EnquiryForm from "./EnquiryForm";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery";
import GoogleReviews from "./GoogleReviews";
import LazyMount from "./LazyMount";
import MockTest from "./MockTest";
import Navigation from "./Navigation";
import RTOInfo from "./RTOInfo";
import Safety from "./Safety";

export default function Home() {
  return (
    <div>
      <Navigation />
      <header>
        <h1>Raj Ann Raj Driving School</h1>
        <p>Learn to drive with confidence and safety.</p>
      </header>
      <About />
      <Courses />
      <Safety />
      <DrivingSymbols />
      <RTOInfo />
      <Gallery />
      <GoogleReviews />
      <FAQ />
      <LazyMount>
        <MockTest />
      </LazyMount>
      <EnquiryForm />
      <Contact />
      <Footer />
    </div>
  );
}
