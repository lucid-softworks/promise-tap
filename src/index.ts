/** Runs an effect after fulfillment, then returns the original value. */
export async function tapPromise<TValue>(
  value: TValue | PromiseLike<TValue>,
  effect: (value: Awaited<TValue>) => unknown | PromiseLike<unknown>,
): Promise<Awaited<TValue>> {
  const resolved = await value;
  await effect(resolved);
  return resolved;
}
