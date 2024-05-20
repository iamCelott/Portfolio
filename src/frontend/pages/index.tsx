import Navbar from "../component/Templates/Navbar";
import HeroContent from "../component/Templates/HeroContent";
import MainContent from "../component/Templates/MainContent";
import Footer from "../component/Templates/Footer";
const Index = () => {
  return (
    <>
      <div className="bg-[#120E1D] w-full">
        <Navbar />
        <HeroContent />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default Index;
