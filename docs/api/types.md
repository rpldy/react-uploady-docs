---
id: types
title: Types
---

For Batch and BatchItem see: [Entities Page](entities)


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
}
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
}
```

## CreateOptions

```typescript
export interface CreateOptions extends UploadOptions {
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

## ItemCancellableEventHook

```typescript
type ItemCancellableEventHook = CancellableHook<BatchItem>;
```

## CancellableHook

```typescript
type CancellableHook<T> = (cb: (obj: T) => boolean | void, id?: string) => void;
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
