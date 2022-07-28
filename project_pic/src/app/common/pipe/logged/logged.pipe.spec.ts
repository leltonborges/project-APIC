import { LoggedPipe } from './logged.pipe';

describe('LoggedPipe', () => {
  it('create an instance', () => {
    const pipe = new LoggedPipe();
    expect(pipe).toBeTruthy();
  });
});
