---
id: events
title: Events
---

The Uploader will trigger for batch and batch-item lifecycle events.

Registering to handle events can be done using the uploader's _on()_ and _once()_ methods.
Unregistering can be done using _off()_ or by calling the return value (function) of both _on()_ and _once()_.

:::info
See UPLOADER_EVENTS in [constants](../constants#uploaderEvents)
:::

```javascript
const batchAddHandler = (batch) => {};

const unregister = uploader.on(UPLOADER_EVENTS.BATCH_ADD, batchAddHandler);

unregister(); //is equivalent to the line below
uploader.off(UPLOADER_EVENTS.BATCH_ADD, batchAddHandler);
```

## BATCH_ADD {#batchAdd}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered when a new batch is added.

:::info
This event is _[cancellable](#cancellable-events)_
:::

## BATCH_START {#batchStart}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered when batch items start uploading

The handler can change data inside the items and in the options by returning different data than received.

:::info
This event is _[cancellable](#cancellable-events)_
:::

## BATCH_PROGRESS {#batchProgress}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered every time progress data is received from the upload request(s)

## BATCH_FINISH {#batchFinish}

- `Parameters`: _(batch, options: CreateOptions)_

Triggered when batch items finished uploading

## BATCH_CANCEL {#batchCancel}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered in case batch was cancelled from BATCH_START event handler

## BATCH_ABORT {#batchAbort}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered in case the batch was [aborted](../uploader#abortBatch)

## BATCH_ERROR {#batchError}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered in case the batch was failed with an error.
These errors will most likely occur due to invalid event handling.
For instance, by a handler (ex: BATCH_START) throwing an error.


## BATCH_FINALIZE {#batchFinalize}

`Parameters`: _(batch: Batch, options: CreateOptions)_

Triggered when all batch items have finished uploading or in case the batch was cancelled(abort) or had an error

:::note
This event can be relied on to be called regardless of how the batch finished
:::

## ITEM_START {#itemStart}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered when item starts uploading (just before)
For grouped uploads (multiple files in same xhr request) ITEM_START is triggered for each item separately

:::info
This event is _[cancellable](#cancellable-events)_
:::

## ITEM_FINISH {#itemFinish}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered when item finished uploading successfully

:::note
The server response can be accessed through the item's _uploadResponse_ property and status code through _uploadStatus_
:::

## ITEM_PROGRESS {#itemProgress}

`Parameters`: _(item: BatchItem)_

Triggered every time progress data is received for this file upload

:::note
progress info is accessed through the item's "completed" (percentage) and "loaded" (bytes) properties.
:::

## ITEM_CANCEL {#itemCancel}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered in case item was cancelled programmatically 

## ITEM_ERROR {#itemError}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered in case item upload failed

:::note
The server response can be accessed through the item's uploadResponse property.
:::

## ITEM_ABORT {#itemAbort}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered in case [abort](../uploader#abort) was called

## ITEM_FINALIZE {#itemFinalize}

`Parameters`: _(item: BatchItem, options: CreateOptions)_

Triggered for item when uploading is done due to: finished, error, cancel or abort
Use this event if you want to handle the state of the item being done for any reason.

:::note
This event can be relied on to be called regardless of how the item finished
:::

## REQUEST_PRE_SEND {#requestPreSend}

`Parameters`: _(items: BatchItem[], options: CreateOptions)_

Triggered before a group of items is going to be uploaded
Group will contain a single item unless "grouped" option is set to true.

Handler receives the item(s) in the group and the upload options that were used.
The handler can change data inside the items and in the options by returning different data than received.
See this [guide](../../guides/DynamicParameters) for more details.

:::info
This event is _[cancellable](#cancellable-events)_
:::

## ALL_ABORT {#allAbort}

`No parameters`: _()_

Triggered when abort is called without an item id (abort all)

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

## Chunk Events {#chunk-events}

### CHUNK_START {#chunkStart}

`Parameters`: _(data: ChunkStartEventData)_

Triggered when a chunk begins uploading as part of a chunked upload

- See: [ChunkStartEventData](../types#chunkstarteventdata)

### CHUNK_FINISH {#chunkFinish}

`Parameters`: _(data: ChunkFinishEventData)_

Triggered when a chunk finishes uploading as part of a chunked upload

- See: [ChunkFinishEventData](../types#chunkfinisheventdata)

## RETRY_EVENT {#retryEvent}

Triggered when files are re-added to the queue for retry.

`Parameters`: _({ uploads: BatchItem[], options?: UploadOptions })_

:::note
uploads is an array of batch items.
:::

:::note
options are the (optional) upload options that are passed to the retry call
:::

## Tus Events {#tus-events}

### RESUME_START {#resumeStart}

`Parameters`: _(data: ResumeStartEventData)_

Triggered before the (HEAD) request is issued on behalf of a potentially resumeable upload.

- See: [ResumeStartEventData](../types#resumestarteventdata)

:::info
This event is _[cancellable](#cancellable-events)_
:::

Cancelling the request will not abort the entire upload, but rather cancel the fetching of resume info.
