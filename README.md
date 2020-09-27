# codewars-cli

Codewars CLI parses a user's codewars solutions and outputs them in a github README.md format

```bash
Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -u, --username  Username or ID of the codewars user        [string] [required]
  -t, --token     'remember_user_token' value from a codewars user's cookie

```

## Quick Overview
```bash
npx codewars-cli --username 'codewars username or ID' --token='remember_user_token from codewars cookie'
```
example:
```bash
npx codewars-cli --username 'jsonpoindxter' --token='BAhbCFsGSSIdN...'
```
