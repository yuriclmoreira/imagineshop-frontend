import Banner from '@/components/Banner'
import ProductList from '../../components/Product'

import BannerImage from '../../assets/banner1.png'
import { Main } from './styles'


export default function Products({ productList }: any) {
    return (
        <Main>
            <Banner image={BannerImage} width={1140} heigth={325} />
            <ProductList products={productList} />
        </Main>
    )
}