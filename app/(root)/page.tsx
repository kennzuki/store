import ProductList from '@/components/product/product-list';
import sampleData from '@/db/sample-data';

const Home = async () => {
  return (
    <>
      <ProductList data={sampleData.products} title={'new arrivals'} limit={4} />
    </>
  );
};

export default Home;
