import { createComponent, DSProps } from '@napred/browser';
import { Flex, Title } from '@napred/primitives';
import React, { ComponentType, Fragment, ReactNode, useState } from 'react';
import Button from './form/Button';
import SvgImage from './SvgImage';

type Renderer = (index: number, onTabSelect: (index: number) => any) => ReactNode;

interface ITabsProps {
  activeIndex?: null | number;
  renderTabs?: Renderer;
  renderContent: Renderer | Renderer[];
}

function Tabs(props: ITabsProps) {
  const [activeIndex, setActiveIndex] = useState(props.activeIndex || 0);
  const { renderContent, renderTabs } = props;

  const handleTabSelect = (activeIdx: number) => {
    if (Array.isArray(renderContent) && activeIndex > renderContent.length - 1) {
      throw new Error('You tried to set active index in tabs out of range.');
    }

    setActiveIndex(activeIdx);
  };

  const renderTab = Array.isArray(renderContent) ? renderContent[activeIndex] : renderContent;

  return (
    <Fragment>
      {renderTabs ? renderTabs(activeIndex, handleTabSelect) : null}

      {renderTab != null && renderTab(activeIndex, handleTabSelect)}
    </Fragment>
  );
}

interface ITabProps extends DSProps {
  inactiveColor?: string;
  activeColor?: string;
  icon?: ComponentType<any>;
  title?: null | string;
  active?: boolean;
  bgColor?: string;
  disabled?: boolean;
  onClick?: (i: number) => any;
}

const TransitionFlex = createComponent('TransitionFlex', Flex);

function Tab({
  active = false,
  bgColor,
  disabled = false,
  inactiveColor = 'turqoiseDark',
  activeColor = 'primary',
  onClick,
  icon,
  title,
  ...rest
}: ITabProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick as () => any}
      hoverColor={activeColor}
      py={2}
      px={3}
      bgColor={bgColor || 'greyLightest'}
      mx={1}
      borderWidth="0px"
      {...rest}
    >
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        {icon != null && (
          <SvgImage
            icon={icon}
            fill={active ? activeColor : inactiveColor}
            width="30px"
            height="30px"
          />
        )}

        {title != null && (
          <Title
            color={active ? activeColor : inactiveColor}
            mx={1}
            display={icon ? ['none', 'block'] : 'block'}
          >
            {title}
          </Title>
        )}
      </Flex>
      <TransitionFlex
        opacity={active ? 1 : 0.1}
        width="100%"
        height="1px"
        mt="3px"
        bgColor={active ? activeColor : 'transparent'}
      />
    </Button>
  );
}

export { Tab };
export default Tabs;
