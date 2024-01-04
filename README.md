## Application Details

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| **Generation Date and Time**<br>Thu Aug 17 2023 13:59:24 GMT+0800 (China Standard Time) |
| **App Generator**<br>@sap/generator-fiori-freestyle                                     |
| **App Generator Version**<br>1.10.4                                                     |
| **Generation Platform**<br>Visual Studio Code                                           |
| **Template Used**<br>simple                                                             |
| **Service Type**<br>None                                                                |

|**Service URL**<br>N/A
|**Module Name**<br>project1|
|**Application Title**<br>App Title|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.117.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## project1

A Fiori application.

### Starting the generated app

- This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite. In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version. (See https://nodejs.org)

## 用来练手的 project

## 启动项目

1. yarn start 启动本地服务
2. node ./proxy.js 启动代理服务

## 入口文件

入口文件是 View.view.xml 文件。原因是 manifest.json 文件里配置的 routes 里配置的根路径"pattern": ":?query:" 指向的视图是 TargetView1，
而 TargetView1 指定的 viewName 是 View1

1. 测试 revert 的代码
2. 测试 revert2
3. revert3
