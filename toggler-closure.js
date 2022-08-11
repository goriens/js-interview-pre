function toggler(...args) {
  let ans = -1;
  return function () {
    ans = (ans + 1) % args.length;
    console.log(args[ans]);
  };
}
const toggle = toggler(1, 2, 3);
toggle();
toggle();
toggle();
toggle();
