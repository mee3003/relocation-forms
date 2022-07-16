import { rankWith, isBooleanControl, scopeEndsWith } from "@jsonforms/core";

export const myBooleanTester = rankWith(3, isBooleanControl);

export const myParkingTester = rankWith(4, scopeEndsWith("parkingSlot"));

export const myAddressTester = rankWith(3, scopeEndsWith("address"));
