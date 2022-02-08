---
id: constants
title: Constants
---

## BATCH_STATES {#batchStates}

Package: **_[@rpldy/uploader](../../packages/rpldy-uploader)_**, **_[@rpldy/uploady](../../packages/rpldy-uploady)_**

The different values [Batch](../entities#batch).state can have. 

```typescript
enum BATCH_STATES {
    PENDING = "pending",
    ADDED = "added",
    PROCESSING = "processing",
    UPLOADING = "uploading",
    CANCELLED = "cancelled",
    FINISHED = "finished",
    ABORTED = "aborted",
    ERROR = "error",
}
```


## FILE_STATES {#fileStates}

Package: **_[@rpldy/uploader](../../packages/rpldy-uploader)_**, **_[@rpldy/uploady](../../packages/rpldy-uploady)_**

The different values [BatchItem](../entities#batchitem).state can have.

```typescript

enum FILE_STATES {
    PENDING = "pending",
    ADDED = "added",
    UPLOADING = "uploading",
    CANCELLED = "cancelled",
    FINISHED = "finished",
    ERROR = "error",
    ABORTED = "aborted",
}
```

## UPLOADER_EVENTS {#uploaderEvents}

Package: **_[@rpldy/uploader](../../packages/rpldy-uploader)_**, **_[@rpldy/uploady](../../packages/rpldy-uploady)_**

```typescript
enum UPLOADER_EVENTS {
    BATCH_ADD = "BATCH-ADD",
    BATCH_START = "BATCH-START",
    BATCH_PROGRESS = "BATCH_PROGRESS",
    BATCH_FINISH = "BATCH-FINISH",
    BATCH_ABORT = "BATCH-ABORT",
    BATCH_CANCEL = "BATCH-CANCEL",
    BATCH_ERROR = "BATCH-ERROR",
    BATCH_FINALIZE = "BATCH-FINALIZE",

    ITEM_START = "FILE-START",
    ITEM_CANCEL = "FILE-CANCEL",
    ITEM_PROGRESS = "FILE-PROGRESS",
    ITEM_FINISH = "FILE-FINISH",
    ITEM_ABORT = "FILE-ABORT",
    ITEM_ERROR = "FILE-ERROR",
    ITEM_FINALIZE = "FILE-FINALIZE",

    REQUEST_PRE_SEND = "REQUEST_PRE_SEND",

    ALL_ABORT =  "ALL_ABORT",
}
```

## CHUNK_EVENTS

Package: **_[@rpldy/chunked-sender](../../packages/rpldy-chunked-sender)_**, **_[@rpldy/chunked-uploady](../../packages/rpldy-chunked-uploady)_**

```typescript
enum CHUNK_EVENTS {
    CHUNK_START = "CHUNK_START",
    CHUNK_FINISH = "CHUNK_FINISH",
}
```

## PREVIEW_TYPES {#previewTypes}

Package: **_[@rpldy/upload-preview](../../packages/rpldy-upload-preview)_**

```typescript
enum PreviewType {
    IMAGE = "image",
    VIDEO = "video",
}
```

## CHUNKING_SUPPORT {#chunkingSupport}

Will be `true` if the browser supports chunking (Blob.slice)

```typescript
type CHUNKING_SUPPORT = boolean 
```
