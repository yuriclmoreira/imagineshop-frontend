import Image from "next/image";
import Link from "next/link";
import { ProductContainer, ProductItem, ProductList, ProductName, ProductPrice, ProductSplitPrice, Title } from "./styles";
import { StaticImageData } from 'next/image';

export interface Product {
    _id: string;
    name: string;
    image: StaticImageData;
    price: string;
    formattedPrice: string;
    splitPrice: string;
    times: number | string;
    description: string;
}



interface ProductsProps {
    products: Product[];
}

export default function Product({ products }: ProductsProps) {

    return (
        <ProductContainer>
            <Title>
                <span>Des</span>taques
            </Title>

            <ProductList>
                {products &&
                    products.map(product => (
                        <ProductItem key={product._id}>
                            <Link href={`/products/${product._id}`}>
                                <Image
                                    src={product.image}
                                    alt='Product image'
                                    width={230}
                                    height={230}
                                />
                                <ProductName>{product.name}</ProductName>
                            </Link>

                            <ProductPrice>{product.formattedPrice}</ProductPrice>
                            <ProductSplitPrice>
                                {product.times} de R$ {product.splitPrice} sem juros
                            </ProductSplitPrice>
                        </ProductItem>
                    ))}
            </ProductList>
        </ProductContainer>
    )
}