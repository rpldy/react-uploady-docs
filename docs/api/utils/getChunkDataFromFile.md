---
id: getChunkDataFromFile
title: "getChunkDataFromFile"
pagination_label: "getChunkDataFromFile"
sidebar_label: "🪛 getChunkDataFromFile"
tags: [chunk, utility]
---

## Package

- **_[@rpldy/chunked-sender](../../../packages/rpldy-chunked-sender)_**


## Installation

```bash npm2yarn
npm install @rpldy/chunked-sender
```

## Details

```typescript
type getChunkDataFromFile = (file: FileLike, start: number, end: number) => Blob | undefined
```
Slices a File into a blob starting from byte `start` and ending in byte `end`
