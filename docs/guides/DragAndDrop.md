---
id: "DragAndDrop"
description: "How to upload files using drag and drop"
tags: [drag&drop]
---

# Drag and Drop

D&D uploads are a great way to allow users to upload files to your server.

react-uploady offers the simple, yet useful, [@rpldy/upload-drop-zone](../../packages/rpldy-upload-drop-zone) to initiate uploads for individual files or even directiories.

If you wish to use a 3rd party library to manage the D&D interaction while using Uploady, you can do so easily.

## Example

This example shows how to use the popular react-dnd library.

It uses the [Uploady Context API](../../api/context#api) to initiate the upload when the file is dropped.

```javascript
import React from "react";
import { DndProvider, useDrop } from "react-dnd";
import Backend, { NativeTypes } from "react-dnd-html5-backend";
import Uploady, { useUploady } from "@rpldy/uploady";

const DropZone = () => {
    const { upload } = useUploady();

    const [{ isDragging }, dropRef] = useDrop({
        accept: NativeTypes.FILE,
        collect: ((monitor) => ({
            isDragging: !!monitor.isOver()
        })),
        drop: (item) => { 					 					
            upload(item.files);						
        },
    });

    return <div ref={dropRef} className={isDragging ? "drag-over" : ""}>       
        <p>Drop File(s) Here</p>       
    </div>;
};

export const MyApp = () => {
    return <DndProvider backend={Backend}>
        <Uploady {...}>

            <DropZone/>
        </Uploady>
    </DndProvider>;
};
```
