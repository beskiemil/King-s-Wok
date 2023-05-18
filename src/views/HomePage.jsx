import Button from "components/atoms/Button";
import dumplings from "assets/dim-sum-article.jpg";
import ProductSlider from "components/organisms/ProductSlider";

const HomePage = () => {
  return (
    <main className="">
      <div className="w-full bg-home-banner bg-cover bg-center py-40 text-white md:py-28 xl:py-48">
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-4xl">
            NAJLEPSZE POTRAWY KUCHNI AZJATYCKIEJ
          </h1>
          <h2 className="my-4 text-4xl font-medium md:text-3xl">
            Spróbuj już teraz!
          </h2>
          <Button
            text="ZAMÓW ONLINE"
            className="border-white bg-white p-4 text-lg font-medium text-greenGrey"
          />
        </div>
      </div>
      <article className="mx-auto flex w-5/6 flex-col items-center gap-16 py-20 lg:flex-row lg:items-start xl:px-16">
        <img
          src={dumplings}
          alt="Pierożki Dim Sum"
          className="md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/3"
        ></img>
        <div className="flex flex-col gap-16">
          <h1 className="font-serif text-3xl font-bold xl:text-4xl">
            King&apos;s Wok
          </h1>
          <p className="text-2xl xl:text-3xl">
            to synonim nowoczesnej kuchni azjatyckiej, która choć mocno osadzona
            w tradycji, nie daje się zaszufladkować i zaskakuje oryginalnymi
            akcentami.
          </p>
          <p className="text-2xl xl:text-3xl">
            Jesteśmy dumni z tego, jakie doświadczenia tworzymy dla naszych
            Gości: klimatyczne wnętrze, dobra muzyka, pozytywni ludzie,
            koktajlbar i nowoczesna, azjatycka kuchnia. W naszym menu łączymy
            tradycyjne smaki z odrobiną fantazji i nowoczesnego stylu. Byle było
            pysznie.
          </p>
        </div>
      </article>
      <ProductSlider />
    </main>
  );
};

export default HomePage;
