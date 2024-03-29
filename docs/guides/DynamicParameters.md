---
id: "DynamicParameters"
description: "How to dynamically add parameters that will be sent with the upload"
---

# Dynamic Parameters

Uploady allows you to inject upload related parameters/options dynamically.
This is useful when different headers or parameters are needed based on the uploaded data.

The relevant event for this is: [REQUEST_PRE_SEND](../../api/uploader#uploader_eventsrequest_pre_send) and the relevant hook: 
[useRequestPreSend](../../api/hooks/useRequestPreSend).

The handler (event or hook) receives an object:  ```{ items, options }```

The _items_ array contains the (batch) items that are going to be uploaded in the next request.
The array will contain more than one item when grouping is configured (by default grouping is turned off).

:::note
Items info can be inspected and changes to the options can be made. 
The items array itself should not be modified. 
:::

The _options_ object contains the upload options attached to the batch the items belong to.
Options related to the upload can be changed, for example destination headers or params.
See Upload Options [documentation](../../api#props). 

The handler should return an object with either _items_ or _options_ or both,
in case a change was made. In case no change/addition was made the handler doesnt have to return anything.

For the _options_, the returned object will be merged into the data held by the uploader.
Therefore, it's possible to only return the new props.


The handler may return the response immediately or as a promise which resolves to the response


## Using event handler

```javascript

import React from "react";
import Uploady, { UPLOADER_EVENTS } from "@rpldy/uploady";

const MyApp = () => {
    const listeners = useMemo(() => ({

        //add a param (request field) that will be sent to the serve alongside the uploaded file
        [UPLOADER_EVENTS.REQUEST_PRE_SEND]: () => {
            //returned object can be wrapped with a promise
            return Promise.resolve({ 
            	    options: {
                        params: {
                            clientTime: Date.now()
                        }           
                     }
                 }); 
        }
    }, []));

    return <Uploady
                destination={{url: "https://my-server.com/upload"}}
                listeners={listeners}>
        {/* rest of my app */}
    </Uploady>
};
```

## Using hook

:::note 
A component using this hook should be wrapped by an &lt;Uploady&gt; component
:::

```javascript
    import { useRequestPreSend } from "@rpldy/uploady";

    const MyComponent = () => {
        //dynamically changed the HTTP method
        useRequestPreSend(({ items, options }) => {        	
            let method = options.method;

            if (options.destination.url.startsWith("https://put-server")) {
                method = "PUT";
            }            

            return {
                options: { method } //will be merged with the rest of the options 
            };  
        });

        //...    
    };
``` 
