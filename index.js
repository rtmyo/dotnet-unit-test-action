import { getInput, warning, error as _error } from '@actions/core';
import github from '@actions/github';

try {
  const exit_code_input = getInput('exit-code');
  const exit_code = Number(exit_code_input);

  if (exit_code > 0) {
    throw 'Not all Unit Test Passed';
  }

} catch (error) {
  warning(error.message);
}