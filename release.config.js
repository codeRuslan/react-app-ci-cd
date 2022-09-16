module.exports = {
    branches: 'master',
    repositoryUrl: 'https://github.com/codeRuslan/react-app-ci-cd',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@sematic-release/release-notes-generator',
        '@sematic-release/github'
    ]
}