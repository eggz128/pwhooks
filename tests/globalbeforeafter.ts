import { test as base } from '@playwright/test';

//Adding beforeEach+afterEach and beforeAll+afterAll functionality to any test files that import test() from this file
export const test = base.extend<{ forEachTest: void }, { forEachWorker: void }>({
  forEachTest: [async ({ page }, use) => { //analagous to beforeEach+afterEach 
    // This code runs 'before each' test.
    console.log('Global beforeEach')
    await page.goto('http://www.google.com');
    console.log('Navigated to google');
    // end of 'before each'
    
    await use();  //Do the test. Dont forget to do this or the test(s) will just spin and timeout.

    // This code runs 'after each' test.
    console.log('Global afterEach')
    console.log('Last URL:', page.url());
  }, { auto: true }],  // automatically starts for every test.


  forEachWorker: [async ({ }, use) => { //analagous to beforeAll+afterAll
    // This code runs 'before all' the tests in the worker process.
    console.log('Global beforeAll')
    console.log(`Starting test worker ${test.info().workerIndex}`);
    // end of 'before all'
    
    await use(); //Do the test.

    // This code runs 'after all' the tests in the worker process.
    //From PLaywright documentation example code but fails test as when this runs the test has already exited,
    //so cant call test.info
    //console.log(`Stopping test worker ${test.info().workerIndex}`); 
    console.log('Global afterAll')
    console.log('Finished with worker')
  }, { scope: 'worker', auto: true }],  // automatically starts for every worker.
});
