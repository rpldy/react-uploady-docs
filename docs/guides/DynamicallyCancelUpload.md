# Dynamically Cancel Uploads

It's possible to cancel an upload programmatically using the *_START events.

These events are considered "[Cancellable](../api/events#cancellable-events)".
A cancelleable event can be cancelled when its handler returns _false_

In React you can more easily do this by using hooks but can also do this by registering event callbacks.

## Examples

### Cancel Upload using useBatchStartListener

> note that a component using this hook should be wrapped by an &lt;Uploady&gt; component

```javascript

import React from "react";
import  { useBatchStartListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const MyUploadButton = () => {   
    useBatchStartListener((batch) => {
        //cancel any batch with more than 10 items 
        return (batch.items.length <= 10);  
    });

    return <UploadButton/>;
};

```

### Cancel Upload using useItemStartListener hook

> note that a component using this hook should be wrapped by an &lt;Uploady&gt; component

```javascript

import React from "react";
import  { useItemStartListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const MyUploadButton = () => {   
    useItemStartListener((item) => {
        //cancel any item representing a file upload with name containing "XXX"
        const name = item.file ? item.file.name : item.url; 
        return name.indexOf("XXX") === -1;    
    });

    return <UploadButton/>;
};

```

### Cancel Upload using event listener

Event hooks are convenience helpers around [Uploader events](../api/uploader#events)

Event handlers can be passed to the Uploady instance and can also cancel uploads programmatically.

```javascript

import React from "react";
import Uploady, { UPLOADER_EVENTS } from "@rpldy/uploady";

const MyApp = () => {
    const listeners = useMemo(() => ({
        [UPLOADER_EVENTS.BATCH_START]: (batch) => {
            //cancel any batch with more than 10 items 
            return (batch.items.length <= 10);  
        }
    }, []));

    return <Uploady
                destination={{url: "https://my-server.com/upload"}}
                listeners={listeners}>
        {/* rest of my app */}
    </Uploady>
};

```
