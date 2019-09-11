export class RotateImage {
  constructor() {
  }
  private validate(matrix, k) {
    var error = false;
    error = !Number.isInteger(k) || Number(k) < 1 || !Array.isArray(matrix) || matrix.length < 2;
    for (let i = 0; i < matrix.length; i++) {
      if (!Array.isArray(matrix[i])) {
        error = true;
        break;
      }
    }
    return error;
  }
  private rotateProcess(matrix) {
    //get length matrix
    const n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n - (2 * i) - 1; j++) {
        /*assign [i][i+j] = [i + j][n - 1 - i]
        example [0][0] to [0][1]
        */
        let tmp = matrix[i + j][n - 1 - i];
        matrix[i + j][n - 1 - i] = matrix[i][i + j];
        matrix[i][i + j] = tmp;
        /*assign [i][i+j] = [n-1-i][n - 1 - i - j]
        example [0][1] to [1][1]
        */
        tmp = matrix[n - 1 - i][n - 1 - i - j];
        matrix[n - 1 - i][n - 1 - i - j] = matrix[i][i + j];
        matrix[i][i + j] = tmp;
        /*assign [i][i+j] = [n-1-i][n - 1 - i - j]
        example [1][1] to [1][0]
        */
        tmp = matrix[n - 1 - i - j][i];
        matrix[n - 1 - i - j][i] = matrix[i][i + j];
        matrix[i][i + j] = tmp;
      }
    }
    return matrix;
  };
  rotateMatrix(matrix, k) {
    const error = this.validate(matrix, k);
    if (error) {
      return 'invalid input';
    }
    for (let i = 0; i < k; i++) {
      matrix = this.rotateProcess(matrix);
    }
    return matrix;
  }
}
