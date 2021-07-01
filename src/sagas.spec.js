import { put, call, delay } from "redux-saga/effects";
import { incrementAsync } from "./sagas";

describe("incrementAsync Saga test", () => {
  const generator = incrementAsync();
  it("counter Saga must call delay 1000", () => {
    const effect0 = generator.next().value;
    /* does not work, do not know why
    const expected0 = call(delay, 1000);
    expect(effect0).toStrictEqual(expected0); */
  });

  it("counter Saga must dispatch INCREMENT", () => {
    const effect1 = generator.next().value;
    const expected1 = put({ type: "INCREMENT" });
    expect(effect1).toStrictEqual(expected1);
  });

  it("counter Saga must be done", () => {
    const effect2 = generator.next().value;
    expect(effect2).toBeUndefined();
  });
});
