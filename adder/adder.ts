/// <reference types="./generated/types/wit.d.ts"/>
import * as AddInterface from "ops:adder/add@0.1.0";

export const add: typeof AddInterface = {

  add(a: number, b: number): number {
    return a + b;
  }

};
