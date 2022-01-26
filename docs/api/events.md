---
id: events
title: Events
---

The Uploader will trigger for batch and batch-item lifecycle events.

Registering to handle events can be done using the uploader's _on()_ and _once()_ methods.
Unregistering can be done using _off()_ or by calling the return value (function) of both _on()_ and _once()_.

:::info
See UPLOADER_EVENTS in [constants](constants#uploaderEvents)
:::

```javascript
const batchAddHandler = (batch) => {};

const unregister = uploader.on(UPLOADER_EVENTS.BATCH_ADD, batchAddHandler);

unregister(); //is equivalent to the line below
uploader.off(UPLOADER_EVENTS.BATCH_ADD, batchAddHandler);
```

## BATCH_ADD

Triggered when a new batch is added.

- Parameters: _(batch, uploadOptions)_

:::info
This event is _[cancellable](#cancellable-events)_
:::

## BATCH_START {#batchStart}

Triggered when batch items start uploading

- Parameters: _(batch)_

:::info
This event is _[cancellable](#cancellable-events)_
:::

## BATCH_PROGRESS {#batchProgress}

Triggered every time progress data is received from the upload request(s)

- Parameters: _(batch)_

## BATCH_FINISH {#batchFinish}

Triggered when batch items finished uploading

- Parameters: _(batch)_

## BATCH_CANCEL {#batchCancel}

Triggered in case batch was cancelled from BATCH_START event handler

- Parameters: _(batch)_

## BATCH_ABORT {#batchAbort}

Triggered in case the batch was [aborted](uploader#abortBatch)

- Parameters: _(batch)_

### UPLOADER_EVENTS.BATCH_ERROR {#batchError}

Triggered in case the batch was failed with an error.
These errors will most likely occur due to invalid event handling.
For instance, by a handler (ex: BATCH_START) throwing an error.

- Parameters: _(batch)_

### UPLOADER_EVENTS.BATCH_FINALIZE {#batchFinalize}

Triggered when all batch items have finished uploading or in case the batch was cancelled(abort) or had an error

- Parameters: _(batch)_

### UPLOADER_EVENTS.ITEM_START {#itemStart}

Triggered when item starts uploading (just before)
For grouped uploads (multiple files in same xhr request) ITEM_START is triggered for each item separately

- Parameters: _(item)_

:::info
This event is _[cancellable](#cancellable-events)_
:::

### UPLOADER_EVENTS.ITEM_FINISH {#itemFinish}

Triggered when item finished uploading successfully

- Parameters: _(item)_

:::note
The server response can be accessed through the item's _uploadResponse_ property and status code through _uploadStatus_
:::

### UPLOADER_EVENTS.ITEM_PROGRESS {#itemProgress}

Triggered every time progress data is received for this file upload

- Parameters: _(item)_

:::note
progress info is accessed through the item's "completed" (percentage) and "loaded" (bytes) properties.
:::

### UPLOADER_EVENTS.ITEM_CANCEL {#itemCancel}

Triggered in case item was cancelled programmatically 

- Parameters: _(item)_

### UPLOADER_EVENTS.ITEM_ERROR {#itemError}

Triggered in case item upload failed

- Parameters: _(item)_

:::note
The server response can be accessed through the item's uploadResponse property.
:::

### UPLOADER_EVENTS.ITEM_ABORT {#itemAbort}

Triggered in case [abort](uploader#abort) was called

- Parameters: _(item)_

### UPLOADER_EVENTS.ITEM_FINALIZE {#itemFinalize}

Triggered for item when uploading is done due to: finished, error, cancel or abort
Use this event if you want to handle the state of the item being done for any reason.

- Parameters: _(item)_

### UPLOADER_EVENTS.REQUEST_PRE_SEND {#requestPreSend}

Triggered before a group of items is going to be uploaded
Group will contain a single item unless "grouped" option is set to true.

Handler receives the item(s) in the group and the upload options that were used.
The handler can change data inside the items and in the options by returning different data than received.
See this [guide](../guides/DynamicParameters.md) for more details.

- Parameters: _(items, options)_

:::info
This event is _[cancellable](#cancellable-events)_
:::

### UPLOADER_EVENTS.ALL_ABORT {#allAbort}

Triggered when abort is called without an item id (abort all)

- no parameters

## Cancellable Events {#cancellable-events}

These are events that allow the client to cancel their respective upload object (batch or batch-item)
To cancel the upload, the handler must return (boolean) false.

```javascript
uploader.on(UPLOADER_EVENTS.ITEM_START, (item) => {
    let result;
    
    if (item.file.name.endsWith(".xml")) {
        result = false; //only false will cause a cancel.
    }

    return result;
});
```
