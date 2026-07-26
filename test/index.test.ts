import { describe, expect, it, vi } from "vitest";

import { tapPromise } from "../src/index.js";

describe("tapPromise", () => {
  it("awaits the value and effect, then preserves identity", async () => {
    const value = {};
    const effect = vi.fn<(value: object) => Promise<void>>(async () => {});
    await expect(tapPromise(Promise.resolve(value), effect)).resolves.toBe(
      value,
    );
    expect(effect).toHaveBeenCalledWith(value);
  });

  it("accepts synchronous values and effects", async () => {
    await expect(tapPromise(2, () => 3)).resolves.toBe(2);
  });

  it("skips the effect for rejected values", async () => {
    const reason = new Error("failed");
    const effect = vi.fn<(value: never) => void>();
    await expect(tapPromise(Promise.reject(reason), effect)).rejects.toBe(
      reason,
    );
    expect(effect).not.toHaveBeenCalled();
  });

  it("propagates effect failures", async () => {
    const reason = new Error("effect failed");
    await expect(tapPromise(1, () => Promise.reject(reason))).rejects.toBe(
      reason,
    );
  });
});
