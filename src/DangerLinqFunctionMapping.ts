import { DangerLinqFunction } from "./DangerLinqFunction";
import { DontCallThisError } from "./Errors/DontCallThisError";

export interface IDangerLinqFunctionMapping {
  [DangerLinqFunction.Map]: <T, U>(
    arr: Array<T>,
    xform: (x: T) => U
  ) => Array<U>;
}

export const DangerLinqFunctionMapping: IDangerLinqFunctionMapping = {
  [DangerLinqFunction.Map]: <T, U>(arr: Array<T>, xform: (x: T) => U) => {
    throw new DontCallThisError();
  },
};
