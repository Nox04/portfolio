workflow "Test and build on push" {
  on = "push"
  resolves = ["lint"]
}

action "lint" {
  uses = "gimenete/eslint-action@master"
}
