module.exports = {
  releaseCommitMessageFormat: "📦️ chore(release): {{currentTag}}",
  hooks: {
    'after:changelog': 'pnpm changelog',
  }
};