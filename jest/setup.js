require('react-testing-library/cleanup-after-each');
const emotion = require('emotion');
const { createSerializer } = require('jest-emotion');

jest.setTimeout(30 * 1000);

expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className) {
      return className;
    },
  }),
);
