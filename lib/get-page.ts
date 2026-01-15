import { Data } from "@measured/puck";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// Replace with call to your database
export const getPage = async (path: string) => {
  const myKv = (await getCloudflareContext({ async: true })).env.DATABASE;
  const page = (await myKv.get(path)) as unknown as Data;

  console.log(page);

  return page ? page : null;
};
