import 'react-testing-library/cleanup-after-each';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

jest.setTimeout(30 * 1000);

expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className) {
      return className;
    },
  }),
);
