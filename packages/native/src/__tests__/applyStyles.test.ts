import { createTheme, IStyler } from '@napred/ds';
import applyStyles from '../applyStyles';

const theme = createTheme({} as any);

describe('applyStyles', () => {
  it('works correctly for style returning string', () => {
    const cssStringStyle: IStyler<{ marginBottom?: string }> = {
      apply: (props: { marginBottom?: string }) => `
        font-size: 10px;
        line-height: 20px;
        margin-top: 90px;
        margin-bottom: ${props.marginBottom || '80px'};
        `,
      propNames: ['marginBottom'],
      stripProps: ['marginBottom'],
    };

    expect(applyStyles({}, { theme, viewport: 0 }, [cssStringStyle])).toEqual({
      default: {
        fontSize: 10,
        lineHeight: 20,
        marginBottom: 80,
        marginTop: 90,
      },
    });

    expect(applyStyles({ marginBottom: '60px' }, { theme, viewport: 0 }, [cssStringStyle])).toEqual(
      {
        default: {
          fontSize: 10,
          lineHeight: 20,
          marginBottom: 60,
          marginTop: 90,
        },
      },
    );
  });

  it('works correctly for style returning css object', () => {
    const cssObjectStyle: IStyler<{ marginBottom?: string }> = {
      apply: (props: { marginBottom?: string }) => ({
        fontSize: 10,
        marginBottom: props.marginBottom || 80,
        marginTop: 90,
      }),
      propNames: ['marginBottom'],
      stripProps: ['marginBottom'],
    };

    expect(applyStyles({}, { theme, viewport: 0 }, [cssObjectStyle])).toEqual({
      default: {
        fontSize: 10,
        marginBottom: 80,
        marginTop: 90,
      },
    });

    expect(applyStyles({ marginBottom: 60 }, { theme, viewport: 0 }, [cssObjectStyle])).toEqual({
      default: {
        fontSize: 10,
        marginBottom: 60,
        marginTop: 90,
      },
    });
  });

  it('works correctly for style returning multiple styles', () => {
    const cssStringStyle: IStyler<{ marginBottom?: string }> = {
      apply: (props: { marginBottom?: string }) => `
        color: white;
        font-size: 10px;
        margin-top: 90px;
        margin-bottom: ${props.marginBottom || '80px'};
        `,
      propNames: ['marginBottom'],
      stripProps: ['marginBottom'],
    };
    const cssObjectStyle: IStyler<{ marginBottom?: string }> = {
      apply: (props: { marginBottom?: string }) => ({
        color: 'black',
        fontSize: 10,
        marginBottom: props.marginBottom || 80,
        marginTop: 90,
      }),
      propNames: ['marginBottom'],
      stripProps: ['marginBottom'],
    };

    expect(applyStyles({}, { theme, viewport: 0 }, [cssStringStyle, cssObjectStyle])).toEqual({
      default: {
        color: 'black',
        fontSize: 10,
        marginBottom: 80,
        marginTop: 90,
      },
    });

    expect(
      applyStyles({ marginBottom: '60px' }, { theme, viewport: 0 }, [
        cssStringStyle,
        cssObjectStyle,
      ]),
    ).toEqual({
      default: {
        color: 'black',
        fontSize: 10,
        marginBottom: 60,
        marginTop: 90,
      },
    });
  });
});
