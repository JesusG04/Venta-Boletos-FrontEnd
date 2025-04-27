import EventsWrapper from "@/components/pages/home/events/EventsWrapper";
import Banner from "@/components/pages/home/Banner";
import FeaturedEvents from "@/components/pages/home/events/FeaturedEvents";
import LatestEvents from "@/components/pages/home/events/LatestEvents";


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
