# NgElm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

## 发布到 GitHub pages（页面服务）[文档](https://angular.cn/guide/deployment#deploy-to-github-pages)
1. ng build --prod --output-path docs --base-href
2. 当构建完成时，把 docs/index.html 复制一份为 docs/404.html
3. 推送后配置github [文档](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch)
4.  https://<user_name>.github.io/<project_name>/ 中查看部署好的页面。

## core模块
> 把那些数量庞大、辅助性的、只用一次的类收集到核心模块中

## shared模块
> 在共享模块中声明那些可能被特性模块引用的可复用组件、指令和管道

## mat模块，应该属于[窗口部件模块](https://angular.cn/guide/module-types)
> Material Design 样式模块

## 针对特定的开发环境设置默认值 [文档](https://angular.cn/guide/build#configuring-application-environments)
比如dev和prod模式下配置不同变量, 修改src/environments/下面的文件即可

也可以配置其他模式：
1. 创建，编写"src/environments/environment.stage.ts"
2. 修改 augular.json
    ```json
    "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.stage.ts"
        }
      ],
    ```
3. 使用
    ```
      import { environment } from "../environments/environment";
      v = environment.version;
    ```
  
4. 打包 `ng build --pord` environment.stage的数据就会替换掉environment的数据

5. 调试时 `ng s -o -c=production` 即可触发替换，默认dev模式


## 配置浏览器兼容性 [文档](https://angular.cn/guide/build#configuring-browser-compatibility)
> 修改"src/browserslist"文件

## 路径别名
配置"/tsconfig.json":
```json
{
  "compilerOptions": {
    "paths": {
      "~app/*": ["src/app/*"],
      "~shared/*": ["src/app/shared/*"],
      "~env/*": ["src/environments/*"]
    }
  }
}
```
使用:
```ts
import { environment as env } from "~env/environment";
```