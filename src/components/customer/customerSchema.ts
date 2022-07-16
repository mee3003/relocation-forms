import { JsonSchema } from "@jsonforms/core";

export const ui = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/salutation",
        },
      ],
    },
    {
      type: "HorizontalLayout",

      elements: [
        {
          type: "Control",
          scope: "#/properties/firstName",
        },
        {
          type: "Control",
          scope: "#/properties/lastName",
        },
      ],
    },

    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/email",
        },
        {
          type: "Control",
          scope: "#/properties/telNumber",
        },
        {
          type: "Control",
          scope: "#/properties/costsAssumption",
        },
      ],
    },
  ],
};

export const customerSchema: JsonSchema = {
  type: "object",
  required: ["lastName", "firstName", "email", "telNumber"],
  properties: {
    company: {
      type: "string",
      title: "Firma",
    },
    salutation: {
      type: "string",
      enum: ["-", "Frau", "Herr"],
      title: "Anrede",
    },
    firstName: {
      title: "Vorname",
      type: "string",
    },
    lastName: {
      title: "Nachname",
      type: "string",
    },
    email: {
      title: "E-Mail",
      type: "string",
      format: "email",
    },
    telNumber: {
      title: "Tel. Nummer",
      type: "string",
    },
    costsAssumption: {
      type: "boolean",
      title: "Kostenübernahme von Arbeitsamt, ARGE?",
    },
  },
};
