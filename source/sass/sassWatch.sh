#!/bin/bash
# sassディレクトリまで移動し、sassのウォッチを開始するスクリプト
cd ~/work/github/sass_bourbon/source/sass/
sass -w ./:../../css --sty expanded

# How to use.
# /bin/bash ~/work/github/sass_bourbon/source/sass/sassWatch.sh
