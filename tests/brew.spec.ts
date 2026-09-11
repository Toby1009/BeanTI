import {test,expect} from '@playwright/test';
const base=process.env.PLAYWRIGHT_BASE_URL||'http://localhost:3000';
for(const width of [375,768,1440])test(`brew scrolling, rewind, skip and replay at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:812});
 await page.goto(`${base}/brew`,{waitUntil:'domcontentloaded'});
 const buttons=page.locator('.brew-controls button');
 await page.locator('.brew-begin').click();
 await expect(buttons.first()).toHaveAttribute('aria-current','step');
 for(const i of [1,2,3,4,2,0]){await buttons.nth(i).click();await expect(buttons.nth(i)).toHaveAttribute('aria-current','step');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}
 await buttons.nth(4).click();await expect(page.locator('.brew-scroll .brew-scene')).toHaveAttribute('data-finish','1.000');
 await page.getByRole('link',{name:'略過動畫'}).click();await expect(page.locator('#brew-finish')).toBeInViewport();
 await page.getByRole('button',{name:'再沖一杯'}).click();await expect(buttons.first()).toHaveAttribute('aria-current','step');
 await expect(page.locator('.brew-scroll .brew-scene')).toHaveAttribute('data-liquid','0.000');
});
test('reduced motion presents every step without a scroll trap',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(`${base}/brew`);
 await expect(page.locator('.brew-scroll')).toBeHidden();await expect(page.locator('.brew-static article')).toHaveCount(5);
 for(const article of await page.locator('.brew-static article').all())await expect(article).toBeVisible();
 await expect(page.locator('.brew-replay')).toBeHidden();
});
test('home links to brewing and brewing links to the quiz',async({page})=>{await page.goto(base);await page.locator('.brew-invite a').click();await expect(page).toHaveURL(/\/brew$/);await page.locator('#brew-finish a.button').click();await expect(page).toHaveURL(/\/quiz$/);});
