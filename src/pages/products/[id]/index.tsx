import { GetServerSideProps } from "next";
import Banner from "@/components/Banner";
import Image from "next/image";

import ShoppingCartLogo from "../../../../public/images/carrinho-white.png";
import BannerImage from "../../../../src/assets/banner2.png";
interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
    formattedPrice: string;
    splitPrice: string;
    fileName: string;
    description: string;
    summary: string;
}

interface ProductsProps {
    product: Product;
}

import {
    ProductContainer,
    ProductDetail,
    ImageContainer,
    ProductName,
    ProductPrice,
    ProductSplitPrice,
    Button,
    SummaryTitle,
    ProductDescription,
    Summary
} from "./styles";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const productId = ctx.params?.id;
    const api = 'http://localhost:8080';
    const result = await fetch(`${api}/products/${productId}`);
    const product: Product = await result.json();

    product.image = `${api}/uploads/${product.fileName}`;
    product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(product.price);
    product.splitPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(product.price / 10);

    return {
        props: {
            product
        }
    }
}


export default function ProductId({ product }: ProductsProps) {
    return (
        <ProductContainer>
            <Banner image={BannerImage} width={1140} heigth={145} />
            <ProductDetail>
                <ImageContainer>

                    <Image src={product.image} width={300} height={300} alt={product.name} />
                </ImageContainer>
                <div>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                    <ProductSplitPrice>10x de {product.splitPrice}sem juros </ProductSplitPrice>
                    <Button>
                        <Image
                            src={ShoppingCartLogo}
                            width={22}
                            height={22}
                            alt="Shopping cart image"
                        />
                        <p>Adicionar ao carrinho</p>
                    </Button>
                    <ProductDescription>{product.description}</ProductDescription>
                </div>
            </ProductDetail>
            <SummaryTitle><span>Inf</span>ormações do produto</SummaryTitle>
            <Summary>{product.summary}</Summary>
        </ProductContainer>
    )
}

