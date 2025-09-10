import {match} from "ts-pattern";
import Image from 'next/image';

type HullClassProps = {
    notation1: string;
    notation2: string;
    notation3: string;
    notation4: string;
    notation5: string;
    notation6: string;
    notation7?: string;
    notation8?: string;
};

export default function HullClass(props: HullClassProps) {
    const {notation1, notation2, notation4, notation5} = props;
    const firstSymbol = match({notation1, notation2})
        .with({notation1: "+", notation2: "-"}, () => (
            <Image alt="symbol1" width={25} height={25} src={"/gambar_notasi/PlusMinus.png"}/>
        )).otherwise(() => notation1 + notation2)
    const thirdSymbol = match(notation4)
        .with("A100", () => <Image alt="symbol3" width={75} height={50} src={"/gambar_notasi/A100.png"}/>)
        .with("A90", () => <Image alt="symbol3" width={75} height={50} src={"/gambar_notasi/A90.png"}/>)
        .with("ASM", () => <Image alt="symbol3" width={75} height={50} src={"/gambar_notasi/ASM.png"}/>)
        .with("SM", () => <Image alt="symbol3" width={50} height={50} src={"/gambar_notasi/SM.png"}/>)
        .with("A-SM", () => <Image alt="symbol3" width={75} height={50} src={"/gambar_notasi/ASMStrip.png"}/>)
        .otherwise(() => notation4)
    const fourthSymbol = match(notation5)
        .with("I", () => <Image alt="symbol1" width={25} height={25} src={"/gambar_notasi/I.png"}/>)
        .with("IF", () => <Image alt="symbol1" width={25} height={25} src={"/gambar_notasi/IF.png"}/>)
        .with("II", () => <Image alt="symbol1" width={25} height={25} src={"/gambar_notasi/II.png"}/>)
        .with("IISP", () => <Image alt="symbol1" width={25} height={25} src={"/gambar_notasi/iisp.png"}/>)
        .otherwise(() => notation5)
    return (
        <div className="flex items-center gap-3 flex-wrap">
            {firstSymbol}
            {thirdSymbol}
            {fourthSymbol}
        </div>
    );
}
