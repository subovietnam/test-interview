import { RotateImage } from '../src/question1/rotate-image';
describe('RotateImage', () => {
  it('Invalid input in there k = "a"', () => {
    expect(new RotateImage().rotateMatrix([[1, 2], [3, 4]], "a")).toEqual("invalid input");
  });
  it('Invalid input in there matrix = [12, [3, 4]]', () => {
    expect(new RotateImage().rotateMatrix([12, [3, 4]], 1)).toEqual("invalid input");
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [[7, 4, 1], [8, 5, 2], [9, 6, 3]] with k = 0', () => {
    expect(new RotateImage().rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0)).toEqual("invalid input");
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [[7, 4, 1], [8, 5, 2], [9, 6, 3]] with k = 1', () => {
    expect(new RotateImage().rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [9, 8, 7], [6, 5, 4], [3, 2, 1]] with k = 2', () => {
    expect(new RotateImage().rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)).toEqual([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [[3, 6, 9], [2, 5, 8], [1, 4, 7]] with k = 3', () => {
    expect(new RotateImage().rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3)).toEqual([[3, 6, 9], [2, 5, 8], [1, 4, 7]]);
  });
  it('matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] to [[7, 4, 1], [8, 5, 2], [9, 6, 3]] with k = 4', () => {
    expect(new RotateImage().rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
