# @lucid-softworks/promise-tap

Run a synchronous or asynchronous side effect after fulfillment and return the
original value.

```ts
import { tapPromise } from "@lucid-softworks/promise-tap";

const user = await tapPromise(loadUser(), auditUser);
```
