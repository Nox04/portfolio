workflow "Test and build on push" {
  on = "push"
  resolves = ["JasonEtco/npm-audit-fix-action"]
}

action "JasonEtco/npm-audit-fix-action" {
  uses = "JasonEtco/npm-audit-fix-action@master"
  secrets = ["GITHUB_TOKEN"]
}
