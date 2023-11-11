# Architecture Guide

## Deployments

1. Create PR against main
1. PR triggers:
    1. Docker image creation (this image will be qualified and deployed to production)
    1. Docker image run
    1. Automated end-to-end testing (localhost)
    1. Deploy image to staging 🛑 **This is problematic if multiple PRs are open at the same time**
    1. Automated deployment testing (staging)
    1. Store docker image (as latest)
    1. Tag
    1. Merge to main
1. Mark tag for release
1. Release triggers:
    1. Deploy latest stored docker image to production
