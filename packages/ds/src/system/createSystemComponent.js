// @flow

import React, { type ComponentType } from 'react';
import getDisplayName from 'react-display-name';
import { DesignSystemConsumer } from '../system';
import applyStyles from './utilities/applyStyles';
import normalizeComponent from './utilities/normalizeComponent';
import { systemStyles, systemStylesPropsNames } from './styles';
import { SystemComponent, type StyleFn, type SystemComponentProps } from './types';

export type ExtractStylesProps = <T>(StyleFn<T>) => T;

const SYSTEM_BLACKLIST = ['system', 'viewport', ...systemStylesPropsNames];

type Props = {
  as?: string | ComponentType<any> | SystemComponent<any>,
};

// @TODO find a way to extract props from styles
export default function createSystemComponent<T: Object>(
  Component: string | ComponentType<T> | Class<SystemComponent<T>>,
  extraStyles?: Array<StyleFn<any>> = [],
): Class<SystemComponent<T & Props & $Call<ExtractStylesProps, typeof systemStyles>>> {
  const [StyledComponent, componentBlacklist] = applyStyles(Component, extraStyles);

  StyledComponent.displayName = `SystemComponentBase(${getDisplayName(Component)})`;

  // eslint-disable-next-line flowtype/generic-spacing
  const overridesCache: Map<
    string | ComponentType<any> | SystemComponent<any>,
    [ComponentType<any>, Array<string>],
  > = new Map();

  return class SystemComponentBase extends SystemComponent<T & Props> {
    static appliedStyles = extraStyles;
    static blacklist = componentBlacklist;
    static isSystemComponent = true;
    static targetComponent = normalizeComponent(Component);
    static displayName = `SystemComponent(${getDisplayName(StyledComponent)})`;

    blacklist = [...SYSTEM_BLACKLIST, ...componentBlacklist].sort();
    component = StyledComponent;

    constructor(props) {
      super(props);

      const { as } = this.props;

      if (as) {
        let override = overridesCache.get(as);

        if (!override) {
          override = applyStyles(as, extraStyles, (SystemComponentBase: any).defaultProps);
          override[1] = [...SYSTEM_BLACKLIST, ...override[1]].sort();

          overridesCache.set(as, override);
        }

        // we can use this but flow does not know this type of destructuring
        // [this.component, this.blacklist] = override;
        this.component = override[0]; // eslint-disable-line prefer-destructuring
        this.blacklist = override[1]; // eslint-disable-line prefer-destructuring
      }
    }

    // eslint-disable-next-line react/display-name
    renderComponent = (systemProps: SystemComponentProps) => {
      const { as, ...restProps } = this.props;
      const FinalComponent = this.component;

      return (
        <FinalComponent
          blacklist={this.blacklist}
          system={systemProps.system}
          viewport={systemProps.viewport}
          {...restProps}
        />
      );
    };

    render() {
      return <DesignSystemConsumer>{this.renderComponent}</DesignSystemConsumer>;
    }
  };
}
