import {defineConfig} from '@playwright/test';
const baseURL=process.env.PLAYWRIGHT_BASE_URL||'http://127.0.0.1:3000';
export default defineConfig({testDir:'./tests',fullyParallel:true,use:{baseURL,headless:true,channel:'chrome'},webServer:{command:'npm run start',url:baseURL,reuseExistingServer:true,timeout:120000},reporter:'list'});
