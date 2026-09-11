import {test,expect} from '@playwright/test';
for(const width of [375,768,1440]) {
 test(`flavor notebook selections survive reload at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:812});
  await page.goto('/explore?type=DFRS');
  await expect(page.getByRole('button',{name:'巴西 Brazil'})).toHaveAttribute('aria-pressed','true');
  await expect(page.getByRole('button',{name:'日曬 Natural',exact:true})).toHaveAttribute('aria-pressed','true');
  await page.getByRole('button',{name:'肯亞 Kenya'}).click();
  await expect(page.locator('.origin-english')).toHaveText('Kenya');
  await page.getByRole('button',{name:'蜜處理 Honey'}).click();
  await expect(page.locator('.process-copy')).toContainText('並沒有加入蜂蜜');
  await page.getByRole('button',{name:'柑橘與果酸',exact:true}).click();
  await expect(page.locator('.flavor-note h3')).toHaveText('柑橘與果酸');
  await page.reload();
  await expect(page.getByRole('button',{name:'肯亞 Kenya'})).toHaveAttribute('aria-pressed','true');
  await expect(page.getByRole('button',{name:'蜜處理 Honey'})).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('.flavor-note h3')).toHaveText('柑橘與果酸');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 });
}
test('invalid query falls back and keyboard can change selections',async({page})=>{
 await page.goto('/explore?type=invalid&origin=invalid&method=invalid&flavor=invalid');
 await expect(page.locator('.origin-english')).toHaveText('Ethiopia');
 const honey=page.getByRole('button',{name:'蜜處理 Honey'});await honey.focus();await page.keyboard.press('Enter');
 await expect(honey).toHaveAttribute('aria-pressed','true');
 await page.getByRole('button',{name:'厭氧發酵 Anaerobic'}).click();await expect(page.locator('.process-copy')).toContainText('不是與前三者互斥');
});
test('result and home provide an entry into the notebook',async({page})=>{
 await page.goto('/result/BCLA');await page.getByRole('link',{name:'探索我的風味方向'}).click();await expect(page).toHaveURL(/explore\?type=BCLA/);
 await expect(page.locator('.explore-personal')).toContainText('花香漫遊者');
 await page.goto('/');await page.getByRole('link',{name:'翻開風味筆記'}).click();await expect(page).toHaveURL(/\/explore$/);
});
test('preparation checklist and drawings explain rinse water before brewing',async({page})=>{
 await page.setViewportSize({width:375,height:812});await page.goto('/brew');
 const item=page.locator('.equipment-grid button').first();await item.click();await expect(item).toHaveAttribute('aria-pressed','true');await item.click();await expect(item).toHaveAttribute('aria-pressed','false');
 for(const name of ['摺紙潤濕','倒掉接底水','磨豆入杯'])await page.getByRole('navigation',{name:'沖煮前準備'}).getByRole('button',{name}).click();
 await expect(page.locator('.prep-panel')).toContainText('歸零');await page.getByRole('link',{name:'準備好了，開始沖煮'}).click();
 await expect(page.locator('.brew-scroll [data-testid="brew-filter-paper"]')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('reduced motion keeps notebook and preparation usable',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/explore');await page.getByRole('button',{name:'口感與厚度',exact:true}).click();await expect(page.locator('.flavor-note h3')).toHaveText('口感與厚度');
 await page.goto('/brew');await page.getByRole('navigation',{name:'沖煮前準備'}).getByRole('button',{name:'倒掉接底水'}).click();await expect(page.locator('.prep-panel')).toContainText('避免沖好的咖啡被潤紙水稀釋');
 await page.getByRole('navigation',{name:'沖煮前準備'}).getByRole('button',{name:'磨豆入杯'}).click();await page.getByRole('link',{name:'準備好了，看沖煮步驟'}).click();await expect(page.locator('#brew-static article').first()).toBeInViewport();
});
test('short viewport keeps brewing controls visible',async({page})=>{
 await page.setViewportSize({width:667,height:375});await page.goto('/brew');await page.locator('.brew-begin').click();
 const controls=page.locator('.brew-controls');await expect(controls).toBeInViewport();await controls.getByRole('button',{name:'品飲'}).click();await expect(controls.getByRole('button',{name:'品飲'})).toHaveAttribute('aria-current','step');
});
