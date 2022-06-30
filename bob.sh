pkgs="candy-machine token-metadata"
pkgs=(${pkgs//\"})
for pkg in "${pkgs[@]}"; do
  echo "$pkg"
done
