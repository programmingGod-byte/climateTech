import { products } from '@/lib/products-data';
import ProductPageTemplate from '@/components/product-page-template';
import { notFound } from 'next/navigation';


export default function CLMCVDR05Page() {
    const product = products.find(p => p.slug === 'clm-cvdr05');
    
    if (!product) {
        notFound();
    }
    
    return <ProductPageTemplate product={product} />;
}
