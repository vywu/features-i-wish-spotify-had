import { ExplicitPipe } from './explicit.pipe';

describe('ExplicitPipe', () => {
  it('create an instance', () => {
    const pipe = new ExplicitPipe();
    expect(pipe).toBeTruthy();
  });
});
