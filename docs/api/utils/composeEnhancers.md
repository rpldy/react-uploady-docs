---
id: composeEnhancers
title: "composeEnhancers"
pagination_label: "composeEnhancers"
sidebar_label: "🪛 composeEnhancers"
tags: [enhancer, utility]
---

## Package

- **_[@rpldy/uploady](../../../packages/rpldy-uploady)_**
- **_[@rpldy/uploader](../../../packages/rpldy-uploader)_**

## Installation

```bash npm2yarn
npm install @rpldy/uploady

OR 

npm install @rpldy/uploader
```

## Details

Multiple enhancers can be registered by using the _composeEnhancers_ utility method.

:::note
Enhancers should be written in a way they aren't dependent on the order in which they are registered
:::

## Example

```javascript
import Uploady, { composeEnhancers } from "@rpldy/uploady";
import retryEnhancer from "@rpldy/retry-hooks";

const myEnhancer = (uploader) => {
	
	//... do something to the uploader to enhance it
	
	return uploader;
};

const enhancer = composeEnhancers(retryEnhancer, myEnhancer);

 const MyApp = () => {
        return <Uploady enhancer={enhancer}>
 
        </Uploady>;
    };
```
