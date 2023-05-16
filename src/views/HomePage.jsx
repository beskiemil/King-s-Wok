import Button from "components/atoms/Button";
import dumplings from "assets/dim-sum-article.jpg";
import ProductSlider from "components/organisms/ProductSlider";

const HomePage = () => {
  return (
    <main>
      <div className="w-full bg-home-banner bg-cover bg-center py-56 text-white backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            NAJLEPSZE POTRAWY KUCHNI AZJATYCKIEJ
          </h1>
          <h2 className="my-4 text-4xl font-medium">Spróbuj już teraz!</h2>
          <Button
            text="ZAMÓW ONLINE"
            className="border-white bg-white p-4 text-lg font-medium text-black"
          />
        </div>
      </div>
      <article className="mx-auto flex w-5/6 gap-16 p-20">
        <img src={dumplings} alt="Pierożki Dim Sum" className="w-[40%]"></img>
        <div className="flex flex-col gap-16">
          <h1 className="font-serif text-5xl">King&apos;s Wok</h1>
          <p className="text-4xl">
            to synonim nowoczesnej kuchni azjatyckiej, która choć mocno osadzona
            w tradycji, nie daje się zaszufladkować i zaskakuje oryginalnymi
            akcentami.
          </p>
          <p className="text-4xl">
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
