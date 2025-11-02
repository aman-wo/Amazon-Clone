import CarouselEffext from "../../components/carousel/CarouselEffect";
import Category from "../../components/category/Category";
import LayOut from "../../components/layOut/LayOut";
import Product from "../../components/product/Product";
const Landing = () => {
  return (
      <LayOut>
    <CarouselEffext />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
