import { JsonSchema } from "@jsonforms/core";

export const expensiveSchema: JsonSchema = {
  type: "object",
  properties: {
    expensive: {
      title: "Antike oder besonders wertvolle Gegenstände",
      type: "boolean",
    },
  },
};

export const expensiveSchemaText: JsonSchema = {
  type: "object",
  required: ["expensiveText"],
  properties: {
    expensiveText: {
      title: "Antike und wertvolle Gegenstände:",
      type: "string",
    },
  },
};
