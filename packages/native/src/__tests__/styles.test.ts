import { defaultTheme, nativeStyleList } from '../';
import applyStyles from '../applyStyles';

describe('test styles', () => {
  it('works for string styles', () => {
    expect(
      applyStyles(
        {
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bgColor: '#ccc',
          borderColor: '#ccc',
          borderStyle: 'dashed',
          color: '#ccc',
          display: 'flex',
          flex: '1',
          fontWeight: 'bold',
          overflow: 'hidden',
          overflowX: 'hidden', // not supported by react native, ignored in output
          overflowY: 'hidden', // not supported by react native, ignored in output
          position: 'absolute',
          shadow: '12px 12px 1px rgba(0, 0, 255, .2)',
          textAlign: 'center',
          textOverflow: 'ellipsis', // - not supported by react native, ignored in output
          textTransform: 'underline',
          transition: 'margin-right 2s ease-in-out .5s', // - not supported by react native, ignored in output
          whiteSpace: 'nowrap', // not supported by react native, ignored in output
        },
        { theme: defaultTheme, viewport: 0 },
        nativeStyleList,
      ),
    ).toMatchSnapshot();
  });

  it('works correctly for numeric styles', () => {
    expect(
      applyStyles(
        {
          borderRadius: '10px',
          borderWidth: '10px',
          bottom: '10px',
          flexBasis: '100%',
          flexGrow: 1,
          flexShrink: 1,
          fontWeight: 300,
          height: '10px',
          left: '10px',
          m: 0,
          maxHeight: '10px',
          maxWidth: '10px',
          minHeight: '10px',
          minWidth: '10px',
          opacity: 0.8,
          p: 0,
          right: '10px',
          top: '10px',
          width: '10px',
          zIndex: 10,
        },
        { theme: defaultTheme, viewport: 0 },
        nativeStyleList,
      ),
    ).toMatchSnapshot();
  });
});
