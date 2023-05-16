const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-greenGrey px-14 py-6 text-white">
      <div className="flex gap-x-80 text-lg">
        <div className="flex flex-col gap-1">
          <h2 className="font-serif text-2xl font-bold">King&apos;s Wok</h2>
          <p>Ul. Kościuszki 21/37</p>
          <p>02-647 Warszawa</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>kontakt@kingswok.pl</p>
          <p>tel. 123-456-789</p>
        </div>
      </div>
      <p className="text-center text-sm">Copyright &copy; Emil Beski 2023</p>
    </footer>
  );
};

export default Footer;
