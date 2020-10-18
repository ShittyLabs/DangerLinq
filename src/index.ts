import got from "got";

import { DangerLinqFunction } from "./DangerLinqFunction";
import { DangerLinqFunctionMapping } from "./DangerLinqFunctionMapping";
import { Grouping as grouping } from "./Types/Grouping";
const Grouping = grouping;

const cache = new Map<DangerLinqFunction, Function>();

/** Applies an accumulator function over every element in the source array using the specified seed value as the initial memo value. */
export function DangerLinq(func: DangerLinqFunction.Aggregate): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Aggregate]>;
/** Applies an accumulator function over every element in the source array, using the first element as the seed value. */
export function DangerLinq(func: DangerLinqFunction.Aggregate1): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Aggregate1]>;
/** Applies an accumulator function over every element in the source array using the specified seed value as the initial memo value, and applies the result selector to the result. */
export function DangerLinq(func: DangerLinqFunction.Aggregate2): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Aggregate2]>;
/** Applies a function to batch the source sequence into sized buckets. */
export function DangerLinq(func: DangerLinqFunction.Batch): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Batch]>;
/** Applies a function to batch the source sequence into sized buckets and applies a projection to each bucket. */
export function DangerLinq(func: DangerLinqFunction.Batch1): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Batch1]>;
/** Applies a function to each value in the input array and groups the array values according to the result. */
export function DangerLinq(func: DangerLinqFunction.GroupBy): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.GroupBy]>;
/** Creates a new array by applying the supplied function to every element in the source array. */
export function DangerLinq(func: DangerLinqFunction.Map): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Map]>;
/** Sorts an array by adding items to an array after a delay determined by their cardinality. Potentially stable. */
export function DangerLinq(func: DangerLinqFunction.SleepSort): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.SleepSort]>;
export async function DangerLinq(func: DangerLinqFunction) {
  // @ts-ignore
  if (cache.has(func)) {
    return cache.get(func);
  }
  let fn: typeof DangerLinqFunctionMapping[typeof func];
  const gist = await (await got(`https://gist.githubusercontent.com/${func}`)).body;

  eval(gist);

  // @ts-ignore
  cache.set(func, fn);

  // @ts-ignore
  return fn;
}
