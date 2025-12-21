
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPageTemplate from '@/components/product-page-template';
import { products } from '@/lib/products-data';

const productSlug = 'pravaah';
const product = products.find((p) => p.slug === productSlug);

export const metadata: Metadata = {
    title: product ? `${product.name} - ${product.tagline} | Climmatech` : 'Product Not Found',
    description: product?.description,
};

export default function Page() {
    if (!product) notFound();
    return <ProductPageTemplate product={product} />;
}
