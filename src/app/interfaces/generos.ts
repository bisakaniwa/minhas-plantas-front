import { EspeciesNome } from "./suculentas";

export interface Generos {
    nomeGenero: string;
    link?: string;
    especies: EspeciesNome[]
}