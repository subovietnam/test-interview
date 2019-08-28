import { RotateImage } from './rotate-image';
describe('RotateImage', () => {
  it('Invalid input', () => {
    expect(new RotateImage().rotateProcess([12, [3, 4]])).toBe("invalid input");
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [[7, 4, 1], [8, 5, 2], [9, 6, 3]]', () => {
    expect(new RotateImage().rotateProcess([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe([[7, 4, 1], [8, 5, 2], [9, 6, 3]].toString());
  });
});
