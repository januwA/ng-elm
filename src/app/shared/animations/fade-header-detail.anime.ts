import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

class FadeHeaderDetail {
  name: string;
}

export const fadeHeaderDetail = ({ name }: FadeHeaderDetail) => {
  return trigger(name, [
    transition(':enter', [
      // 动画执行中的动画，结束的时候不会保留
      style({opacity: 0}),

      // 动画结束后,保留的样式
      animate('0.2s', style({
        opacity: 1,
      }))
    ]),

    transition(':leave', [
      animate('0s', style({
        opacity: 0,
      }))
    ]),
  ]);
}