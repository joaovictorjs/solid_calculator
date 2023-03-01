import './styles.css';
import { render } from 'solid-js/web';
import App from './app/App';
import {
  WindowGetSize,
  WindowSetMaxSize,
  WindowSetMinSize,
} from '../wailsjs/runtime/runtime';

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    const [targetWidth, targetHeight] = [275, 490];
    const [currentWidth, currentHeight] = [
      window.outerWidth,
      window.outerHeight,
    ];
    const [remWidth, remHeigth] = [
      targetWidth - currentWidth,
      targetHeight - currentHeight,
    ];

    const actualSize = await WindowGetSize();

    if (actualSize.w !== targetWidth && actualSize.h !== targetHeight) {
      await WindowSetMaxSize(actualSize.w + remWidth, actualSize.h + remHeigth);
      await WindowSetMinSize(actualSize.w + remWidth, actualSize.h + remHeigth);
    } else {
      await WindowSetMaxSize(targetWidth + remWidth, targetHeight + remHeigth);
      await WindowSetMinSize(targetWidth + remWidth, targetHeight + remHeigth);
    }
  },
  { once: true }
);

render(App, document.querySelector('.root') as Element);
