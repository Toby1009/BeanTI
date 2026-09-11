import { test } from 'node:test';
import assert from 'node:assert/strict';
import { brewFrame } from './brew';
test('brew starts empty and finishes with a full cup and no pouring',()=>{const start=brewFrame(0),end=brewFrame(1);assert.equal(start.liquid,0);assert.equal(start.kettle,0);assert.equal(end.liquid,1);assert.equal(end.finish,1);assert.equal(end.pour,0);assert.equal(end.drip,0);});
test('liquid fills monotonically and rewinding restores the same frame',()=>{let last=0;for(let i=0;i<=1000;i++){const p=i/1000;const f=brewFrame(p);assert.ok(f.liquid>=last);last=f.liquid;for(const key of ['bloom','pour','kettle','liquid','drip','finish'] as const)assert.ok(f[key]>=0&&f[key]<=1);assert.equal(f.step,Math.min(4,Math.floor(p*5)));assert.deepEqual(f,brewFrame(p));}});
test('scroll overshoot is safely clamped',()=>{assert.deepEqual(brewFrame(-1),brewFrame(0));assert.deepEqual(brewFrame(2),brewFrame(1));});
