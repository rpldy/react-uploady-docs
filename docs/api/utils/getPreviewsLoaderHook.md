---
id: getPreviewsLoaderHook
title: "getPreviewsLoaderHook"
pagination_label: "getPreviewsLoaderHook"
sidebar_label: "🪛 getPreviewsLoaderHook"
tags: [utility, preview]
---

## Package

- **_[@rpldy/upload-preview](../../../packages/rpldy-upload-preview)_**

## Installation

```bash npm2yarn
npm install @rpldy/upload-preview
```

## Details

The UploadPreview component allows for a lot of customization by providing your own component to render each single preview.
This is mostly enough since it doesn't render anything else beyond the preview items - no surrounding element/component.

However, in case you wish even more control, you can create your own hook from the batch method you wish to use
(typically either `useBatchAddListener` or `useBatchStartListener`).

The hook created by `getPreviewsLoaderHook` receives [PreviewOptions](../../types#previewoptions) and can also be called without any param.

## Example

```jsx title="getPreviewsLoaderHook with Batch Add listener"
import React from "react";
import Uploady, { useBatchAddListener } from "@rpldy/uploady";
import { getPreviewsLoaderHook } from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";

const useUploadPreviewData = getPreviewsLoaderHook(useBatchAddListener);

const CustomUploadPreview = () => {
	const { previews } = useBatchAddPreviewsData({ rememberPreviousBatches: true });

	return (
		previews.map((p) =>
		<div key={p.id}>
			{p.name}
			<img src={p.url}/>
		</div>)
    );
};

export const App = () => {
	return (
		<Uploady
			destination={{ url: "[upload-url]" }}
		>
			<div className="App">
				<UploadButton>Upload Files</UploadButton>
				<br />
				<CustomUploadPreview/>
			</div>
		</Uploady>
	);
}


```
