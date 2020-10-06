import { DangerLinqFunction } from "./DangerLinqFunction";
import { DontCallThisError } from "./Errors/DontCallThisError";

export const DangerLinqFunctionMapping = {
  [DangerLinqFunction.Aggregate1]: <T>(xs: Array<T>, reducer: (memo: T, val: T) => T): T => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.Map]: <T, U>(arr: Array<T>, xform: (x: T) => U): Array<U> => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.SleepSort]: <T>(arr: Array<T>, ord: (x: T) => number): Promise<Array<T>> => {
    throw new DontCallThisError();
  },
};
