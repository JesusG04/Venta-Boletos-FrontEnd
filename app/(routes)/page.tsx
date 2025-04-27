import { productData } from "@/public/data/productDta";
import EventsWrapper from "@/components/pages/home/events/EventsWrapper";
import Events from "@/components/pages/home/events/Events";
import Banner from "@/components/pages/home/Banner";
import FeaturedEvents from "@/components/pages/home/events/FeaturedEvents";
import LatestEvents from "@/components/pages/home/events/LatestEvents";
import Moods from "@/components/pages/home/Moods";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import TrendingSlider from "@/components/pages/home/TrendingSlider";
import Workout from "@/components/pages/home/Workout";

const page = () => {
  return (
    <>
      <Banner />

      {/* <TrendingSlider /> */}

      {/* <Moods /> */}

      <EventsWrapper />{/* Enventos Populares */}

      {/* <Workout start={0} end={6} /> */}

      <FeaturedEvents />{/* Eventos mas destacados */}

      {/* <Podcasts /> */}

      {/* <Product sectionTitle="Product" componentData={productData} /> */}

      <LatestEvents />
    </>
  );
};

export default page;
