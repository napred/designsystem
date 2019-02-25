import { IStyler } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';

export type Cursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'initial'
  | 'inherit'
  | 'unset'
  | 'context-menu'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nswe-resize'
  | 'zoom-in'
  | 'zoom-out'
  | 'help';

export type PointerEvents =
  | 'auto'
  | 'none'
  | 'bounding-box'
  | 'visiblepainted'
  | 'visiblefill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit'
  | 'initial'
  | 'unset';

export const cursor: IStyler<{
  cursor?: Cursor | Array<Cursor | null | undefined> | null | undefined;
}> = createStringStyle('cursor', 'cursor');

export const pointerEvents: IStyler<{
  pointerEvents?: PointerEvents | Array<PointerEvents | null | undefined> | null | undefined;
}> = createStringStyle('pointerEvents', 'pointerEvents');

