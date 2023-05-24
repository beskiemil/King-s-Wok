import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";
import ErrorPage from "views/ErrorPage";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Select from "components/atoms/Select";

const AddProductPage = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Dania główne");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const { mutate } = useMutation({
    mutationFn: (data) =>
      fetch("http://localhost:3000/add_product", {
        method: "POST",
        credentials: "include",
        body: data,
      }),
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("name", productName);
    data.set("category", productCategory);
    data.set("description", productDescription);
    data.set("price", productPrice);
    data.set("image", productImage[0]);

    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");

        setProductName("");
        setProductCategory("Dania główne");
        setProductDescription("");
        setProductPrice("");
        setProductImage("");

        navigate("/");
      },
    });
  };

  useEffect(() => {
    if (userInfo === null)
      fetch("http://localhost:3000/profile", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((info) => setUserInfo(info));
  }, [setUserInfo, userInfo]);

  if (userInfo === null)
    return <ErrorPage error="Wystąpił błąd" message="Nie zalogowano" />;

  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full flex-col items-center justify-center gap-2">
      <form
        className="flex flex-col gap-5"
        id="newPostForm"
        onSubmit={handleAddPost}
      >
        <Input
          type="text"
          label="Nazwa produktu"
          name="productName"
          id="productName"
          placeholder="np. Pad Thai"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full"
          required
        />
        <Select
          label="Kategoria"
          name="productCategory"
          id="productCategory"
          options={["Dania główne", "Przystawki", "Zupy", "Napoje", "Alkohole"]}
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full"
        />
        <Input
          type="number"
          label="Cena (zł)"
          name="productPrice"
          id="productPrice"
          placeholder="21.90"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full"
          required
        />
        {/* <Select
        label="Rodzaj"
        name="type"
        id="type"
        value={type}
        options={[
          "Wycieczka piesza",
          "Wycieczka rowerowa",
          "Wycieczka krajoznawcza",
          "Wycieczka z biura podróży",
          "Inne",
        ]}
        onChange={(e) => setType(e.target.value)}
        className="w-full"
      /> */}
        <Input
          type="textarea"
          label="Opis"
          name="productDescription"
          id="productDescription"
          placeholder="Tutaj wpisz tekst opisu..."
          rows={3}
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="w-full resize-none"
          required
        />
        <Input
          type="file"
          label="Zdjęcie"
          name="productImage"
          id="productImage"
          className="w-full"
          accept="image/*"
          onChange={(e) => setProductImage(e.target.files)}
          required
        />
        <Button text="Dodaj produkt" type="submit">
          Dodaj produkt
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
