# Chrome Extension

1. manifest.json
the configuration file for your extension 

```js
{
    // Required
    manifest_version,
    name,
    version
}
```
2. service worker
Extension service workers are an extension's central event handler, cannot access the DOM

```js
{
    // Specifies the JavaScript file containing the extension's service worker, which acts as an event handler
    "background" : {
        service_worker : service-worker.js,
        type : module
    }
    
}
```
3. action
To use the chrome.action API, specify a "manifest_version" of 3 and include the "action" key in your manifest file

```js
{
    action : {}
}
```
4. permissions
Enables use of particular extension APIs

```js
{
    permissions : []
}
```
5. host_permissions
Lists the web pages your extension is allowed to interact with, defined using URL match patterns.

```js
{
    host_permissions : [
        "http://*/*",
        "https://*/*"
    ]
}
```
6. popup

```js
{
    action: {
        default_popup: index.html // no inline scripting
    }
}
```
