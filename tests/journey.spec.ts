import {test,expect} from '@playwright/test';
test('full quiz, resume, edit, passport, download, copy and restart',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);
 await page.goto('/');await page.getByRole('link',{name:'找到我的本命咖啡',exact:true}).click();
 await expect(page.getByRole('button',{name:'下一個小選擇'})).toBeDisabled();
 await page.locator('.answer-option').nth(2).click();await page.getByRole('button',{name:'下一個小選擇'}).click();
 await page.reload();await expect(page.getByRole('heading',{level:1})).toHaveText('甜點櫃前，只能帶走一個。');
 await page.getByRole('button',{name:'上一題'}).click();await expect(page.locator('input[type=radio]').nth(2)).toBeChecked();
 await page.locator('.answer-option').first().click();await page.getByRole('button',{name:'下一個小選擇'}).click();
 for(let i=1;i<16;i++){await page.locator('.answer-option').nth(i%4).click();await page.getByRole('button',{name:i===15?'揭曉我的咖啡人格':'下一個小選擇'}).click();}
 await expect(page).toHaveURL(/\/result\/[BD][CF][LR][AS]$/);await expect(page.getByRole('heading',{name:'你的風味指南針'})).toBeVisible();await expect(page.getByRole('meter')).toHaveCount(4);
 await page.getByRole('button',{name:'複製點單小抄'}).click();await expect(page.getByRole('status')).toContainText('點單小抄已複製');expect(await page.evaluate(()=>navigator.clipboard.readText())).toContain('我想找');
 const event=page.waitForEvent('download');await page.getByRole('button',{name:'下載我的人格卡'}).click();const download=await event;expect(download.suggestedFilename()).toMatch(/BeanTI-.+\.png/);expect(await download.failure()).toBeNull();
 await page.reload();await expect(page.getByRole('meter')).toHaveCount(4);
 await page.goto('/quiz');await page.getByRole('button',{name:'重新測一次'}).click();await expect(page.getByRole('heading',{level:1})).toHaveText('偷到一個下午，你想躲去哪裡？');await expect(page.locator('input:checked')).toHaveCount(0);
});
test('all 16 public profiles work without inventing personal scores',async({page})=>{
 test.setTimeout(120000);
 await page.goto('/types');const links=await page.locator('.profile-card').evaluateAll(els=>els.map(el=>el.getAttribute('href')!));expect(links).toHaveLength(16);
 for(const link of links){await page.goto(link,{waitUntil:'domcontentloaded'});await expect(page.locator('.passport h1')).toBeVisible();await expect(page.getByRole('meter')).toHaveCount(0);await expect(page.locator('.passport .bean-art')).toBeVisible();await page.locator('.passport .bean-art').evaluate(async (el:HTMLImageElement)=>{try{await el.decode();}catch(e){throw new Error(JSON.stringify({src:el.src,current:el.currentSrc,complete:el.complete,error:String(e)}));}});await expect.poll(()=>page.locator('.passport .bean-art').evaluate((el:HTMLImageElement)=>el.naturalWidth)).toBeGreaterThan(0);}
 await page.goto('/result/INVALID');await expect(page.getByRole('heading',{name:'這顆豆子，還在旅行中。'})).toBeVisible();
});
for(const width of [375,768,1280])test(`responsive layout ${width}px`,async({page})=>{await page.setViewportSize({width,height:900});for(const path of ['/','/quiz','/types','/result/BCLA']){await page.goto(path);await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);} });
test('corrupt storage is ignored and native radio keyboard works',async({page})=>{await page.addInitScript(()=>localStorage.setItem('beanti-passport-v1','{"version":1,"answers":"bad"}'));await page.goto('/quiz');const first=page.locator('input[type=radio]').first();await first.focus();await page.keyboard.press('Space');await expect(first).toBeChecked();await page.keyboard.press('ArrowRight');await expect(page.locator('input[type=radio]').nth(1)).toBeChecked();});
test('storage unavailable still permits answering',async({page})=>{await page.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked')};Storage.prototype.setItem=()=>{throw Error('blocked')};});await page.goto('/quiz');await expect(page.getByRole('status')).toContainText('無法保存進度');await page.locator('.answer-option').first().click();await page.getByRole('button',{name:'下一個小選擇'}).click();await expect(page.getByRole('heading',{level:1})).toHaveText('甜點櫃前，只能帶走一個。');});
