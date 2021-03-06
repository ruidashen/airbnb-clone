import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(startDate, endDate);
  const formattedDate = (date) => format(new Date(date), "dd MMMM yy");
  const range = `${formattedDate(startDate)} - ${formattedDate(endDate)}`;
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                startDate,
                price,
                total,
                star,
              }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  startDate={startDate}
                  price={price}
                  total={total}
                  key={img}
                  star={star}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
