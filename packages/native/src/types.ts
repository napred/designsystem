import { IDSProps } from '@napred/ds';
import { NativeStylerProps } from './styleList';

/**
 * Base Design system component props
 *
 * This type should be used if you are defining custom props on a component
 * This type should be used also if you have custom base styles
 */
export type DSProps = IDSProps<NativeStylerProps>;

export type StyleDefinition = string | number | { [key: string]: string | number };
