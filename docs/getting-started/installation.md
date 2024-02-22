---
id: installation
title: Installation
description: How to install react-uploady to get started
sidebar_position: 0
---

## Requirements

React-Uploady defines react & react-dom as peer dependencies with the minimum version of: __16.8.0__

## Install

React-uploady is a mono-repo, and as such provides multiple packages with different functionality.

For React applications, at the very least, you will need the Uploady provider:

```bash npm2yarn
npm install @rpldy/uploady
```

If you wish to use the uploading mechanism (no UI components), at the very least, you will need the Uploader:

```bash npm2yarn
npm install @rpldy/uploader
```

After that, you can add additional packages as needed.

## Available Packages

### Main Packages

* [@rpldy/uploader](../../packages/rpldy-uploader) - The processing and queuing engine
* [@rpldy/uploady](../../packages/rpldy-uploady) - The context provider for react-uploady and hooks (lots of hooks)

### UI Packages

* [@rpldy/upload-button](../../packages/rpldy-upload-button) - Upload button component and asUploadButton HOC
* [@rpldy/upload-preview](../../packages/rpldy-upload-preview) - Image&video preview component for files being uploaded
* [@rpldy/upload-url-input](../../packages/rpldy-upload-url-input) - Input component to send URL as upload info (ex: [Cloudinary](https://cloudinary.com/documentation/upload_images#auto_fetching_remote_images))
* [@rpldy/upload-drop-zone](../../packages/rpldy-upload-drop-zone) - (Drag&)Drop zone to upload files and folder content
* [@rpldy/upload-paste](../../packages/rpldy-upload-paste) - Easily add paste-to-upload to React components
* [@rpldy/retry-hooks](../../packages/rpldy-retry-hooks) - Hooks to interact with the retry mechanism

### Providers

* [@rpldy/chunked-uploady](../../packages/rpldy-chunked-uploady) - Wrapper for Uploady with support for chunked uploads
* [@rpldy/tus-uploady](../../packages/rpldy-tus-uploady) - Wrapper for Uploady with support for tus(resumable) uploads
* [@rpldy/native-uploady](../../packages/rpldy-native-uploady) - Uploay for React Native (no react-dom)

### Senders

* [@rpldy/sender](../../packages/rpldy-sender) - Uploady's main file sender (XHR)
* [@rpldy/chunked-sender](../../packages/rpldy-chunked-sender) - add chunked uploads support on top of the XHR Sender
* [@rpldy/tus-sender](../../packages/rpldy-tus-sender) - add TUS resumable upload support
* [@rpldy/mock-sender](../../packages/rpldy-mock-sender) - use Mock sender for testing purposes

### Extras

* [@rpldy/retry](../../packages/rpldy-retry) - Add support for retrying failed uploads

### Internal Packages

* [@rpldy/shared](../../packages/rpldy-shared) - Internal set of utils+types that all packages require
* [@rpldy/shared-ui](../../packages/rpldy-shared-ui) - Internal set of utils+types that all UI packages require
* [@rpldy/life-events](../../packages/rpldy-life-events) - provides **cancellable** pub/sub "events"
* [@rpldy/safe-storage](../../packages/rpldy-safe-storage) - safe (don't throw) versions of local and session storage
* [@rpldy/simple-state](../../packages/rpldy-simple-state) - deep proxy object, so it's only updateable through an update method


## UMD Bundles

React-uploady is also available on CDNs such as [unpkg.com](https://unpkg.com) and [jsdelivr.com](https://www.jsdelivr.com/)

See this [guide](../../guides/UMD) for more information on how to use.

### jsDelivr

| Bundle                      | URL                                                                                          |
|-----------------------------|----------------------------------------------------------------------------------------------|
| core                        | https://cdn.jsdelivr.net/npm/@rpldy/uploader/lib/umd/rpldy-core.umd.min.js                   |
| core + ui                   | https://cdn.jsdelivr.net/npm/@rpldy/uploady/lib/umd/rpldy-ui-core.umd.min.js                 |
| core + ui + chunked support | https://cdn.jsdelivr.net/npm/@rpldy/chunked-uploady/lib/umd/rpldy-ui-core-chunked.umd.min.js |
| everything                  | https://cdn.jsdelivr.net/npm/@rpldy/uploady/lib/umd/rpldy-all.umd.min.js                     |

You will most likely need the polyfill (core js) bundle as well (load it first):

- core bundles -> https://cdn.jsdelivr.net/npm/@rpldy/uploady/lib/umd/polyfills-bundle.js
- everything bundle -> https://cdn.jsdelivr.net/npm/@rpldy/uploady/lib/umd/polyfills-all-bundle.js

### unpkg

| Bundle                      | URL                                                                               |
|-----------------------------|-----------------------------------------------------------------------------------|
| core                        | https://unpkg.com/@rpldy/uploader/lib/umd/rpldy-core.umd.min.js                   |
| core + ui                   | https://unpkg.com/@rpldy/uploady/lib/umd/rpldy-ui-core.umd.min.js                 |
| core + ui + chunked support | https://unpkg.com/@rpldy/chunked-uploady/lib/umd/rpldy-ui-core-chunked.umd.min.js |
| everything                  | https://unpkg.com/@rpldy/uploady/lib/umd/rpldy-all.umd.min.js                     |

You will most likely need the polyfill (core js) bundle as well (load it first):

- core bundles -> https://unpkg.com/@rpldy/uploady/lib/umd/polyfills-bundle.js
- everything bundle -> https://unpkg.com/@rpldy/uploady/lib/umd/polyfills-all-bundle.js

:::note
Unpkg does a redirect to the latest version in case the URL doesn't already contain it. So don't copy any of the URLs above into your code.
Instead, load them in the browser first and then copy the final URL from there (after the redirect).  
:::
