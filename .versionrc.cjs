module.exports = {
  releaseCommitMessageFormat: "📦️ release(tag): {{currentTag}}",
  hooks: {
    'after:changelog': 'pnpm changelog',
  }
};