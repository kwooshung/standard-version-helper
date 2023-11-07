module.exports = {
  releaseCommitMessageFormat: "📦️ release(tag): {{currentTag}}",
  hooks: {
    'after:changelog': 'node plugin-customizable.cjs',
  }
};