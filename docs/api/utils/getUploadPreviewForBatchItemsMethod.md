---
id: getUploadPreviewForBatchItemsMethod
title: getUploadPreviewForBatchItemsMethod
tags: [utility, preview]
---

## Package

- **_[@rpldy/upload-preview](../../packages/rpldy-upload-preview)_**

## Installation

```bash npm2yarn
npm install @rpldy/upload-preview
```

## Details

The default way the UploadPreview component learns which items to show previews for is done by internally using the [useBatchStartListener](../uploady/README.md#usebatchstartlistener-event-hook) hook.
This means that for a batch that hasn't started uploading, because a previous batch hasn't finished or when `autoUpload = false`, the previews for the next batch will not be shown.

If there's a different event (or one completely custom) you want to listen to, for example: the [useBatchAddListener](../uploady/README.md#usebatchaddlistener-event-hook) hook, you can do that with `getUploadPreviewForBatchItemsMethod`.
With useBatchAddListener, the previews will be shown even for batches that hadn't started to upload yet.

This method expects a hook method as a parameter that will return a [batch](../../../README.md#batch)(-like) object with a `items` property as an array of [BatchItem](../../../README.md#batchitem)s.
It returns a UploadPreview component that will use the custom hook method to learn about the items to preview.

## Example

Create a custom UploadPreview components that shows previews earlier by listening to the [BATCH_ADD](../events#batchAdd) event, 
instead of [BATCH_START](../events#batchStart).

```jsx title="getUploadPreviewForBatchItemsMethod with Batch Add listener"
import React from "react";
import Uploady, { useBatchAddListener } from "@rpldy/uploady";
import { getUploadPreviewForBatchItemsMethod } from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";

const MyUploadPreview = getUploadPreviewForBatchItemsMethod(useBatchAddListener);

export const App = () => {
    return (
        <Uploady
            destination={{ url: "[upload-url]" }}
        >
            <div className="App">
                <UploadButton>Upload Files</UploadButton>
                <br />
  
                <MyUploadPreview
                    maxPreviewVideoSize={2}
                    fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
                />
            </div>
        </Uploady>
    );
}
```
