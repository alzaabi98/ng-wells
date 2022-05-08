import { Valve } from "./Valve";

export interface Well {
  id: number,
  title: string,
  valves: Array<Valve>
}
