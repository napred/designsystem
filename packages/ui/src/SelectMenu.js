// @flow

import { IfViewport } from '@napred/ds';
import { Title, Box } from '@napred/primitives';
import React, { Fragment, useState } from 'react';
import Menu, { MenuSubheader } from './Menu';
import Button from './form/Button';
import SvgImage from './SvgImage';
import Divider from './Divider';
import { CloseIcon } from './assets';

type Props = {
  origin?: 'left' | 'right',
  title?: ?React.Node,
  renderButton: (opened: boolean, set: (value: boolean) => any) => React.Node,
  renderMenuContent: (opened: boolean, set: (value: boolean) => any) => React.Node,
};

function SelectMenu(props: Props) {
  const [focused, setFocused] = useState(false);

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
                    onClick={() => setFocused(false)}
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
