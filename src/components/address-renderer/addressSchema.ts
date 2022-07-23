import { JsonSchema } from "@jsonforms/core";

const squares = ["-", ...[...new Array(15).keys()].map((k) => `${(k + 1) * 10} m²`)];

const etagen = ["UG", "EG", ...[...new Array(8).keys()].map((k) => `${k + 1}. Etage`), "9+ Etage"];

const liftTypes = ["-", "kein Aufzug", "2 Personen", "4 Personen", "6 Personen", "8+ Personen"];

const parkingDistances = [...new Array(10).keys()].map((k) => `${(k + 1) * 10} m.`);

export const movementObjects = ["Wohnung", "Haus", "Keller", "Büro"];

export const liftSchema = {
  type: "object",
  required: ["liftType"],
  properties: {
    liftType: {
      title: "Aufzug",
      type: "string",
      enum: liftTypes,
    },
  },
};

export const part1 = (movementLabel: string): JsonSchema => ({
  type: "object",
  required: ["address", "runningDistance", "movementObject"],
  properties: {
    address: {
      title: "Adresse",
      type: "string",
      minLength: 1,
    },
    parkingSlot: {
      title: "Park- und Beladezone",
      type: "boolean",
    },
    runningDistance: {
      title: "Entfernung vom Parkplatz zu Haustür, in Meter",
      type: "string",
      enum: parkingDistances,
    },
    movementObject: {
      title: movementLabel,
      type: "string",
      enum: movementObjects,
    },
  },
});

export const stockwerkSchema: JsonSchema = {
  type: "object",
  required: ["floor"],
  properties: {
    floor: {
      title: "Stockwerk",
      enum: etagen,
      type: "string",
    },
  },
};

export const hausStockwerke: JsonSchema = {
  type: "object",
  required: ["stockwerke"],
  properties: {
    stockwerke: {
      title: "Stockwerke im Haus",
      type: "array",
      uniqueItems: true,
      items: {
        oneOf: [
          { const: "Keller", title: "Keller" },
          { const: "EG", title: "EG" },
          { const: "1. OG", title: "1. OG" },
          { const: "2. OG", title: "2. OG" },
        ],
      },
    },
  },
};

export const part2: JsonSchema = {
  required: ["isAltbau", "roomsNumber", "area"],

  type: "object",
  properties: {
    isAltbau: {
      title: "Altbau",
      type: "boolean",
    },
    roomsNumber: {
      type: "string",
      title: "Anzahl der Zimmer",
    },
    area: {
      type: "string",
      title: "Wohnfläche, m²",
      enum: squares,
    },
    hasLoft: {
      type: "boolean",
      title: "Dachboden",
    },
    keller: {
      type: "boolean",
      title: "Keller",
    },
    garage: {
      type: "boolean",
      title: "Garage",
    },
    packservice: {
      type: "boolean",
      title: "Umzugsgut in Kartons einpacken",
    },
  },
};
/*
     


     
    
      */
