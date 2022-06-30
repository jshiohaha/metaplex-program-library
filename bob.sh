pkgs="candy-machine"
pkgs=(${pkgs//\"})
for pkg in "${pkgs[@]}"; do
  echo ">> changing dir $pkg/js"
  cd "$pkg/js"
  echo ">> yarn install && solita"
  # yarn install && yarn add -D @metaplex-foundation/solita && yarn api:gen
  # git restore package.json
  echo "=============================="
  git status
  echo "=============================="
  if [[ $(git diff --stat) != '' ]]; then
    # echo "::set-output name=failed::true"
    echo "dirty"
    break
  fi
  cd ../..
done
