import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import ProductPrice from './Product-Price';

const ProductCard = ({ product }: any) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-lg'>{product.name}</h2>
        </Link>
        <div className='text-lg font-semibold'>${product.price}</div>
        <div className='text-sm'>
          <p className=''>{product.rating} Stars</p>
          <p className=''>
            {product.stock > 0 ? (
              <ProductPrice value={product.price} />
            ) : (
              <p className='text-red-500'>Out of Stock</p>
            )}{' '}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
