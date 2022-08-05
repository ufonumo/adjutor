import { Dispatch, SetStateAction } from "react";

export interface WeightInterface {
    quantity: number;
    setQuantity: (val: number) => void;
}
