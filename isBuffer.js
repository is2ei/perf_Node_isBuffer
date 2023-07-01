const buf = Buffer.from('abc')

console.time('perf')

for (let i = 0; i < 100000000; i++) {
  Buffer.isBuffer(buf)
}

console.timeEnd('perf')
