---
id: concepts
title: Important Concepts
description: "Important concepts to learn about when using React-Uploady. Explains the different entities used in the upload process"
---

### Upload Options

These are the options that are passed to the [uploader](../../api/uploader) to configure aspects of the upload process.
For example, whether files can be grouped in a single request (by default, no).

Upload Options are typically passed to the [Uploady](../../api) instance. But these can be overriden. 
For example, by props passed to the [upload button](../../api/components/uploadButton).
Or even during [upload processing](../../guides/DynamicParameters).

### Destination

Passed as a part of the upload options. It's an object that is used to configure the end-point where the files will be uploaded to.
Its type is defined [here](../../api/types/#destination).

See more information in the [Uploady](../../api#props) section.

At the very least, a destination should contain a URL property with the server endpoint.

### Sender

Internally Uploady uses a sender to (typically) send the user's files up to the server.
The sender's job is to take the data (ie: File) and send it to the destination's URL (endpoint).

Sender should be able to supply progress information and an abort method to the Uploader.

By default, an XHR sender is used.

However, other senders can be configured. This is typically done using the [send prop](../../api#send) passed to Uploady
or when initializing the uploader.

### Enhancer

See: [UploaderEnhancer](../../api/types#uploaderenhancer)

Enhancers are functions that can enhance an uploader instance. They are also passed as part of the options given to the Uploady instance.

As they are applied when the uploader instance is created, they can change the way uploader does things or pass different defaults.

See this [guide](../../guides/UploaderEnhancers) for practical information and sample code.

### Batch

When a file or files are handed over to the uploader, they are considered to be a batch.
This batch will have its own lifetime [events](../../api/uploader#batch-events).

### BatchItem

Each file (or URL) added to the uploader are wrapped by a BatchItem object. They will have a unique ID within the life-time of the uploader instance.
A BatchItem has its own lifetime [events](../../api/uploader#batch-item-events).

### Events

Internally, Uploady uses a pub/sub mechanism to pass info from one part to another.
For example when an upload begins or fails. Many of these events are also exposed publicly and can be regsitered to.
Most of the events are related to either a batch (ex: batch upload started) or to a batch item (ex: batch item upload failed) 

### Abort 

Also referred to as "Cancel".

With an item ID, it is possible to abort a single item. 

With a batch ID, it is possible to abort all files that are part of it.

It is also possible to abort all files currently uploading.

See the [Upload Queue Guide](../../guides/UploadQueue) for examples. 

### Retry

When a file is marked as failed (error) or cancelled (abort), it is possible to retry the upload using the appropriate method.

Retrying can be done on a single item, batch, or all failed uploads.
See [@rpldy/retry](../../packages/rpldy-retry).
