module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, '')
                    .replace(/[\+]/g, ',+')
                    .replace(/[^\t][\-]/g, ',-');
  let parts = equation.split(',');
  let re = new RegExp('[\-0-9]+');
  let a = re.exec(parts[0])[0];
  let b = re.exec(parts[1])[0];
  let c = parts[2]
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let solutions = [];
  solutions[0] = Math.round((- b + Math.sqrt(discriminant)) / (2 * a));
  solutions[1] = Math.round((- b - Math.sqrt(discriminant)) / (2 * a));
  return solutions.sort((a, b) => a - b);
}
