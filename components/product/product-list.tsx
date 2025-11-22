import ProductCard from "./ProductCard";

const ProductList = ({ data, title, limit }: { data: any; title?: string; limit?: number }) => {
    const limitedProducts=data.slice(0,limit);
    return <div className='p-8'>
        <h2 className='text-2xl font-bold capitalize'>{title}</h2>
        {data.length>0?<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 '>
            {limitedProducts.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
        ))}
        </div>:<p>No products found</p>}
  </div>;
};

export default ProductList;
