import { ProductModel } from "@/intefaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel;
}