import got from "got";

import { DangerLinqFunction } from "./DangerLinqFunction";
import { DangerLinqFunctionMapping } from "./DangerLinqFunctionMapping";

const cache = new Map<DangerLinqFunction, Function>();

export function DangerLinq(func: DangerLinqFunction.Map): Promise<typeof DangerLinqFunctionMapping[DangerLinqFunction.Map]>;
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
