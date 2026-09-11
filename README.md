# BeanTI｜找到你的本命咖啡

奶油白與手繪咖啡豆插畫的 Coffee Personality Test。Next.js App Router + TypeScript + Tailwind CSS，適合部署到 Vercel。全站繁體中文，不需要 API key、帳號、資料庫或環境變數。

## 本機啟動

建議 Node.js 22 LTS 或更新的受支援 LTS 版本。

```sh
npm ci
npm run dev
```

開啟 http://localhost:3000 。日常檢查請使用 `npm run dev`；開發快取寫入 `.next-dev`，正式建置寫入 `.next`，避免建置時覆蓋預覽的樣式與 JavaScript。若使用 `npm run start`，重新 build 後需重啟正式伺服器。

## 正式建置與驗證

```sh
npm run typecheck
npm test
npm run build
npm run start
```

瀏覽器測試：

```sh
npm run test:e2e
```

預設使用本機 Google Chrome（channel: `chrome`）。若沒有 Chrome，執行 `npx playwright install chromium`，再將 playwright.config.ts 的 channel 設定為 `chromium`。測試會自動啟動 production server，或使用現有 localhost:3000。

## Vercel 部署

1. 將這個資料夾推送到自己的 GitHub repository（請包含 package-lock.json 與 public/images）。
2. 在 Vercel 選 Add New → Project，匯入該 repository。
3. Framework Preset 選 Next.js。Root Directory 為專案根目錄，其餘保留預設。
4. Build Command 為 `npm run build`，不需填寫任何環境變數，按 Deploy。

也可在已登入的 Vercel CLI 執行 `vercel` 建立預覽，確認後以 `vercel --prod` 發布。

官方說明：https://vercel.com/docs/frameworks/full-stack/nextjs

本專案已準備部署設定；不代表已建立 Vercel 帳號、遠端 repository 或公開部署。

## 頁面與功能

- `/`：品牌首頁、主插畫、測驗說明、代表人格。
- `/brew`：BeanTI 互動沖煮故事，滑動控制準備、悶蒸、注水、滴落、品飲；支援步驟跳轉、倒帶、略過、重播與減少動態的靜態閱讀版。
- `/quiz`：16 題測驗、原生單選與鍵盤操作、返回修改、本機保存、重測。
- `/types`：16 型完整圖鑑與四軸說明。
- `/result/BCLA` 等：可直接分享的人格頁、測驗偏好方向、選豆建議、可複製點單小抄、1080×1440 PNG 下載。
- 無效人格代碼會顯示 404。

分享連結只包含人格代碼，不包含答案。只有本機完成測驗且結果吻合時，才顯示個人風味分數；陌生訪客看到人格的一般介紹。瀏覽器無法使用 storage 或 clipboard 時有可操作的降級提示。

## 內容與計分

建置使用 Next.js 支援的 webpack 模式，以避免受限環境的 Turbopack 子程序連接埠問題。

主要資料位於 `lib/coffee.ts`：16 題（感官 6、情境 5、人格 5），以及 16 型名稱、文案與推薦。

每個答案有四軸 -2～2 分數。先將各類題目的分數依該類題數與最大強度正規化，再以感官 65%、情境 25%、人格 10% 相加。未涉及的軸記 0。正數取 B/C/L/A，負數取 D/F/R/S；精確平手固定採前者，作為可重現的分類規則。距中央小於 8 個顯示刻度時提示兩邊都值得試，指標不是精準度或機率。

四軸：明亮／深沉（B/D）、乾淨／奔放（C/F）、細緻／濃厚（L/R）、探索／經典（A/S）。探索軸只調整嘗鮮建議，不決定處理法。

這是尚未經實際試喝資料驗證的娛樂與教育型推薦，不是 MBTI 或心理量表。產區與處理法無法保證風味，頁面鼓勵小量試喝、與咖啡師溝通。Coffee Passport 試喝回饋和個人化學習留待第二版。

## 圖片與品牌

- `brand.md`：已採用的品牌方向與色彩。
- `IMAGE-PROMPTS.md`：內建圖片生成工具使用的完整提示詞與資產路徑。
- `public/images/hero.png`、`beans.png`：生成原圖。
- `public/images/*.webp`：網站使用的壓縮主圖與 16 張獨立角色。
- `scripts/prepare-images.mjs`：重建 WebP 資產。

角色 WebP 已在建置前壓縮，直接送出靜態圖檔，避免逐張經過即時圖片轉換。首頁主圖保留 Next.js 響應式圖片最佳化。

圖片為建置好的靜態資產，訪客使用網站不會呼叫圖片生成 API。字體採本機中文字體與 Georgia，沒有外部字型或分析追蹤請求。

## 沖煮動畫

`components/brew-story.tsx` 將原生捲動進度送入 `lib/brew.ts` 的純函式，`components/brew-scene.tsx` 以 SVG 圖層呈現器具、水流與液面。以 passive scroll listener + requestAnimationFrame 合併更新，沒有攔截滾輪、觸控或持續播放的計時器。

畫面為教學示意，捲動時間不等於實際沖煮時間。器具是內建圖片生成工具產生的透明插畫，液體與指示線為 SVG；原圖、清理版與 WebP 存於 `public/images/brew/`。執行 `node scripts/prepare-brew-images.mjs` 可重建 WebP。

可使用其他已啟動的預覽站執行測試：`PLAYWRIGHT_BASE_URL=http://127.0.0.1:3147 npm run test:e2e`。
