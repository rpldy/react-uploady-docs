---
id: types
title: Types
---

:::info
For Batch and BatchItem see: [Entities Page](../entities)
:::

## UploadyContextType {#uploadyContextType}

```typescript
type UploadyContextType = {
    getInternalFileInput: () => InputRef | undefined;
    setExternalFileInput: (inputRef: InputRef) => void;
    getIsUsingExternalInput: () => boolean;
    hasUploader: () => boolean;
    showFileUpload: (options?: UploadOptions) => void;
    upload: AddUploadFunction;
    processPending: (uploadOptions?: UploadOptions) => void;
    clearPending: () => void;
    setOptions: (options: CreateOptions) => void;
    getOptions: () => CreateOptions;
    on: OnAndOnceMethod;
    once: OnAndOnceMethod;
    off: OffMethod;
    abort: (id?: string) => void;
    abortBatch: (id: string) => void;
    getExtension: (name: unknown) => Record<string, unknown>;
};
```

## Destination

```typescript
type Destination = {
    url?: string;
    filesParamName?: string;
    params?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    method?: string;
};
```

## FormatServerResponseMethod

```typescript
type FormatServerResponseMethod = (response: string, status: number, headers: Record<string, string> | undefined) => unknown;
```

## FormatParamGroupNameMethod

```typescript
type FormatParamGroupNameMethod = (index: number, paramName: string) => string;
```

## FileFilterMethod

```typescript
type FileFilterMethod = (file: File | string, index: number, files: File[] | string[]) => boolean | Promise<boolean | undefined> | undefined;
```

## IsSuccessfulCall

```typescript
export type IsSuccessfulCall = (xhr: XMLHttpRequest) => boolean;
```


## SendOptions

```typescript
interface SendOptions  {
    method: string;
    paramName: string;
    params?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    forceJsonResponse?: boolean;
    withCredentials?: boolean;
    formatGroupParamName?: FormatParamGroupNameMethod;
    sendWithFormData?: boolean;
    formDataAllowUndefined?: boolean;
    formatServerResponse?: FormatServerResponseMethod;
    isSuccessfulCall?: IsSuccessfulCall;
}
```

## UploadInfo

```typescript
type UploadInfo = string | FileLike | BatchItem;
```
## UploadAddMethod

```typescript
type UploadAddMethod = (files: UploadInfo | UploadInfo[], addOptions?: UploadOptions) => Promise<void>
```

## UploaderType

```typescript
export type UploaderType = {
    id: string;
    update: (updateOptions: CreateOptions) => UploaderType;
    add: UploadAddMethod;
    upload: (uploadOptions?: UploadOptions) => void;
    abort: (id?: string) => void;
    abortBatch: (id: string) => void;
    getOptions: () => CreateOptions;
    getPending: () => PendingBatch[];
    clearPending: () => void;
    on: OnAndOnceMethod;
    once: OnAndOnceMethod;
    off: OffMethod;
    registerExtension: RegisterExtensionMethod;
    getExtension: (name: unknown) => Record<string, unknown>;
}
```

## UploaderListeners

```typescript
type UploaderListeners = { [key: string]: EventCallback };
```

## UploadOptions

```typescript
interface UploadOptions extends Partial<SendOptions>{
    autoUpload?: boolean;
    clearPendingOnAdd?: boolean;
    formatGroupParamName?: FormatParamGroupNameMethod;
    grouped?: boolean;
    maxGroupSize?: number;
    fileFilter?: FileFilterMethod;
    destination?: Destination;
    fastAbortThreshold?: number;
}
```

## UploaderEnhancer

```typescript
type UploaderEnhancer = (uploader: UploaderType, trigger: Trigger<any>) => UploaderType;
```

## OnProgress

```typescript
type OnProgress = (e: SenderProgressEvent, objs: Record<string, unknown>[]) => void;
```

## UploadData

```typescript
type UploadData = {
    status: number;
    state: FILE_STATES;
    response: any;
};
```

