import { DangerLinqFunction } from "./DangerLinqFunction";
import { DontCallThisError } from "./Errors/DontCallThisError";

export const DangerLinqFunctionMapping = {
  [DangerLinqFunction.Aggregate2]: <T, U, V>(xs: Array<T>, seed: U, reducer: (memo: U, val: T) => U, resultSelector: ((val: U) => V)): V => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.Map]: <T, U>(arr: Array<T>, xform: (x: T) => U): Array<U> => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.SleepSort]: <T>(arr: Array<T>, ord: (x: T) => number): Promise<Array<T>> => {
    throw new DontCallThisError();
  },
};
