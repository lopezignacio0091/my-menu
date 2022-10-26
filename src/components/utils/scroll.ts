// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys: any = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e: any) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: any) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
  return true;
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;

try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
        return true;
      },
    }),
  );
} catch (e) {
  supportsPassive = false;
}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault);
  window.removeEventListener('touchmove', preventDefault);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

export const enableScrollBody = () => {
  const body = document.querySelector('body');
  if (body) body.style.overflow = 'auto';
};

export const disableScrollBody = () => {
  const body = document.querySelector('body');
  if (body) body.style.overflow = 'hidden';
};