See: [FILE_STATES](../constants#fileStates)

## SendResult

```typescript
type SendResult = {
    request: Promise<UploadData>;
    abort: () => boolean;
    senderType: string;
};
```

## SendMethod

```typescript
type SendMethod = (item: BatchItem[], url: string | undefined, options: SendOptions, onProgress?: OnProgress) => SendResult;
```

## CreateOptions

```typescript
interface CreateOptions extends UploadOptions {
  enhancer?: UploaderEnhancer;
  concurrent?: boolean;
  maxConcurrent?: number;
  send?: SendMethod;
}
```

## InputRef

```typescript
type InputRef = { current: HTMLInputElement | null };
```

## EventHook

```typescript
type EventHook<T> = (cb: (obj: T, options: CreateOptions) => void, id?: string) => void;
```

## CancellableHook

```typescript
type CancellableHook<T> = (cb: (obj: T, options: CreateOptions) => boolean | void | Promise<boolean | void>, id?: string) => void;
```

## ItemCancellableEventHook

```typescript
type ItemCancellableEventHook = CancellableHook<BatchItem>;
```

## EventHookWithState

```typescript
type EventHookWithState<T> = ((cb?: (obj: T) => void, id?: string) => T) & ((id?: string) => T);
```

## BatchEventHook

```typescript
type BatchEventHook = EventHook<Batch>;
```

## BatchCancellableEventHook

```typescript
type BatchCancellableEventHook = CancellableHook<Batch>;
```

## ItemEventHook

```typescript
type ItemEventHook = EventHook<BatchItem>;
```

## ItemCancellableEventHook

```typescript
type ItemCancellableEventHook = CancellableHook<BatchItem>;
```

## ItemEventHookWithState

```typescript
type ItemEventHookWithState = EventHookWithState<BatchItem>;
```

## ChunkEventData

```typescript
type ChunkEventData = {
    id: string;
    start: number;
    end: number;
    index: number;
    attempt: number;
};
```

## ChunkStartEventData

```typescript
type ChunkStartEventData = {
    item: BatchItem;
    chunk: ChunkEventData;
    chunkItem: BatchItem;
    sendOptions: SendOptions;
    url: string;
    remainingCount: number,
    totalCount: number,
    onProgress: OnProgress
};
```

## ChunkFinishEventData

```typescript
type ChunkFinishEventData = {
    item: BatchItem;
    chunk: ChunkEventData;
    uploadData: UploadData;
};
```

## ChunkedOptions

```typescript
interface ChunkedOptions {
    chunked?: boolean;
    chunkSize?: number;
    retries?: number;
    parallel?: number;
}
```

## ChunkedUploadyProps

```typescript
interface ChunkedUploadyProps extends UploadyProps, ChunkedOptions {}
```

## TusOptions

```typescript
interface TusOptions extends ChunkedOptions {
    version?: string;
    featureDetection?: boolean;
    featureDetectionUrl?: string | null;
    onFeaturesDetected?: (extensions: string[]) => TusOptions | void;
    resume?: boolean;
    deferLength?: boolean;
    overrideMethod?: boolean;
    sendDataOnCreate?: boolean;
    storagePrefix?: string;
    lockedRetryDelay?: number;
    forgetOnSuccess?: boolean;
    ignoreModifiedDateInStorage?: boolean;
}
```

## TusUploadyProps

```typescript
interface TusUploadyProps extends UploadyProps, TusOptions {}
```

## ResumeStartEventData

```typescript
interface TusResumeStartEventData {
    url: string;
    item: BatchItem;
    resumeHeaders?: Record<string, string>;
}
```

## TusResumeStartEventResponse

```typescript
type TusResumeStartEventResponse = void | boolean | {
    url?: string;
    resumeHeaders?: Record<string, string>;
};
```


## PasteUploadData

```typescript
type PasteUploadData = { count: number };
```

## PasteUploadHandler

```typescript
type PasteUploadHandler = (data: PasteUploadData) => void;
```

## PasteCompProps

```typescript
interface PasteCompProps {
  className?: string;
  id?: string;
  children?: JSX.Element[] | JSX.Element | string;
  extraProps?: Record<string, unknown>;
  onPasteUpload?: PasteUploadHandler,
}
```

## RemovePreviewMethod 

```typescript
type RemovePreviewMethod = (id: string) => void;
```

## PreviewItem

```typescript
type PreviewItem = {
    id: string;
    url: string;
    name: string;
    type: PreviewType;
    isFallback: boolean;
    removePreview: RemovePreviewMethod;
    props: Record<string, unknown>;
};
```

## MockOptions

```typescript
interface MockOptions {
    delay?: number;
    fileSize?: number;
    progressIntervals?: number[];
    response?: any;
}
```

## PreSendData

```typescript
export interface PreSendData {
    items: BatchItem[];
    options: CreateOptions;
}
```

## PreSendResponse

```typescript
type PreSendResponse = { items?: BatchItem[]; options?: CreateOptions } | boolean | void;
```

## PreviewOptions

```typescript
type FallbackMethod = (file: FileLike) => FallbackType | void;

enum PreviewType {
	IMAGE = "image",
	VIDEO = "video",
}

type PreviewComponentPropsMethod = (item: BatchItem, url: string, type: PreviewType) => Record<string, unknown>;

type PreviewComponentPropsOrMethod = Record<string, unknown> | PreviewComponentPropsMethod;

interface PreviewOptions {
	rememberPreviousBatches?: boolean;
	loadFirstOnly?: boolean;
	maxPreviewImageSize?: number;
	maxPreviewVideoSize?: number;
	fallbackUrl?: string | FallbackMethod;
	imageMimeTypes?: string[];
	videoMimeTypes?: string[];
	previewComponentProps?: PreviewComponentPropsOrMethod;
}
```
