#!/bin/bash
docker push "eikiri/tfgbackend:${TRAVIS_BRANCH}_${TRAVIS_COMMIT}"
docker push "eikiri/tfgbackend:latest"