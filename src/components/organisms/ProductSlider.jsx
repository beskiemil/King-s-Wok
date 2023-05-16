import ProductTile from "components/molecules/ProductTile";

import dimsum from "assets/product-photos/dim-sum.jpg";
import padthai from "assets/product-photos/padthai.jpg";
import curry from "assets/product-photos/curry.jpg";

const ProductSlider = () => {
  return (
    <div>
      <ProductTile
        img={dimsum}
        name="Dim Sum"
        description="delikatne chińskie pierożki, nadziewane farszem z wołowiną i tajską bazylią"
      />
      <ProductTile
        img={padthai}
        name="Pad Thai"
        description="smażony makaron ryżowy w stylu tajskim, z warzywami i orzeszkami ziemnymi"
      />
      <ProductTile
        img={curry}
        name="Czerwone Curry"
        description="pikantne, kremowe czerwone curry na mleku kokosowym, warzywa, ryż basmati"
      />
    </div>
  );
};

export default ProductSlider;
