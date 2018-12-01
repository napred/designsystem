import { IfViewport } from '@napred/ds';
import { Box, Title } from '@napred/primitives';
import React, { Fragment, ReactElement, useCallback, useState } from 'react';
import { CloseIcon } from './assets';
import Divider from './Divider';
import Button from './form/Button';
import Menu, { MenuSubheader } from './Menu';
import SvgImage from './SvgImage';

interface IProps {
  origin?: 'left' | 'right';
  title?: ReactElement<any>;
  renderButton: (opened: boolean, set: (value: boolean) => any) => ReactElement<any>;
  renderMenuContent: (opened: boolean, set: (value: boolean) => any) => ReactElement<any>;
}

function SelectMenu(props: IProps) {
  const [focused, setFocused] = useState(false);
  const onClickClose = useCallback(() => setFocused(false), [setFocused]);

  const { origin, renderButton, renderMenuContent, title } = props;
  const settings = {
    leftOrigin: origin === 'right' ? 'auto' : '0',
    rightOrigin: origin === 'left' ? 'auto' : '0',
  };
  return (
    <Box as="div" position="relative" m={0} p={0}>
      {renderButton(focused, setFocused)}
      {focused && (
        <Menu
          left={settings.leftOrigin}
          right={settings.rightOrigin}
          top={['0', '0', '100%', '100%']}
          minWidth="200px"
          width={['100vw', '100vw', 'auto']}
          height={['100vh', '100vh', 'auto']}
        >
          <IfViewport is={[0, 1]}>
            {() => (
              <Fragment>
                <MenuSubheader alignItems="center">
                  {typeof title === 'string' ? <Title>{title}</Title> : title}
                  <Button
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={0}
                    ml="auto"
                    variant="transparent"
                    onClick={onClickClose}
                  >
                    <SvgImage icon={CloseIcon} />
                  </Button>
                </MenuSubheader>
                <Divider my={0} />
              </Fragment>
            )}
          </IfViewport>
          {renderMenuContent(focused, setFocused)}
        </Menu>
      )}
    </Box>
  );
}

SelectMenu.defaultProps = {
  origin: 'left',
};

export default SelectMenu;
