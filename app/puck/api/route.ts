import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  const payload: { path: string; data: any } = await request.json();
  const myKv = (await getCloudflareContext({ async: true })).env.DATABASE;

  await myKv.put(payload.path, JSON.stringify(payload.data));

  // Purge Next.js cache
  revalidatePath(payload.path);

  return NextResponse.json({ status: "ok" });
}
