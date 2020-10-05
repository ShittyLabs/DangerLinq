import got from "got";

import { DangerLinqFunction } from "./DangerLinqFunction";
import { DangerLinqFunctionMapping } from "./DangerLinqFunctionMapping";

export async function DangerLinq(
  func: DangerLinqFunction
): Promise<typeof DangerLinqFunctionMapping[typeof func]> {
  let fn: typeof DangerLinqFunctionMapping[typeof func];
  const gist = await (await got(`https://gist.githubusercontent.com/${func}`)).body;

  eval(gist);

  // @ts-ignore
  return fn;
}
