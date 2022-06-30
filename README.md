# AngularPlotlyTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

This project is a min reproduction of failures that occur when running `ng test` via [Karma](https://karma-runner.github.io).

To reproduce the errors:

1. npm ci
1. ng test

Notes:

- Everything seems to work fine when serving and/or building the project. The errors only occur during unit testing.
- In my production code, `<plotly-plot>...</plotly-plot>` has an `*ngIf` statement to only show the chart when data is available. I have left it out of this repo and the error still occurs.

## Errors:

```
stacktrace: TypeError: Cannot read properties of undefined (reading 'data')
TypeError: Cannot read properties of undefined (reading 'data')
    at PlotlyComponent.createFigure (http://localhost:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:285:1)
    at PlotlyComponent.ngOnDestroy (http://localhost:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:195:1)
    at executeOnDestroys (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:7368:1)
    at cleanUpView (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:7271:1)
    at destroyViewTree (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:7097:1)
    at destroyLView (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:7249:1)
    at RootViewRef.destroy (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:21290:1)
    at ComponentRef.destroy (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/core.mjs:21696:1)
    at ComponentFixture.destroy (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:227:1)
    at http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:1830:1}
```

```
Error: 1 component threw errors during cleanup
    at TestBedRender3.destroyActiveFixtures (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:1842:1)
    at TestBedRender3.resetTestingModule (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:1677:1)
    at Function.resetTestingModule (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:1620:1)
    at UserContext.<anonymous> (http://localhost:9876/_karma_webpack_/webpack:/node_modules/@angular/core/fesm2015/testing.mjs:2006:1)
    at _ZoneDelegate.invoke (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:409:1)
    at ProxyZoneSpec.onInvoke (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:303:43)
    at _ZoneDelegate.push.67809._ZoneDelegate.invoke (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:408:1)
    at Zone.run (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:169:1)
    at runInTestZone (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:599:38)
    at UserContext.<anonymous> (http://localhost:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:614:24)
```

```
zone.js:218 Uncaught Error: Uncaught (in promise): Error: Resize must be passed a displayed plot div element.
Error: Resize must be passed a displayed plot div element.
    at :9876/_karma_webpack_/webpack:/node_modules/plotly.js-dist-min/plotly.min.js:37:1042449
    at new ZoneAwarePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1351:1)
    at Object.b.resize (:9876/_karma_webpack_/webpack:/node_modules/plotly.js-dist-min/plotly.min.js:37:1042401)
    at PlotlyService.resize (:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:108:1)
    at resizeHandler (:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:309:1)
    at _ZoneDelegate.invokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:443:1)
    at ProxyZoneSpec.onInvokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:334:43)
    at _ZoneDelegate.push.67809._ZoneDelegate.invokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:442:1)
    at Object.onInvokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:321:88)
    at _ZoneDelegate.push.67809._ZoneDelegate.invokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:442:1)
    at resolvePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1262:1)
    at :9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1169:1
    at n (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1185:1)
    at :9876/_karma_webpack_/webpack:/node_modules/plotly.js-dist-min/plotly.min.js:37:1042447
    at new ZoneAwarePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1351:1)
    at Object.b.resize (:9876/_karma_webpack_/webpack:/node_modules/plotly.js-dist-min/plotly.min.js:37:1042401)
    at PlotlyService.resize (:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:108:1)
    at resizeHandler (:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:309:1)
    at _ZoneDelegate.invokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:443:1)
    at ProxyZoneSpec.onInvokeTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:334:43)
    at ____________________Elapsed_27894_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleEventTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:283:1)
    at :9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:2035:1
    at PlotlyComponent.updateWindowResizeHandler (:9876/_karma_webpack_/webpack:/node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js:310:1)
    at ____________________Elapsed_0_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleMicroTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:277:1)
    at scheduleResolveOrReject (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1316:1)
    at resolvePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1253:1)
    at ____________________Elapsed_0_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleMicroTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:277:1)
    at scheduleResolveOrReject (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1316:1)
    at resolvePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1253:1)
    at ____________________Elapsed_0_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleMicroTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:277:1)
    at scheduleResolveOrReject (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1316:1)
    at resolvePromise (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1253:1)
    at ____________________Elapsed_0_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleMicroTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:277:1)
    at scheduleResolveOrReject (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1316:1)
    at ZoneAwarePromise.then (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1527:1)
    at ____________________Elapsed_282_ms__At__Thu_Jun_30_2022_16_52_30_GMT_0400__Eastern_Daylight_Time_ ()
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone-testing.js:120:26)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Object.onScheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:320:68)
    at _ZoneDelegate.push.67809._ZoneDelegate.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:423:1)
    at Zone.push.67809.Zone.scheduleTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:257:1)
    at Zone.push.67809.Zone.scheduleMicroTask (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:277:1)
    at scheduleResolveOrReject (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1316:1)
    at ZoneAwarePromise.then (:9876/_karma_webpack_/webpack:/node_modules/zone.js/dist/zone.js:1527:1)
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


