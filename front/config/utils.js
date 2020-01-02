const execSync = require('child_process').execSync
const pack = require('../package.json')

exports.getProject = function () {
  return pack.repository.name.toString().trim()
}

exports.getProjectTeam = function () {
  return pack.repository.team.toString().trim()
}

exports.getProjectName = function () {
  return pack.name.toString().trim()
}

exports.getCurrentTag = function () {
  return pack.version.toString().trim()
}

exports.getGitHash = function () {
  return execSync('git rev-parse HEAD')
    .toString()
    .trim()
}

exports.getProjectDesc = function () {
  const desc = `更新日志为<a href="${pack.repository.changelogurl}">${pack.repository.changelogurl}</a>`
  return desc.toString().trim()
}
