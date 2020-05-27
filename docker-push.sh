#!/bin/bash
docker push "eikiri/test-arm:${TRAVIS_BRANCH}_${TRAVIS_COMMIT}"
docker push "eikiri/test-arm:latest"