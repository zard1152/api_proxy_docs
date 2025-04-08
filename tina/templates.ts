export const contentBlockSchema = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      body: "Content goes here",
    },
  },
  fields: [
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};