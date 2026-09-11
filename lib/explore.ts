/** Editorial tasting starting points, not measured predictions for a country or lot. */
export const origins = [
 {id:'ethiopia',name:'衣索比亞',english:'Ethiopia',region:'東非 · 耶加雪菲 / 西達馬',title:'像走進一座，有花香的果園。',description:'從清新的柑橘、花香到成熟果實，衣索比亞的不同微產區與處理法，可以展現很不同的個性。喜歡茶感的人，可以先看看水洗批次。',tags:['花香','柑橘','核果'],art:0,flavor:'floral',try:'找兩款同產區、焙度接近的水洗與日曬豆，並排喝喝看：香氣和口感有什麼不同？'},
 {id:'kenya',name:'肯亞',english:'Kenya',region:'東非 · 涅里 / 麒麟雅加',title:'一口果汁感，讓午後亮起來。',description:'肯亞咖啡常被以活潑酸質、莓果與柑橘調性描述。先從酸甜的平衡感受起，不必急著在第一口就找到某一種水果。',tags:['莓果','柑橘','果汁感'],art:4,flavor:'berry',try:'留意「有酸感」與「喝起來尖銳」的差別，稍微放涼後再比較甜感是否更容易辨認。'},
 {id:'colombia',name:'哥倫比亞',english:'Colombia',region:'南美洲 · 薇拉 / 娜玲瓏',title:'山的另一邊，還有新的味道。',description:'多樣的地形、品種與處理方式，讓哥倫比亞很難用一種味道概括。可以從帶果甜與焦糖聯想的水洗豆出發，再探索不同莊園。',tags:['果甜','焦糖','柑橘'],art:6,flavor:'sweet',try:'選豆時一起看莊園、品種和處理法；下次只換一個條件，更容易發現自己的喜好。'},
 {id:'brazil',name:'巴西',english:'Brazil',region:'南美洲 · 米納斯吉拉斯',title:'熟悉的堅果香，像一個小擁抱。',description:'堅果、巧克力與柔和酸感，是不少巴西咖啡的入門線索；也有果香鮮明的批次。喜歡舒服苦甜感，可以詢問相近風味的中焙豆。',tags:['堅果','巧克力','圓潤'],art:10,flavor:'nutty',try:'先喝黑咖啡，再加一點牛奶，感受堅果與可可的聯想如何改變。'},
] as const;
export const processes = [
 {id:'washed',name:'水洗',english:'Washed',title:'把果肉移開，留下清楚的輪廓。',description:'去除果皮與果肉，再以發酵、水洗或機械方式去除果膠，之後乾燥。實際做法會依產地而不同。',steps:['採收果實','去皮、去果肉','去果膠、洗淨','乾燥'],note:'常用「乾淨、清晰」描述，但水洗不代表沒有發酵，也不保證一定偏酸。',question:'這杯的香氣，能不能一層一層分辨？',layer:'乾燥前：果肉與果膠已去除'},
 {id:'natural',name:'日曬',english:'Natural',title:'讓整顆果實，一起慢慢乾燥。',description:'保留果皮與果肉乾燥，過程中翻動、管理乾燥條件，乾燥後才去除外層。重點是整果乾燥，並非只有這種方法會曬太陽。',steps:['採收果實','整果乾燥','去除乾燥外層','取得生豆'],note:'可能出現成熟果香、酒香或飽滿口感；乾淨細緻的日曬也存在。',question:'果香更像新鮮水果，還是果乾、果醬？',layer:'乾燥前：保留完整果實'},
 {id:'honey',name:'蜜處理',english:'Honey',title:'留一點果膠，陪豆子慢慢乾。',description:'去除果皮與部分果肉，保留一定程度的果膠乾燥。「蜜」指黏稠的果膠，並沒有加入蜂蜜。',steps:['採收果實','去皮、去果肉','保留果膠乾燥','去殼取得生豆'],note:'可留意甜感與圓潤口感。黃蜜、紅蜜、黑蜜的分法因生產者而異，不是統一的甜度等級。',question:'吞下之後，是否留下柔和的甜香聯想？',layer:'乾燥前：保留部分果膠'},
 {id:'anaerobic',name:'厭氧發酵',english:'Anaerobic',title:'換一種發酵環境，探索新的表情。',description:'在低氧或缺氧的條件下管理發酵。它可以搭配水洗或日曬等後續流程，並不是與前三者互斥的處理分類。',steps:['果實或去皮豆','控制氧氣與發酵','依批次水洗或日曬','乾燥、去殼'],note:'可能出現鮮明果香、香料或酒香，也可能很細緻；名稱本身不能告訴你發酵強度。',question:'這樣的香氣強度，是驚喜，還是有點太多？',layer:'發酵階段：控制容器內的氧氣'},
] as const;
export const flavors = [
 {id:'floral',name:'花香與茶感',english:'Floral & tea-like',examples:'茉莉 · 白花 · 紅茶',description:'花香是鼻子捕捉到的香氣聯想；茶感則常用來形容輕盈口感或類似茶的香氣。兩者可以一起出現，也可以各自存在。',tip:'先聞杯口，再小口喝。試著分辨「香氣很明顯」和「味道很濃」是不是同一回事。',color:'pink'},
 {id:'citrus',name:'柑橘與果酸',english:'Citrus & brightness',examples:'檸檬 · 葡萄柚 · 柳橙',description:'酸是味覺，柑橘則包含香氣聯想。舒服的果酸可能讓你想到水果的酸甜平衡，並不只是越酸越好。',tip:'含一小口，感受酸感是否伴隨甜感；等咖啡稍涼再比較一次。',color:'yellow'},
 {id:'berry',name:'莓果與熟果',english:'Berries & ripe fruit',examples:'藍莓 · 草莓 · 果醬',description:'水果調性可能清新，也可能成熟濃郁。果乾、果醬與酒香是不同的描述，不必一律歸成「發酵味」。',tip:'用你熟悉的水果作比較：更像剛切開的，還是煮成了果醬？',color:'pink'},
 {id:'sweet',name:'焦糖與甜香',english:'Caramel & sweetness',examples:'焦糖 · 黑糖 · 蜂蜜',description:'像糖的香氣，和舌頭感受到的甜，不完全相同。喝到焦糖聯想不表示咖啡真的加了糖。',tip:'吞下之後稍等一下，看看留在口中的感受，比較像甜香還是苦味。',color:'yellow'},
 {id:'nutty',name:'堅果與可可',english:'Nuts & cocoa',examples:'杏仁 · 榛果 · 黑巧克力',description:'堅果與可可是香氣、風味的參照物；苦甜的平衡、焙度與口感，會讓同樣的可可描述有不同表現。',tip:'想到的是牛奶巧克力，還是高濃度黑巧克力？用這個差別向咖啡師描述。',color:'apricot'},
 {id:'body',name:'口感與厚度',english:'Body & texture',examples:'輕盈 · 滑順 · 飽滿',description:'口感是咖啡在嘴裡的觸感。茶水般輕盈、奶油般滑順是比喻，並不代表加入了茶或奶油。',tip:'小口含住，感受液體的重量與滑順度。香氣奔放的咖啡，也可能口感輕盈。',color:'sage'},
] as const;

export function explorationDefaults(code?: string) {
 const valid = /^[BD][CF][LR][SA]$/.test(code ?? '');
 const bright = valid && code![0] === 'B';
 return {origin: valid ? (bright ? (code![2] === 'L' ? 'ethiopia' : 'kenya') : 'brazil') : 'ethiopia',method: valid && code![1] === 'F' ? 'natural' : 'washed',flavor: valid ? (bright ? (code![2] === 'L' ? 'floral' : 'berry') : 'nutty') : 'floral'};
}
