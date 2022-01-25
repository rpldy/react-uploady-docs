---
id: types
title: Types
---

For Batch and BatchItem see: [Entities Page](entities)

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

## InputRef

```typescript
type InputRef = { current: HTMLInputElement | null };
```
