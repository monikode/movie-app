import { MoviePipe } from './movie.pipe';

describe('MoviePipe', () => {
  it('create an instance', () => {
    const pipe = new MoviePipe();
    expect(pipe).toBeTruthy();
  });
});
