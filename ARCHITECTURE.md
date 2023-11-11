# Architecture Guide

## Deployments

⚠️ Requires PRs for main (GH rule)

⚠️ Requires PRs to be up to date before merging (GH rule)

1. Create PR against main
1. PR triggers:
    1. Create docker image
    1. Run docker image
    1. Execute automated end-to-end testing (localhost)
    1. Store docker image (using commit hash as an image tag)
    1. Merge to main (will require other PRs to update)
1. Push (merge) to main triggers:
    1. Deploy latest stored docker image to staging
    1. Execute automated deployment testing (staging)
        1. Revert if deployment fails (will require other PRs to update)
        1. 🛑 END
    1. Tag (using SemVer)
    1. Update docker image's tags (add SemVer)
1. Mark tag for release
1. Release triggers:
    1. Deploy tagged docker image to production
    1. ✅ END
