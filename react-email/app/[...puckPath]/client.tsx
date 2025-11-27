"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import conf from "../../config";

export function Client({ data }: { data: Data }) {
  return <Render config={conf} data={data} />;
}
