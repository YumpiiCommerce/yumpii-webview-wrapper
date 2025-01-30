# YumpiiWebviewWrapper

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Adding the Yumpii Webview Library

```bash
npm i @yumpii/ngx-webview-lib
```
The library contains all the components, services, classes, interfaces, directives, etc. necessary to create a standard Yumpii Webview.

## The Wrapper
This project provides a standard wrapper for the webview library, so a Yumpii Webview app can be built quickly.
Observe that:
* All modifiable components from the library are replicated using inheritance. Therefore, every component has access to the same properties and variables available in the original component class.
* All the templates and styles are provided as per the latest version of the original library components.
* The app routes point to the editable child container components in `src/app/app-routing.module.ts` like this:
```js
const routes: Routes = [
  {
        path: ':slug',
        component: MainContainerComponent,
        children: [
          {
            path: 'category/:id',
            component: CategoryContainerComponent,
          },
          {
            path: 'product/:id',
            component: ProductContainerComponent,
          },
          {
            path: 'featured',
            component: FeaturedListContainerComponent,
          },
          {
            path: 'combo/:id',
            component: ComboContainerComponent,
          },
          {
            path: 'cart',
            component: CartContainerComponent,
          },
          {
            path: 'payment',
            children: [
              {
                path: '',
                component: PaymentContainerComponent,
              },
              {
                path: 'error',
                component: PaymentErrorScreenComponent,
              },
            ],
          },
          {
            path: 'payment-validation',
            component: PaymentValidationComponent,
          },
          {
            path: 'success',
            component: SuccessScreenComponent,
          },
          {
            path: 'retry',
            component: ErrorRetryScreenComponent,
          },
          {
            path: 'abort',
            component: ErrorAbortScreenComponent,
          },
          {
            path: 'expired',
            component: ExpiredScreenComponent,
          },
          {
            path: 'human',
            component: HumanScreenComponent,
          },
        ],
      },
];
```
* By modifying any of this routed components your webview will reflect the changes immediately.
* Nonetheless, the child components inside these main containers are referenced to the original library components. This means that, in order to modify a child component, not only you have to change the component template/style/code but replace the selector in all the places you wish it to appear with the modifications. For example, if you want to change the footer in the category view, you'll have to modify the component located in `src/app/generic-views/components/footer` and then replace the markup in the container located in `src/app/categorized-mode/containers/category/category.container.html` to match your new selector, like this:
```html
Original: <generic-views-footer></generic-views-footer> »»» Replacement: <custom-generic-views-footer></custom-generic-views-footer>
```
* Note that you can also create a new inherited component to create several versions from the same original component to use in different places.

## Limited Support
Support is limited to the encapsulated library `@yumpii/ngx-webview-lib`. Yumpii does NOT provide any suppport over any issues related to this wrapper application including any modifications made by the client and its further deployment.

## License
#### BSD License
Copyright © 2025, Chat Communications, Corp.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the owner nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

#### This software is provided by the copyright holders and contributors "as is" and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the copyright holder be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.
