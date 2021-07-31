import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface GridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children?: ReactNode;
}