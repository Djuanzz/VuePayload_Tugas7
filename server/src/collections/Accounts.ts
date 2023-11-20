import { CollectionConfig } from "payload/types";

const Accounts: CollectionConfig = {
  slug: "accounts",
  auth: {
    cookies: {
      sameSite: "strict",
      secure: true,
    },
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    },
  ],
};

export default Accounts;
