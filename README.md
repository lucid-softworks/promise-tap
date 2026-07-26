# @lucid-softworks/promise-tap

Run a synchronous or asynchronous side effect after fulfillment and return the
original value.

```ts
import { tapPromise } from "@lucid-softworks/promise-tap";

const loadUser = async () => ({ id: "user-1", name: "Ada" });
const auditUser = (user: { readonly id: string }) =>
  console.log(`Loaded ${user.id}`);
const user = await tapPromise(loadUser(), auditUser);
```
