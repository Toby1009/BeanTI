export const brewSteps = [
  { label: '準備', english: 'A MOMENT TO BEGIN', title: '先留一點時間，\n給自己。', description: '器具就位，咖啡粉準備好了。接下來的幾個小動作，會把一杯水變成有香氣的日常。', detail: '濾杯裡，是研磨好的咖啡粉。', cue: '往下滑，開始沖煮', point: [306, 265] },
  { label: '悶蒸', english: 'LET IT BLOOM', title: '先讓咖啡，\n輕輕醒來。', description: '先注入少量熱水，讓咖啡粉均勻濕潤。你可能看到粉床膨起、冒出小氣泡，那是氣體正在釋放。', detail: '留意粉床的變化，不必追求膨得越高越好。', cue: '少量注水 · 均勻濕潤', point: [306, 253] },
  { label: '注水', english: 'FIND YOUR RHYTHM', title: '把節奏，\n交給水。', description: '穩定地注水，讓水流經咖啡粉。水柱的落點與注水節奏，會改變粉層裡的水流與擾動。', detail: '看見水柱，也留意濾杯裡的水位。', cue: '穩定注水 · 留意水位', point: [320, 215] },
  { label: '滴落', english: 'GOOD THINGS TAKE A LITTLE TIME', title: '喜歡的味道，\n正在慢慢累積。', description: '停止注水，讓剩下的咖啡液滴入分享壺。香氣與風味隨著萃取進入杯中，液面也一點一點升高。', detail: '讓水自然流下；這段動畫不是沖煮計時器。', cue: '停止注水 · 等待滴落', point: [288, 409] },
  { label: '品飲', english: 'THIS LITTLE CUP IS YOURS', title: '接下來，\n換味蕾說話。', description: '你的咖啡好了。先聞聞香氣，再等到適口的溫度，慢慢喝。隨著溫度變化，也許會發現不一樣的味道。', detail: '花香、果甜、堅果？還說不上來，也沒有關係。', cue: '聞一聞 · 慢慢喝', point: [306, 345] },
] as const;

export const clamp = (value: number) => Math.max(0, Math.min(1, value));
export function ramp(progress: number, start: number, end: number) {
  const t = clamp((progress - start) / (end - start));
  return t * t * (3 - 2 * t);
}
export function brewFrame(progress: number) {
  const p = clamp(progress);
  return {
    step: Math.min(4, Math.floor(p * 5)),
    bloom: ramp(p, .2, .36),
    pour: ramp(p, .18, .24) * (1 - ramp(p, .59, .64)),
    kettle: ramp(p, .08, .18) * (1 - ramp(p, .6, .72)),
    liquid: ramp(p, .3, .8),
    drip: ramp(p, .3, .36) * (1 - ramp(p, .77, .82)),
    finish: ramp(p, .8, .94),
  };
}
