export type Scores = [number, number, number, number];
export type Category = 'sensory' | 'scene' | 'personality';
export type Option = { title: string; detail: string; icon: string; scores: Scores };
export type Question = { title: string; subtitle: string; category: Category; options: Option[] };
const o = (title: string, detail: string, icon: string, scores: Scores): Option => ({ title, detail, icon, scores });
export const questions: Question[] = [
  { title: '偷到一個下午，你想躲去哪裡？', subtitle: '今天沒有待辦清單，時間都是你的。', category: 'scene', options: [o('有風吹進來的白色房間','陽光、薄窗簾，和一小束花。','Flower2',[2,2,2,0]),o('海邊的熱帶小酒吧','夕陽落下，音樂才正要開始。','Palmtree',[2,-2,-1,1]),o('下著雨的木頭咖啡館','坐在老位置，聽雨慢慢說話。','CloudRain',[-1,1,-1,-1]),o('壁爐旁的柔軟沙發','裹好毯子，世界可以晚點再說。','Flame',[-2,0,-2,-1])] },
  { title: '甜點櫃前，只能帶走一個。', subtitle: '跟著第一眼的心動就好。', category: 'sensory', options: [o('酸甜檸檬塔','喜歡那一下讓人眨眼的清爽。','Citrus',[2,1,1,0]),o('伯爵茶戚風','輕輕的，香氣卻留得很久。','CakeSlice',[1,2,2,0]),o('焦糖烤布丁','滑順、奶香，熟悉的幸福。','Dessert',[-1,1,-2,-1]),o('濃巧克力蛋糕','苦甜濃厚，每一口都很滿足。','Cookie',[-2,0,-2,0])] },
  { title: '旅行的第一天，你會怎麼開始？', subtitle: '地圖打開了，但不一定要照著走。', category: 'personality', options: [o('走進沒去過的小巷','讓一點小意外帶路。','Footprints',[0,0,1,2]),o('先去收藏很久的老店','期待的味道，終於見面。','MapPin',[0,0,0,-2]),o('報名一個神祕體驗','不知道會發生什麼，才有趣。','Sparkles',[0,0,0,2]),o('安排一條舒服的散步路線','有方向，也有休息的空白。','Map',[0,1,1,-1])] },
  { title: '選一杯陪你度過夏天的飲料。', subtitle: '先不想咖啡，想想你真的愛喝的。', category: 'sensory', options: [o('無糖茉莉冷泡茶','清透、輕盈，花香剛剛好。','Leaf',[1,2,2,0]),o('現榨柳橙汁','明亮酸甜，整個人醒過來。','Citrus',[2,1,0,0]),o('厚奶可可','奶油般的口感，越濃越好。','Milk',[-2,1,-2,-1]),o('水果康普茶','帶點發酵酸香，氣泡很活潑。','GlassWater',[2,-2,0,2])] },
  { title: '如果今天是一張唱片⋯⋯', subtitle: '哪一種聲音，最像你想要的心情？', category: 'scene', options: [o('輕輕的木吉他','簡單旋律，細節慢慢浮現。','Guitar',[0,1,2,0]),o('溫暖的老派爵士','厚實低音，陪我安靜坐著。','Music2',[-1,0,-1,-1]),o('有點奇怪的獨立樂團','下一拍猜不到，反而更想聽。','Radio',[0,0,0,2]),o('熟悉的療癒歌單','每一首都是我的安全感。','Headphones',[0,1,0,-2])] },
  { title: '水果攤上，你最想帶哪一袋回家？', subtitle: '想像咬下去的味道，不只是顏色。', category: 'sensory', options: [o('葡萄柚與青蘋果','俐落的酸，清清爽爽。','Citrus',[2,0,0,0]),o('水蜜桃與梨子','溫柔甜香，細細地嚐。','Apple',[1,0,0,0]),o('熟透的芒果與鳳梨','濃郁熱帶香，熟甜帶點酸。','Palmtree',[1,0,0,0]),o('椰棗與熟香蕉','柔軟、甜潤，不要太酸。','Cherry',[-2,0,0,0])] },
  { title: '你的理想週末，長什麼樣？', subtitle: '不用變成更好的人，做自己就好。', category: 'personality', options: [o('留白，發現一件小事','慢慢走，也能走進新風景。','Sprout',[0,0,2,1]),o('重複最喜歡的日常','早餐、老店、同一個座位。','Coffee',[0,0,0,-2]),o('試一件完全沒做過的事','想收藏一個全新的故事。','Compass',[0,0,0,2]),o('完成一件漂亮的小作品','不求多，喜歡恰到好處。','Paintbrush',[0,1,2,0])] },
  { title: '哪一種香氣，會讓你多停留一下？', subtitle: '把鼻子靠近，深呼吸。', category: 'sensory', options: [o('白花與佛手柑','像茶，也像早晨的花園。','Flower2',[2,2,2,0]),o('剛出爐的堅果餅乾','溫暖烘烤香，很安心。','Cookie',[-2,1,-1,-1]),o('莓果果醬與果酒香','濃濃果香，帶一點發酵感。','Cherry',[1,-2,-1,0]),o('黑巧克力與香料','低沉苦甜，餘韻長一點。','Flame',[-2,0,-2,0])] },
  { title: '挑一張寄給自己的明信片。', subtitle: '哪一片風景，是你此刻想住進去的？', category: 'scene', options: [o('春天，山上的小花園','空氣清新，花開得很安靜。','Flower2',[1,1,2,0]),o('夏天，陌生島嶼的市集','水果、香氣，和沒見過的日常。','Sun',[1,0,-1,1]),o('秋天，森林裡的小木屋','落葉、木頭和溫暖的光。','Trees',[-1,1,-1,-1]),o('冬天，城市裡的深夜書店','在厚厚的故事裡取暖。','Moon',[-1,0,-2,0])] },
  { title: '關於「酸」，哪一句最像你？', subtitle: '這題讓味蕾說真話，沒有標準答案。', category: 'sensory', options: [o('喜歡！像柑橘那樣很清醒','酸感突出也沒關係。','Citrus',[2,0,0,0]),o('酸甜平衡就很棒','像水蜜桃，柔和一點。','Apple',[1,0,0,0]),o('一點點就好，甜潤更重要','不想喝完嘴巴皺起來。','Dessert',[-1,0,0,0]),o('比較愛可可般的苦甜','酸感越低越好。','Coffee',[-2,0,0,0])] },
  { title: '打開一份禮物，你希望是⋯⋯', subtitle: '心意收到，現在偷偷許願。', category: 'personality', options: [o('一直很喜歡的經典款','懂我的人，知道我不會膩。','Heart',[0,0,0,-2]),o('有故事的小眾手作品','喜歡那些不太一樣的細節。','Paintbrush',[0,0,1,1]),o('完全猜不到的驚喜盒','拆開之前，最好不要告訴我。','Gift',[0,0,0,2]),o('實用、耐看、每天都能用','越相處，越喜歡。','Package',[0,1,0,-1])] },
  { title: '早餐桌上，挑一個風味搭配。', subtitle: '熟悉或新鮮，哪一口會讓你期待？', category: 'sensory', options: [o('原味吐司配清香茶','乾淨簡單，喜歡清楚的味道。','Wheat',[0,2,2,-2]),o('奶油吐司配熱可可','圓潤厚實，熟悉就很美好。','Milk',[-2,2,-2,-2]),o('水果優格配莓果果醬','微微發酵酸香，這個我熟悉。','Cherry',[2,-2,1,-1]),o('想試水果酸種與新口味果醬','發酵香和新搭配，都想嚐嚐。','Sparkles',[1,-2,0,2])] },
  { title: '在小店裡，你會選哪個角落？', subtitle: '一個座位，也可以是自己的小宇宙。', category: 'scene', options: [o('窗邊的一張小桌','光線、花瓶，和一點安靜。','Sun',[1,1,2,0]),o('開放吧台的第一排','看職人忙碌，聊聊新發現。','Coffee',[0,0,0,1]),o('被書包圍的軟沙發','厚厚的椅墊，慢慢待著。','BookOpen',[-1,0,-2,0]),o('熟悉的靠牆老位置','不用選擇，就很舒服。','Armchair',[0,0,0,-2])] },
  { title: '遇到一個沒聽過的菜名，你會？', subtitle: '菜單只寫著：「主廚今天的小實驗」。', category: 'personality', options: [o('就是它了，來一份','願意把一次機會交給驚喜。','Sparkles',[0,0,0,2]),o('問問味道，再決定','有點新鮮，但想知道方向。','MessageCircle',[0,0,0,1]),o('和朋友分一份試試','小小冒險，留一半給熟悉。','Users',[0,0,0,0]),o('點回最愛的那一道','今天想要確定的幸福。','Heart',[0,0,0,-2])] },
  { title: '替今天的心情，選一種天氣。', subtitle: '只是小小的想像，照直覺就好。', category: 'scene', options: [o('雨後剛放晴','乾淨的空氣，輕輕的光。','CloudSun',[1,1,1,0]),o('熱烈的夏日午後','陽光滿滿，什麼都很鮮明。','Sun',[1,0,-1,0]),o('有點涼的陰天','溫柔低調，適合慢慢來。','Cloud',[-1,1,0,0]),o('下雪的寧靜夜晚','想被一點厚實的溫暖包住。','Snowflake',[-1,0,-1,0])] },
  { title: '最後，你想怎麼認識一杯咖啡？', subtitle: '不必很懂，喜歡就是很好的起點。', category: 'personality', options: [o('先找到一杯能每天喝的','有個熟悉的味道陪我就好。','Coffee',[0,0,0,-2]),o('從喜歡的味道，往外走一點','一步一步，慢慢擴大世界。','Sprout',[0,0,0,1]),o('每次都想試一點不一樣','把每杯咖啡當成小旅行。','Compass',[0,0,0,2]),o('同一杯，細細發現不同層次','重複裡，也有新的小細節。','Search',[0,1,2,-1])] },
];
export const axes = [
  { left: '明亮', right: '深沉', en: 'BRIGHT / DEEP', letters: ['B','D'], description: '酸甜清爽，或苦甜厚實。' },
  { left: '乾淨', right: '奔放', en: 'CLEAN / FUNKY', letters: ['C','F'], description: '清晰香氣，或鮮明發酵感。' },
  { left: '細緻', right: '濃厚', en: 'DELICATE / RICH', letters: ['L','R'], description: '花香茶感，或飽滿口感。' },
  { left: '探索', right: '經典', en: 'ADVENTUROUS / CLASSIC', letters: ['A','S'], description: '願意試新味道，或偏愛熟悉。' },
];
export const categoryWeights: Record<Category, number> = { sensory: .65, scene: .25, personality: .10 };
export function scoreAnswers(answers: number[]) {
  if (answers.length !== questions.length || answers.some((a,i) => !Number.isInteger(a) || !questions[i].options[a])) throw new Error('請完成所有題目');
  const sums: Scores = [0,0,0,0];
  for (const category of Object.keys(categoryWeights) as Category[]) {
    const indices = questions.flatMap((q,i) => q.category === category ? [i] : []);
    for (const i of indices) questions[i].options[answers[i]].scores.forEach((value,axis) => { sums[axis] += value / (indices.length * 2) * categoryWeights[category]; });
  }
  const code = sums.map((s,i) => axes[i].letters[s >= 0 ? 0 : 1]).join('');
  return { code, scores: sums.map(s => Math.round((s + 1) * 50)) as Scores };
}
export type Profile = { code: string; name: string; english: string; quote: string; description: string; art: number; color: string; flavors: string[] };
const entries: [string,string,string,string,string,number,string,string[]][] = [
  ['BCLS','花園守護者','The Garden Keeper','把日子，泡成一杯溫柔。','你喜歡清楚、輕盈的美好，熟悉的花香與茶感就能讓日常發光。不必每次都驚豔，一杯耐喝的咖啡就是你的安心角落。',0,'sage',['茉莉','柑橘','紅茶']],
  ['BCLA','花香漫遊者','The Floral Wanderer','在細小的地方，發現整個世界。','你容易被清晰而有層次的事物吸引。比起濃烈苦味，你更期待花香、茶感，和一點「這真的是咖啡嗎？」的小驚喜。',1,'sage',['白花','佛手柑','水蜜桃']],
  ['BCRS','蜜桃野餐家','The Peach Picnicker','帶一點甜，把生活過慢一點。','你喜歡明亮的果甜，也希望每一口有飽滿的份量。乾淨、多汁、舒服，是你理想咖啡的三個關鍵字。',2,'pink',['水蜜桃','蜂蜜','甜橙']],
  ['BCRA','日光尋味家','The Sunshine Seeker','口袋裝著陽光，下一站隨心。','你想要有存在感的果甜，也喜歡味道清楚分明。一款乾淨又多汁的新豆子，能讓平常的下午變成小小旅行。',3,'yellow',['柑橘','黃桃','焦糖']],
  ['BFLS','莓果夢想家','The Berry Dreamer','熟悉的日子，也可以酸甜可愛。','你偏愛輕盈的口感，卻不介意一點活潑果香與發酵感。像莓果茶那樣清爽、又帶個性的咖啡，是值得回訪的老朋友。',4,'pink',['草莓','藍莓','果茶']],
  ['BFLA','夏日探險家','The Summer Explorer','生活太短，先嚐一口夏天。','你對明亮、奔放的香氣充滿好奇，同時喜歡輕巧的尾韻。熱帶水果與輕微酒香，像是杯子裡一張寄自遠方的明信片。',5,'yellow',['百香果','鳳梨','花香']],
  ['BFRS','果醬收藏家','The Jam Collector','把最喜歡的甜，留在每一天。','你喜歡成熟果實的甜美、濃厚口感和一點發酵香。找到喜歡的果醬調性後，你願意一次又一次重溫。',6,'pink',['莓果果醬','熟桃','可可']],
  ['BFRA','熱帶派對家','The Tropical Spark','每一口，都值得一場小慶祝。','你喜歡飽滿鮮明的風味，也願意探索不同的香氣組合。多汁果甜、發酵香與厚實口感，最能讓你的味蕾亮起來。',7,'apricot',['芒果','鳳梨','熟莓果']],
  ['DCLS','森林讀書人','The Woodland Reader','安靜的時光，自有它的香氣。','你喜歡柔和酸感、乾淨的風味與不太厚重的口感。溫暖的堅果、茶香與烘烤調性，適合陪你翻過好多頁日常。',8,'sage',['烤杏仁','紅茶','太妃糖']],
  ['DCLA','暮光散步家','The Twilight Walker','慢慢走，轉角也會有驚喜。','你偏好溫潤、清楚的味道，同時對新的細節保持好奇。酸感柔和的咖啡，也能藏著茶香與香料的小小變化。',9,'apricot',['烤堅果','焙茶','紅糖']],
  ['DCRS','焦糖收藏家','The Caramel Keeper','有些幸福，熟悉就很好。','你喜歡穩定舒服的味道，和一口就能感到的溫暖。乾淨的堅果、焦糖與滑順口感，是你想天天見面的咖啡。',10,'yellow',['焦糖','榛果','牛奶巧克力']],
  ['DCRA','醇香藝術家','The Velvet Artist','熟悉的底色，也能畫出新風景。','你喜歡苦甜與濃厚口感，但也願意替經典多加一點變化。一款乾淨、有質地的新產區咖啡，會是你的新靈感。',11,'sage',['黑巧克力','核桃','黑糖']],
  ['DFLS','櫻桃詩人','The Cherry Poet','餘韻裡，藏著沒說完的故事。','你喜歡低調的苦甜，也欣賞一點成熟果香。口感不用太厚，帶乾果和柔和發酵香的咖啡就能留住你的注意力。',12,'pink',['乾櫻桃','果乾','可可']],
  ['DFLA','星夜旅人','The Starlit Voyager','沿著香氣，走向未知的小路。','你願意探索特殊香氣，卻不喜歡口感太沉重。成熟果香與輕巧苦甜之間，那一點不容易命名的味道讓你著迷。',13,'pink',['葡萄乾','香料','熟果']],
  ['DFRS','午夜可可家','The Midnight Cocoa','世界再吵，也有一杯安穩。','你喜歡濃厚、圓潤的苦甜，也能接受些許成熟發酵調性。可可、乾果和綿長尾韻，像一條剛剛好的柔軟毯子。',14,'apricot',['黑巧克力','熟果','黑糖']],
  ['DFRA','香料魔法師','The Spice Magician','平凡的一天，也值得施點魔法。','你對濃厚而獨特的味道充滿好奇。熟果、香料與發酵調性在杯中交會，每一杯都像打開一本新的食譜。',15,'sage',['肉桂','熟莓果','可可']],
];
export const profiles: Profile[] = entries.map(([code,name,english,quote,description,art,color,flavors]) => ({code,name,english,quote,description,art,color,flavors}));
export function getProfile(code: string) { return profiles.find(p => p.code === code); }
export function recommendation(p: Profile) {
  const bright = p.code[0] === 'B', clean = p.code[1] === 'C', delicate = p.code[2] === 'L', adventurous = p.code[3] === 'A';
  const origins = bright ? (delicate ? ['衣索比亞 Ethiopia','巴拿馬 Panama','哥倫比亞 Colombia'] : ['肯亞 Kenya','哥倫比亞 Colombia','哥斯大黎加 Costa Rica']) : ['巴西 Brazil','瓜地馬拉 Guatemala','哥倫比亞 Colombia'];
  const process = clean ? '水洗 Washed' : adventurous ? '日曬 Natural・可少量嘗試厭氧處理' : '日曬 Natural';
  const roast = bright ? '淺焙 ～ 淺中焙' : '中焙 ～ 中深焙';
  const brew = delicate ? 'V60 手沖・Origami' : '濾杯手沖・法式濾壓・義式';
  const order = `我想找${roast}、${bright ? '帶柔和果酸' : '酸感較低、偏苦甜'}、${clean ? '風味乾淨' : '可以帶一點成熟果香與發酵感'}的咖啡。喜歡${p.flavors.join('、')}，口感希望${delicate ? '輕盈、有茶感' : '飽滿、滑順'}。可以推薦一款${clean ? '水洗' : '日曬'}豆${adventurous ? '，或類似風味的新選擇' : ''}嗎？`;
  return {origins,process,roast,brew,order,tryNext: adventurous ? (clean ? '試試同一產區的不同品種或不同莊園，從小杯開始。' : '先試少量特殊處理豆，確認自己喜歡的發酵強度。') : '先找到一款喜歡的豆子，記下焙度與風味，再慢慢延伸。',avoid: `${bright ? '強烈煙燻與重苦味' : '尖銳、突出的酸感'}${clean ? '、強烈酒香發酵調性' : ''}${delicate ? '、過度厚重的口感' : ''}，可以先少量試喝。`};
}
