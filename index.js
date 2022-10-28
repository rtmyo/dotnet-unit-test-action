const core = require('@actions/core');
const github = require('@actions/github');

try {
  const exit_code_input = core.getInput('exit-code');
  const exit_code = Number(exit_code_input);

  if (exit_code > 0) {
    core.warning('Not all Unit Test Passed');
  }

} catch (error) {
  core.error(error.message);
}