workflow "Test and build on push" {
  on = "push"
  resolves = ["Build"]
}

action "JasonEtco/npm-audit-fix-action" {
  uses = "JasonEtco/npm-audit-fix-action@master"
}
