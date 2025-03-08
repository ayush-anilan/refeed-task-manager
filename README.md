
```
task-manager
├─ README.md
├─ task-manager-backend
│  ├─ .env
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ task
│  │  │  ├─ dto
│  │  │  │  ├─ create-task.dto.d.ts
│  │  │  │  ├─ create-task.dto.js
│  │  │  │  ├─ create-task.dto.js.map
│  │  │  │  ├─ update-task.dto.d.ts
│  │  │  │  ├─ update-task.dto.js
│  │  │  │  └─ update-task.dto.js.map
│  │  │  ├─ task.controller.d.ts
│  │  │  ├─ task.controller.js
│  │  │  ├─ task.controller.js.map
│  │  │  ├─ task.module.d.ts
│  │  │  ├─ task.module.js
│  │  │  ├─ task.module.js.map
│  │  │  ├─ task.schema.d.ts
│  │  │  ├─ task.schema.js
│  │  │  ├─ task.schema.js.map
│  │  │  ├─ task.service.d.ts
│  │  │  ├─ task.service.js
│  │  │  └─ task.service.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ main.ts
│  │  └─ task
│  │     ├─ dto
│  │     │  ├─ create-task.dto.ts
│  │     │  └─ update-task.dto.ts
│  │     ├─ task.controller.spec.ts
│  │     ├─ task.controller.ts
│  │     ├─ task.module.ts
│  │     ├─ task.schema.ts
│  │     ├─ task.service.spec.ts
│  │     └─ task.service.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  ├─ jest-e2e.json
│  │  └─ __mocks__
│  │     └─ task.service.ts
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ task-manager-frontend
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ .rscinfo
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_windows_x86_64_8.0.0
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ 10.pack.gz
   │  │     │  ├─ 11.pack.gz
   │  │     │  ├─ 12.pack.gz
   │  │     │  ├─ 13.pack.gz
   │  │     │  ├─ 14.pack.gz
   │  │     │  ├─ 2.pack.gz
   │  │     │  ├─ 3.pack.gz
   │  │     │  ├─ 4.pack.gz
   │  │     │  ├─ 5.pack.gz
   │  │     │  ├─ 6.pack.gz
   │  │     │  ├─ 7.pack.gz
   │  │     │  ├─ 8.pack.gz
   │  │     │  ├─ 9.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  └─ index.pack.gz.old
   │  │     ├─ client-development-fallback
   │  │     │  ├─ 0.pack.gz
   │  │     │  └─ index.pack.gz
   │  │     └─ server-development
   │  │        ├─ 0.pack.gz
   │  │        ├─ 1.pack.gz
   │  │        ├─ 10.pack.gz
   │  │        ├─ 11.pack.gz
   │  │        ├─ 12.pack.gz
   │  │        ├─ 13.pack.gz
   │  │        ├─ 14.pack.gz
   │  │        ├─ 15.pack.gz
   │  │        ├─ 2.pack.gz
   │  │        ├─ 3.pack.gz
   │  │        ├─ 4.pack.gz
   │  │        ├─ 5.pack.gz
   │  │        ├─ 6.pack.gz
   │  │        ├─ 7.pack.gz
   │  │        ├─ 8.pack.gz
   │  │        ├─ 9.pack.gz
   │  │        ├─ index.pack.gz
   │  │        └─ index.pack.gz.old
   │  ├─ fallback-build-manifest.json
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ app
   │  │  │  ├─ favicon.ico
   │  │  │  │  └─ route.js
   │  │  │  ├─ new
   │  │  │  │  ├─ page.js
   │  │  │  │  └─ page_client-reference-manifest.js
   │  │  │  ├─ page.js
   │  │  │  ├─ page_client-reference-manifest.js
   │  │  │  ├─ task
   │  │  │  │  └─ [id]
   │  │  │  │     ├─ edit
   │  │  │  │     │  ├─ page.js
   │  │  │  │     │  └─ page_client-reference-manifest.js
   │  │  │  │     ├─ page.js
   │  │  │  │     └─ page_client-reference-manifest.js
   │  │  │  └─ _not-found
   │  │  │     ├─ page.js
   │  │  │     └─ page_client-reference-manifest.js
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ interception-route-rewrite-manifest.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages
   │  │  │  ├─ _app.js
   │  │  │  ├─ _document.js
   │  │  │  └─ _error.js
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  ├─ server-reference-manifest.json
   │  │  ├─ vendor-chunks
   │  │  │  ├─ @reduxjs.js
   │  │  │  ├─ @swc.js
   │  │  │  ├─ asynckit.js
   │  │  │  ├─ axios.js
   │  │  │  ├─ call-bind-apply-helpers.js
   │  │  │  ├─ combined-stream.js
   │  │  │  ├─ debug.js
   │  │  │  ├─ delayed-stream.js
   │  │  │  ├─ dunder-proto.js
   │  │  │  ├─ es-define-property.js
   │  │  │  ├─ es-errors.js
   │  │  │  ├─ es-object-atoms.js
   │  │  │  ├─ es-set-tostringtag.js
   │  │  │  ├─ follow-redirects.js
   │  │  │  ├─ form-data.js
   │  │  │  ├─ function-bind.js
   │  │  │  ├─ get-intrinsic.js
   │  │  │  ├─ get-proto.js
   │  │  │  ├─ gopd.js
   │  │  │  ├─ has-flag.js
   │  │  │  ├─ has-symbols.js
   │  │  │  ├─ has-tostringtag.js
   │  │  │  ├─ hasown.js
   │  │  │  ├─ immer.js
   │  │  │  ├─ math-intrinsics.js
   │  │  │  ├─ mime-db.js
   │  │  │  ├─ mime-types.js
   │  │  │  ├─ ms.js
   │  │  │  ├─ next.js
   │  │  │  ├─ proxy-from-env.js
   │  │  │  ├─ react-redux.js
   │  │  │  ├─ redux-thunk.js
   │  │  │  ├─ redux.js
   │  │  │  ├─ reselect.js
   │  │  │  ├─ supports-color.js
   │  │  │  └─ use-sync-external-store.js
   │  │  ├─ webpack-runtime.js
   │  │  └─ _error.js
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  ├─ app
   │  │  │  │  ├─ layout.js
   │  │  │  │  ├─ new
   │  │  │  │  │  └─ page.js
   │  │  │  │  ├─ page.js
   │  │  │  │  ├─ task
   │  │  │  │  │  └─ [id]
   │  │  │  │  │     ├─ edit
   │  │  │  │  │     │  └─ page.js
   │  │  │  │  │     └─ page.js
   │  │  │  │  └─ _not-found
   │  │  │  │     └─ page.js
   │  │  │  ├─ app-pages-internals.js
   │  │  │  ├─ fallback
   │  │  │  │  ├─ amp.js
   │  │  │  │  ├─ main-app.js
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ pages
   │  │  │  │  │  ├─ _app.js
   │  │  │  │  │  └─ _error.js
   │  │  │  │  ├─ react-refresh.js
   │  │  │  │  └─ webpack.js
   │  │  │  ├─ main-app.js
   │  │  │  ├─ main.js
   │  │  │  ├─ pages
   │  │  │  │  ├─ _app.js
   │  │  │  │  └─ _error.js
   │  │  │  ├─ polyfills.js
   │  │  │  ├─ react-refresh.js
   │  │  │  ├─ webpack.js
   │  │  │  └─ _error.js
   │  │  ├─ css
   │  │  │  └─ app
   │  │  │     └─ layout.css
   │  │  ├─ development
   │  │  │  ├─ _buildManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  ├─ media
   │  │  │  ├─ 569ce4b8f30dc480-s.p.woff2
   │  │  │  ├─ 747892c23ea88013-s.woff2
   │  │  │  ├─ 93f479601ee12b01-s.p.woff2
   │  │  │  └─ ba015fad6dcf6784-s.woff2
   │  │  └─ webpack
   │  │     ├─ 062c578c1089420c.webpack.hot-update.json
   │  │     ├─ 0af50f210e2b2ee5.webpack.hot-update.json
   │  │     ├─ 0d1caa11317aa6fd.webpack.hot-update.json
   │  │     ├─ 17b3e93b573557d4.webpack.hot-update.json
   │  │     ├─ 1bd8be47f5be3a8e.webpack.hot-update.json
   │  │     ├─ 1e2d1c6e4e663cb3.webpack.hot-update.json
   │  │     ├─ 1ebbca65ba6faa3a.webpack.hot-update.json
   │  │     ├─ 20ab7f313477fcca.webpack.hot-update.json
   │  │     ├─ 2193dd9ba20814fa.webpack.hot-update.json
   │  │     ├─ 29e2ee9bf7a9b2ce.webpack.hot-update.json
   │  │     ├─ 3437e63afe8d43ff.webpack.hot-update.json
   │  │     ├─ 392ded01c83da76f.webpack.hot-update.json
   │  │     ├─ 4f125cd53c95b2e8.webpack.hot-update.json
   │  │     ├─ 52f034defa436b21.webpack.hot-update.json
   │  │     ├─ 5884ba9180269e5f.webpack.hot-update.json
   │  │     ├─ 62fbefee9e283aa6.webpack.hot-update.json
   │  │     ├─ 633457081244afec._.hot-update.json
   │  │     ├─ 69de25cc26303783.webpack.hot-update.json
   │  │     ├─ 7244b499b38ca7fa.webpack.hot-update.json
   │  │     ├─ 7260b42e1df2f813.webpack.hot-update.json
   │  │     ├─ 7c557e0636896381.webpack.hot-update.json
   │  │     ├─ 7f13b58ed503a8d2.webpack.hot-update.json
   │  │     ├─ 8856c0131e9a3553.webpack.hot-update.json
   │  │     ├─ 8ec621e21c6a844c.webpack.hot-update.json
   │  │     ├─ 95e753553bd7984c.webpack.hot-update.json
   │  │     ├─ 98039ef3c35309ba.webpack.hot-update.json
   │  │     ├─ 9daf5ffab1444dab.webpack.hot-update.json
   │  │     ├─ a04de46c90b5e165.webpack.hot-update.json
   │  │     ├─ a1466f98c2c12006.webpack.hot-update.json
   │  │     ├─ app
   │  │     │  ├─ layout.062c578c1089420c.hot-update.js
   │  │     │  ├─ layout.0af50f210e2b2ee5.hot-update.js
   │  │     │  ├─ layout.0d1caa11317aa6fd.hot-update.js
   │  │     │  ├─ layout.17b3e93b573557d4.hot-update.js
   │  │     │  ├─ layout.1bd8be47f5be3a8e.hot-update.js
   │  │     │  ├─ layout.1e2d1c6e4e663cb3.hot-update.js
   │  │     │  ├─ layout.1ebbca65ba6faa3a.hot-update.js
   │  │     │  ├─ layout.2193dd9ba20814fa.hot-update.js
   │  │     │  ├─ layout.29e2ee9bf7a9b2ce.hot-update.js
   │  │     │  ├─ layout.3437e63afe8d43ff.hot-update.js
   │  │     │  ├─ layout.392ded01c83da76f.hot-update.js
   │  │     │  ├─ layout.4f125cd53c95b2e8.hot-update.js
   │  │     │  ├─ layout.52f034defa436b21.hot-update.js
   │  │     │  ├─ layout.69de25cc26303783.hot-update.js
   │  │     │  ├─ layout.7244b499b38ca7fa.hot-update.js
   │  │     │  ├─ layout.7260b42e1df2f813.hot-update.js
   │  │     │  ├─ layout.7c557e0636896381.hot-update.js
   │  │     │  ├─ layout.7f13b58ed503a8d2.hot-update.js
   │  │     │  ├─ layout.8856c0131e9a3553.hot-update.js
   │  │     │  ├─ layout.8ec621e21c6a844c.hot-update.js
   │  │     │  ├─ layout.95e753553bd7984c.hot-update.js
   │  │     │  ├─ layout.98039ef3c35309ba.hot-update.js
   │  │     │  ├─ layout.a04de46c90b5e165.hot-update.js
   │  │     │  ├─ layout.a1466f98c2c12006.hot-update.js
   │  │     │  ├─ layout.b8f4e6f8eac1918a.hot-update.js
   │  │     │  ├─ layout.c2bd54b0ad64d101.hot-update.js
   │  │     │  ├─ layout.d5ecfbafcabb4d73.hot-update.js
   │  │     │  ├─ layout.d89264631aa5d788.hot-update.js
   │  │     │  ├─ layout.dab4d8a51614b701.hot-update.js
   │  │     │  ├─ layout.db357f2e87d6ba93.hot-update.js
   │  │     │  ├─ layout.f41205446f0ffa10.hot-update.js
   │  │     │  ├─ layout.f5ac3f0fd4cdf434.hot-update.js
   │  │     │  ├─ layout.fb69787e066af001.hot-update.js
   │  │     │  ├─ layout.fd996e6f2db4113e.hot-update.js
   │  │     │  ├─ new
   │  │     │  │  ├─ page.29e2ee9bf7a9b2ce.hot-update.js
   │  │     │  │  ├─ page.392ded01c83da76f.hot-update.js
   │  │     │  │  ├─ page.69de25cc26303783.hot-update.js
   │  │     │  │  ├─ page.7260b42e1df2f813.hot-update.js
   │  │     │  │  ├─ page.7f13b58ed503a8d2.hot-update.js
   │  │     │  │  ├─ page.95e753553bd7984c.hot-update.js
   │  │     │  │  ├─ page.98039ef3c35309ba.hot-update.js
   │  │     │  │  ├─ page.a04de46c90b5e165.hot-update.js
   │  │     │  │  ├─ page.b8f4e6f8eac1918a.hot-update.js
   │  │     │  │  ├─ page.c2bd54b0ad64d101.hot-update.js
   │  │     │  │  └─ page.f5ac3f0fd4cdf434.hot-update.js
   │  │     │  ├─ page.1bd8be47f5be3a8e.hot-update.js
   │  │     │  ├─ page.4f125cd53c95b2e8.hot-update.js
   │  │     │  ├─ page.7244b499b38ca7fa.hot-update.js
   │  │     │  ├─ page.b8f4e6f8eac1918a.hot-update.js
   │  │     │  ├─ page.c2bd54b0ad64d101.hot-update.js
   │  │     │  ├─ page.d5ecfbafcabb4d73.hot-update.js
   │  │     │  ├─ page.f5ac3f0fd4cdf434.hot-update.js
   │  │     │  └─ task
   │  │     │     └─ [id]
   │  │     │        ├─ edit
   │  │     │        │  ├─ page.062c578c1089420c.hot-update.js
   │  │     │        │  ├─ page.0af50f210e2b2ee5.hot-update.js
   │  │     │        │  ├─ page.17b3e93b573557d4.hot-update.js
   │  │     │        │  ├─ page.1ebbca65ba6faa3a.hot-update.js
   │  │     │        │  ├─ page.3437e63afe8d43ff.hot-update.js
   │  │     │        │  ├─ page.7c557e0636896381.hot-update.js
   │  │     │        │  ├─ page.8ec621e21c6a844c.hot-update.js
   │  │     │        │  ├─ page.b8f4e6f8eac1918a.hot-update.js
   │  │     │        │  ├─ page.c2bd54b0ad64d101.hot-update.js
   │  │     │        │  ├─ page.d89264631aa5d788.hot-update.js
   │  │     │        │  ├─ page.f5ac3f0fd4cdf434.hot-update.js
   │  │     │        │  └─ page.fd996e6f2db4113e.hot-update.js
   │  │     │        ├─ page.52f034defa436b21.hot-update.js
   │  │     │        ├─ page.a1466f98c2c12006.hot-update.js
   │  │     │        └─ page.fb69787e066af001.hot-update.js
   │  │     ├─ b8f4e6f8eac1918a.webpack.hot-update.json
   │  │     ├─ c2bd54b0ad64d101.webpack.hot-update.json
   │  │     ├─ d5ecfbafcabb4d73.webpack.hot-update.json
   │  │     ├─ d89264631aa5d788.webpack.hot-update.json
   │  │     ├─ dab4d8a51614b701.webpack.hot-update.json
   │  │     ├─ db357f2e87d6ba93.webpack.hot-update.json
   │  │     ├─ f41205446f0ffa10.webpack.hot-update.json
   │  │     ├─ f5ac3f0fd4cdf434.webpack.hot-update.json
   │  │     ├─ fb69787e066af001.webpack.hot-update.json
   │  │     ├─ fd996e6f2db4113e.webpack.hot-update.json
   │  │     ├─ webpack.062c578c1089420c.hot-update.js
   │  │     ├─ webpack.0af50f210e2b2ee5.hot-update.js
   │  │     ├─ webpack.0d1caa11317aa6fd.hot-update.js
   │  │     ├─ webpack.17b3e93b573557d4.hot-update.js
   │  │     ├─ webpack.1bd8be47f5be3a8e.hot-update.js
   │  │     ├─ webpack.1e2d1c6e4e663cb3.hot-update.js
   │  │     ├─ webpack.1ebbca65ba6faa3a.hot-update.js
   │  │     ├─ webpack.20ab7f313477fcca.hot-update.js
   │  │     ├─ webpack.2193dd9ba20814fa.hot-update.js
   │  │     ├─ webpack.29e2ee9bf7a9b2ce.hot-update.js
   │  │     ├─ webpack.3437e63afe8d43ff.hot-update.js
   │  │     ├─ webpack.392ded01c83da76f.hot-update.js
   │  │     ├─ webpack.4f125cd53c95b2e8.hot-update.js
   │  │     ├─ webpack.52f034defa436b21.hot-update.js
   │  │     ├─ webpack.5884ba9180269e5f.hot-update.js
   │  │     ├─ webpack.62fbefee9e283aa6.hot-update.js
   │  │     ├─ webpack.69de25cc26303783.hot-update.js
   │  │     ├─ webpack.7244b499b38ca7fa.hot-update.js
   │  │     ├─ webpack.7260b42e1df2f813.hot-update.js
   │  │     ├─ webpack.7c557e0636896381.hot-update.js
   │  │     ├─ webpack.7f13b58ed503a8d2.hot-update.js
   │  │     ├─ webpack.8856c0131e9a3553.hot-update.js
   │  │     ├─ webpack.8ec621e21c6a844c.hot-update.js
   │  │     ├─ webpack.95e753553bd7984c.hot-update.js
   │  │     ├─ webpack.98039ef3c35309ba.hot-update.js
   │  │     ├─ webpack.9daf5ffab1444dab.hot-update.js
   │  │     ├─ webpack.a04de46c90b5e165.hot-update.js
   │  │     ├─ webpack.a1466f98c2c12006.hot-update.js
   │  │     ├─ webpack.b8f4e6f8eac1918a.hot-update.js
   │  │     ├─ webpack.c2bd54b0ad64d101.hot-update.js
   │  │     ├─ webpack.d5ecfbafcabb4d73.hot-update.js
   │  │     ├─ webpack.d89264631aa5d788.hot-update.js
   │  │     ├─ webpack.dab4d8a51614b701.hot-update.js
   │  │     ├─ webpack.db357f2e87d6ba93.hot-update.js
   │  │     ├─ webpack.f41205446f0ffa10.hot-update.js
   │  │     ├─ webpack.f5ac3f0fd4cdf434.hot-update.js
   │  │     ├─ webpack.fb69787e066af001.hot-update.js
   │  │     └─ webpack.fd996e6f2db4113e.hot-update.js
   │  ├─ trace
   │  └─ types
   │     ├─ app
   │     │  ├─ layout.ts
   │     │  ├─ new
   │     │  │  └─ page.ts
   │     │  ├─ page.ts
   │     │  └─ task
   │     │     └─ [id]
   │     │        ├─ edit
   │     │        │  └─ page.ts
   │     │        └─ page.ts
   │     ├─ cache-life.d.ts
   │     └─ package.json
   ├─ eslint.config.mjs
   ├─ next-env.d.ts
   ├─ next.config.ts
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.mjs
   ├─ public
   │  ├─ file.svg
   │  ├─ globe.svg
   │  ├─ next.svg
   │  ├─ vercel.svg
   │  └─ window.svg
   ├─ README.md
   ├─ src
   │  ├─ app
   │  │  ├─ favicon.ico
   │  │  ├─ globals.css
   │  │  ├─ layout.tsx
   │  │  ├─ new
   │  │  │  └─ page.tsx
   │  │  ├─ page.tsx
   │  │  └─ task
   │  │     └─ [id]
   │  │        ├─ edit
   │  │        │  └─ page.tsx
   │  │        └─ page.tsx
   │  └─ redux
   │     ├─ store.ts
   │     └─ taskSlice.ts
   └─ tsconfig.json

```