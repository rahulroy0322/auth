/* eslint-disable no-magic-numbers */

const val = Math.floor(Math.random() * 100);

const initial = {
  x: '',
  y: '',
} as {
  x: string;
  y: string;
};

if (val < 25) {
  initial.x = '-110vw';
} else if (val < 50) {
  initial.y = '-110vh';
} else if (val < 75) {
  initial.x = '110vw';
} else if (val < 100) {
  initial.y = '110vh';
}

export { initial };
