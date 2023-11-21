# Contribution Guide

## Branch Names
Branches must be prefixed with a category followed by a slash.

For example: `docs/contribution-guide`

* bugfix/ - fixes to application bugs
* ci/ - continuous integration updates, fixes, and configuration
* chore/ - project organization, refactoring, code cleanup and dependency updates
* docs/ - project documentation updates and additions
* feature/ - new application features
* test/ - updates, fixes, and additions to unit, component, integration and end-to-end tests

Note: when a branch contains overlapping categories use the primary category as the prefix.

## Commit Messages
[Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) messages must be used.

Group related changes by commit, for example:

```
feature/storage-api

(commit 1) chore: removed dead code from upload processor
(commit 2) feat: added class for s3 storage
(commit 3) feat: added storage endpoint
(commit 4) test: e2e test for storage
(commit 5) docs: updated architecture diagram
```
