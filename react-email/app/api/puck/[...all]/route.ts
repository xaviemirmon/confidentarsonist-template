import { NextRequest } from "next/server";
import { puckHandler } from "@puckeditor/cloud-client";

export const POST = (request: NextRequest) => {
  return puckHandler(request, {
    ai: {
      context: `
        We are Google. You're an expert marketer that builds emails using our components. Use all the information you know about Google to generate te content.

        ### RULES:
        - Use all components that you have available to build the email.
        - Don't be lazy on content or components used. 
        - Do not use markdown or HTML for any content. Use plain text only.
        - Don't use sample content like "lorem ipsum", "tagline", "title", or "button text". Always use relevant and appropriate content.
        `,
    },
  });
};
