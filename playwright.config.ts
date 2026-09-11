import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',fullyParallel:true,use:{baseURL:'http://127.0.0.1:3000',headless:true,channel:'chrome'},webServer:{command:'npm run start',url:'http://127.0.0.1:3000',reuseExistingServer:true,timeout:120000},reporter:'list'});
