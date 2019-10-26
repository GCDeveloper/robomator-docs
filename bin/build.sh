#!/bin/bash

echo Building...

cd website

yarn install

yarn run build

cd ..

mv website/build/Topicify public/

echo "website/build/Topicify/ moved to public/ ready for deployment."