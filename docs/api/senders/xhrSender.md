---
id: xhrSender
title: "xhrSender"
sidebar_label: "✉️ xhrSender"
tags: [sender]
---

## Package

- **_[@rpldy/sender](../../packages/rpldy-sender)_**

## Installation

```bash npm2yarn
npm install @rpldy/sender
```

## Details

```typescript
type send = SendMethod
```

- See: [SendMethod](../types#sendmethod)

This is the default send method used by [Uploady](../../packages/rpldy-uploady)/[Uploader](../../packages/rpldy-uploady).

Normally, it is used internally and there is no reason to interact with this method directly.

However, [Enhancers](../../getting-started/concepts#enhancer) may want to wrap the send functionality with some custom logic.

## Example

```jsx
import { Uploady } from "@rpldy/uploady";
import { send } from "@rpldly/sender";

const mySend = (items, url, sendOptions, onProgress) => {

	//implement some custom logic here

	return send(items, url, sendOptions, onProgress);
};

const myEnhancer = (uploader) => {		
	
	//make uploader use the custom send method
    uploader.update({ send: mySend });
	
	return uploader;
};

 const MyApp = () => {
        return <Uploady enhancer={myEnhancer}>
          <RestOfMyApp/>
        </Uploady>;
    };
```
