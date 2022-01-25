---
id: entities
title: Entities
---
## Batch

When a file or files are handed over to the uploader, they are considered to be a batch.
The items created to represent each file (or string in case of URLs) are available from the `items` property.

```typescript

type Batch = {
    id: string;
    uploaderId: string;
    items: BatchItem[];
    state: BATCH_STATES;
    completed: number;
    loaded: number;
    orgItemCount: number;
    additionalInfo: string | null;
};
```

See [BATCH_STATES](constants#batchStates) 

## BatchItem 

There are two types of items that can be uploaded: File and URL (String).
Therefore, there are two possible types of BatchItem:

```typescript

interface BatchItemBase {
    id: string;
    batchId: string;
    state: FILE_STATES;
    uploadResponse?: any;
    uploadStatus: number;
    completed: number;
    loaded: number;
    recycled: boolean;
    previousBatch?: string;
}

export type FileLike = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface BatchUrl extends BatchItemBase {
  url: string;
}

interface BatchFile extends BatchItemBase {
  file: FileLike;
}

```

See [FILE_STATES](constants#fileStates) 
