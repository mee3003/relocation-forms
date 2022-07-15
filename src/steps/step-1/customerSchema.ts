import { JsonSchema7 } from "@jsonforms/core";

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

export const customerSchema: JsonSchema7 = {
  type: "object",
  required: ["lastName", "firstName"],
  properties: {
    company: {
      type: "string",
      title: "Firma",
    },
    salutation: {
      type: "string",
      enum: ["", "Frau", "Herr"],
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
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    },
    costsAssumption: {
      type: "boolean",
      title: "Kostenübernahme von Arbeitsamt, ARGE?",
    },
  },
};
