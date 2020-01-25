import { getProcessedOptions } from './index';
import { icon } from './icon';
import { userAgent } from './userAgent';
import { name } from './name';

jest.mock('./icon');
jest.mock('./name');
jest.mock('./userAgent');

const modules = [icon, userAgent, name];
modules.forEach((module) => {
  (module as jest.Mock).mockImplementation(() => Promise.resolve());
});

test('it should return a list of promises', () => {
  const result = getProcessedOptions({});
  expect(result).toHaveLength(3);
  result.forEach((value) => {
    expect(value).toBeInstanceOf(Promise);
  });
});
