import { HasUserPipe } from './has-user.pipe';

describe('HasUserPipe', () => {
  it('create an instance', () => {
    const pipe = new HasUserPipe();
    expect(pipe).toBeTruthy();
  });
});
