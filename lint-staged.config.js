const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [
    `prettier --write ${stagedFiles.join(' ')}`,
    `eslint --fix ${stagedFiles.join(' ')}`,
    `npm run test -- --findRelatedTests ${stagedFiles.join(' ')}`
  ]
}

export default lintStagedConfig
