A demo of the new global hooks functionality in Playwright 1.46, currently documented in https://github.com/microsoft/playwright/blob/main/docs/src/test-fixtures-js.md#adding-global-beforeeachaftereach-hooks (not in the regular stable documentation)

Tests in example.spec.ts and example2.spec.ts make use of the global hooks defined in globalbeforeafter.ts . Tests in noglobalstests.spec.ts do not.
