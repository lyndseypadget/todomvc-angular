import {ChangeDetectionStrategy, Component} from '@angular/core';

/** @title Basic virtual scroll */
@Component({
  selector: 'virtual-scroll',
  styleUrls: ['virtual-scroll.component.css'],
  templateUrl: 'virtual-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollComponent {
  todos = Array.from({length: 100000}).map((_, i) => `todo #${i}`);
}
