import { Cores } from "./cores";

export interface EspeciesNome {
    especie: string;
    link?: string;
    cor?: Cores[] | undefined;
}