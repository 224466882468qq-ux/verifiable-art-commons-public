const forbiddenPatterns = [
  {
    name: "private-key",
    expression: /-----BEGIN (?:OPENSSH |EC |RSA |DSA )?PRIVATE KEY-----/
  },
  {
    name: "database-url",
    expression: /postgres(?:ql)?:\/\//
  },
  {
    name: "windows-user-path",
    expression: /[A-Za-z]:\\Users\\/
  },
  {
    name: "posix-user-path",
    expression: /(?:^|[\s"'`])\/(?:home|Users)\/[A-Za-z0-9._-]+\//
  },
  {
    name: "production-path",
    expression: /\/var\/lib\/|\/etc\/systemd\/|\/opt\/onion/
  },
  {
    name: "tor-address",
    expression: /[a-z2-7]{56}\.onion/i
  },
  {
    name: "local-service-url",
    expression: /(?:127\.0\.0\.1|localhost):\d{2,5}/
  },
  {
    name: "github-classic-token",
    expression: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/
  },
  {
    name: "github-fine-grained-token",
    expression: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/
  },
  {
    name: "aws-access-key",
    expression: /\bAKIA[0-9A-Z]{16}\b/
  }
];

export function findForbiddenPatterns(text) {
  return forbiddenPatterns
    .filter(({ expression }) => expression.test(text))
    .map(({ name }) => name);
}
