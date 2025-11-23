const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [
    `prettier --write ${stagedFiles.join(' ')}`,
    `eslint --fix ${stagedFiles.join(' ')}`,
    `jest --findRelatedTests ${stagedFiles.join(' ')}`
  ]
}

export default lintStagedConfig
