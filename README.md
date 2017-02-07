# How to build, run and debug

## Import dependencies

After checking out sources you need to run the following command to download dependencies:
```
npm install
```
Then this command should be run only if you￿'ve removed node_modules or add/change dependencies in package.json

## Build

To build project run:
```
npm run build
```
Compiled Javascript will be placed to build folder with rewritting old files. Build doesn￿'t clean the build folder, so
if you need to do clean up before next build, just remove the build folder.

## Setting environment variables

Environment variables like MICROSOFT_APP_ID are described in .env file.

## Start app

```
node build/app.js
```

## Start with remote debug

```
node --debug-brk=5858 build/app.js
```

## Run and debug from IntelliJ IDEA

During build we generate sourcemaps, and as result you can debug Typescript instead debugging transpiled Javascript.
So keep in mind that you can put breakpoints in *.ts files.

To run or debug app, select app-local in Run/Debug configuration and click Run or Debug button.

If you want to debug app that is run from console, select app-remote in Run/Debug configuration and click Debug.

## FAQ

Q.: How can I make integration with a REST service typesafe?
A.: For that you need to define Typescript interfaces for both request and response. Normally they are automatically
built or imported from a service description (like Swagger), but here we can use semi-manual way:
1. Get examples of request/response for the service. For example for EIS services you can open http://sfoeiswas13.sjclab.exigengroup.com:9081/ipb-app/swagger-ui.xhtml,
find the service in the catalog and copy model JSON for both request/response.
2. Use http://json2ts.com/ to generate interfaces.
3. Add generated interfaces into the sources and edit them if it's required.

