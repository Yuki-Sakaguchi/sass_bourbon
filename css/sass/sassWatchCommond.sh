#!/bin/bash
# sassディレクトリまで移動し、sassのウォッチを開始するスクリプト
cd ~/work/github/html_template2/css/sass/
sass -w ./:../ --sty expanded

# How to use.
# /bin/bash ~/work/github/html_template2/css/sass/sassWatch.sh
