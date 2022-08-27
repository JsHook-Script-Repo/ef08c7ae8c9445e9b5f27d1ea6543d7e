const m = Module.findBaseAddress("libminecraftpe.so");
const pattern = '10 a0 52 e0 03 13 aa e1 03 15 aa e2 03 16 aa';
Memory.scan(m, 99999999999, pattern, {
  onMatch(address, size) {
    Memory.patchCode(address, 1, code => { code.writeU8(0x40) } );
    // Optionally stop scanning early:
    return 'stop';
  },
  onComplete() {
    common.dialog('Memory scan complete');
  }
});
