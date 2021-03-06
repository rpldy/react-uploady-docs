---
id: "FileFilter"
description: "Using Uploady's fileFilter prop to filter out files before upload begins"
---

# File Filter

The fileFilter upload option can be used to filter out files (or URLs) before an upload batch is created.
In case a [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value is returned, the file (or URL) will not be uploaded. 
A [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) will keep the file. 


Unlike with [Cancellable Events](../../api/events#cancellable-events), items that are filtered out are never recorded as part of a batch.
This means that no events will fire for these items, and the uploader will not be aware of them.

:::info
The callback function can return a Promise in order to support async flow 
:::

## Example

```javascript

import React, { useCallback } from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const MyApp = () => {   
    const filterBySize = useCallback((file) => {
        //filter out files larger than 5MB
    	return file.size < 5242880;
    }, []);

    return <Uploady fileFilter={filterBySize}>
        <UploadButton/>
    </Uploady>;
};

```
