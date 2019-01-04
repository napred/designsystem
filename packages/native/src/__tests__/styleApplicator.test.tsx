import React from 'react';
import { Text, View } from 'react-native';
import { render } from 'react-native-testing-library';
import { createComponent, DesignSystem } from '../';

jest.mock('Dimensions');

const DSText = createComponent('DSText', Text);
const DSView = createComponent('DSView', View);

DSText.defaultProps = {
  color: 'green',
};

DSView.defaultProps = {
  bgColor: 'green',
  color: 'white',
};

describe('style applicator', () => {
  it('works correctly for simple system component', () => {
    const { toJSON } = render(
      <DesignSystem>
        <DSView color="red" />
        <DSText color="blue" />
      </DesignSystem>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('works correctly for extended system component', () => {
    const DSExtendedText = createComponent('DSExtendedText', DSText);
    const DSExtendedView = createComponent('DSExtendedView', DSView);

    const { toJSON } = render(
      <DesignSystem>
        <DSExtendedView bgColor="blue" />
        <DSExtendedText bgColor="tomato" m={[1, 2, 3, 4]} />
      </DesignSystem>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('works correctly for overridden system component', () => {
    const DSExtendedView = createComponent('DSExtendedView', DSView);

    DSExtendedView.defaultProps = {
      fontWeight: 'bold',
    };

    const { toJSON } = render(
      <DesignSystem>
        <DSView as={DSExtendedView} bgColor="blue" />
      </DesignSystem>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
