import Button from "components/atoms/Button";
import dumplings from "assets/dim-sum-article.webp";
import ProductSlider from "components/organisms/ProductSlider";

const HomePage = () => {
  return (
    <main className="">
      <div className="w-full bg-home-banner bg-cover bg-center py-40 text-white md:py-28 xl:py-48">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            NAJLEPSZE POTRAWY KUCHNI AZJATYCKIEJ
          </h1>
          <h2 className="my-4 text-3xl font-medium md:text-3xl">
            Spróbuj już teraz!
          </h2>
          <Button
            text="ZAMÓW ONLINE"
            className="p-4 text-lg font-medium text-white"
          />
        </div>
      </div>
      <article className="mx-auto flex flex-col items-start gap-5 px-10 py-10 sm:flex-row  md:gap-10 lg:w-5/6">
        <img
          src={dumplings}
          alt="Pierożki Dim Sum"
          className=" mx-auto w-2/3 sm:w-1/2 xl:w-2/5"
        ></img>
        <div className="my-auto flex flex-col gap-5 text-lg md:gap-8 md:text-xl/8 lg:gap-10 lg:text-xl/9 xl:gap-20 xl:text-2xl/10">
          <h1 className="mt-3 font-serif text-3xl font-bold">
            King&apos;s Wok
          </h1>
          <p>
            to synonim nowoczesnej kuchni azjatyckiej, która choć mocno osadzona
            w tradycji, nie daje się zaszufladkować i zaskakuje oryginalnymi
            akcentami.
          </p>
          <p>
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
