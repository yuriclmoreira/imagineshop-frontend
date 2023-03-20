import { BannerContainer } from "./styles";
import Image, { StaticImageData } from 'next/image';

interface BannerProps {
    image: StaticImageData;
    width: number;
    heigth: number;
}
export default function Banner({ image, width, heigth }: BannerProps) {
    return (
        <BannerContainer>
            <Image src={image} width={width} height={heigth} alt={'banner'} />
        </BannerContainer>
    )
} 