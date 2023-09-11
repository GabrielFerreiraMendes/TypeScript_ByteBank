import { comparavelInterface } from "./comparavelInterface.js";
import { imprimivelInterface } from "./imprimivelInterface.js";

export interface modeloInterface<T> extends imprimivelInterface, comparavelInterface<T> {

}