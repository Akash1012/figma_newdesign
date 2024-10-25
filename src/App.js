import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWork from "./components/HowItWork";
import TestimonialGallery from "./components/TestimonialGallery";
// https://www.figma.com/design/i1F6PQykJIogzAhrbc4b62/Test?node-id=1-2677&node-type=frame&t=51JCY42NuCwksHbc-0
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HowItWork />
      <TestimonialGallery />
    </div>
  );
}

export default App;
