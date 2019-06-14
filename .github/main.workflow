workflow "Test and build on push" {
  on = "push"
  resolves = ["gimenete/eslint-action"]
}

action "gimenete/eslint-action" {
  uses = "gimenete/eslint-action@master"
  secrets = ["GITHUB_TOKEN"]
}
