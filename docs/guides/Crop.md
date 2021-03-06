---
id: "Crop"
description: "tapping into the upload flow of Uploady to add Crop before upload"
tags: [crop, dynamic, preview]
---

# Crop

Cropping an image before its uploaded is a common task but not necessarily easy to accomplish.
With Uploady, its actually quite simple. This guide shows how to do this by tapping into the upload flow of Uploady.
After the user chooses the file(s) to upload, the [REQUEST_PRE_SEND](../../api/uploader#uploader_eventsrequest_pre_send) event can be used to augment/change the data that will be sent to the server.
This is the perfect time to allow the user to crop their image and replace the selected file with the crop action result.

For this guide, we use [@rpldy/upload-preview](../../packages/rpldy-upload-preview) together with the [withRequestPreSendUpdate](../../api/hocs/withRequestPreSendUpdate) HOC.
_upload-preview_ allows us to use a custom preview component and _withRequestPreSendUpdate_ makes it easy to intercept the upload data and change it when we're ready.

Use of upload-preview isn't mandatory, of course. It simply makes it easier as it loads a preview of the uploaded image for us.
It also provides the batch item id which is needed for _withRequestPreSendUpdate_.

## Code

First we define our preview with crop component, wrapping it with _withRequestPreSendUpdate_.
We use [react-image-crop](https://www.npmjs.com/package/react-image-crop) for the cropping functionality.

```javascript
import React, { useState, useCallback, useRef } from "react";
import ReactCrop from "react-image-crop";
import { withRequestPreSendUpdate } from "@rpldy/uploady";
import { PREVIEW_TYPES } from "@rpldy/upload-preview";
import cropImage from "./my-fancy-canvas-cropper";

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
	const { url, isFallback, updateRequest, requestData } = props;
	const [crop, setCrop] = useState(null);
	const imgRef = useRef(null);
	
	const onUploadCrop = useCallback(async() => {
		if (updateRequest && (crop?.height || crop?.width)) {
			requestData.items[0].file = await cropImage(imgRef.current, requestData.items[0].file, crop);;
			updateRequest({ items: requestData.items });
		}
	}, [imgRef, requestData, updateRequest, crop]);

	const onLoad = useCallback((img) => {
		imgRef.current = img;
	}, []);
	
	return isFallback || type !== PREVIEW_TYPES.IMAGE ?
		<img src={url} alt="fallback img"/> :
		<>			
            {requestData ? <ReactCrop
                src={url}                
                crop={crop}
                onImageLoaded={onLoad}
                onChange={setCrop}
                onComplete={setCrop}
            /> : null}		
			<button style={{ display: updateRequest && crop ? "block" : "none" }}
					onClick={onUploadCrop}>
				Upload Cropped
			</button>
		</>;
});

```

:::note 
When a fallback image is used (ex: when uploading non-image) we dont render the crop.
:::

:::note
Implementation of the cropImage function can be found [here](https://codesandbox.io/s/react-uploady-crop-and-upload-uyl4e?file=/src/cropImage.js).
:::

Then we define our "app" with Uploady, an UploadButton and UploadPreview.
We use our own _ItemPreviewWithCrop_ as the PreviewComponent instead of the default one _UploadPreview_ provides.
  
```javascript
import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

export const App = () => {
	return <Uploady
		multiple={false}
		destination={{ url: "my-server.com/upload" }}>

		<UploadButton/>

		<UploadPreview
			rememberPreviousBatches
			PreviewComponent={ItemPreviewWithCrop}
            fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
        />
		
	</Uploady>;
};
```   
