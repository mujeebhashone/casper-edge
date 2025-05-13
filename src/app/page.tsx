import WebLayout from "@/components/mainlayout/WebLayout";
import Banner from "@/components/mainlayout/Banner";
import BannerBottomSection from "@/components/mainlayout/BannerBottomSection";
import PricingSection from "@/components/mainlayout/PricingSection";
import PracticingNowSection from "@/components/mainlayout/PracticingNowSection";
import Faq from "@/components/mainlayout/Faq";


export default function Home() {
  return (
      <WebLayout>
            <Banner/>
            <div className="relative">
              {/* Gradient/Shadow effect here */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[900px] h-[180px] pointer-events-none z-10"
                   style={{
                     background: "radial-gradient(ellipse 60% 40% at 50% 0%, #FDF5F4 0%, transparent 100%)",
                     filter: "blur(8px)",
                   }}
              >
              </div>
              <BannerBottomSection />
              
            </div>
              <PricingSection />
              <PracticingNowSection />
              <Faq />
              {/* <NewsLetter /> */}
      </WebLayout>
  );
}
