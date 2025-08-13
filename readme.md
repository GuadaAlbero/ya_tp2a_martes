 # Clase1 
 
## Config git

``` bash

git config --global user.name "your_name"
git config --global user.email "your_email"

git config  --global core.editor "code --wait"

#para windows
git config --global core.autocrlf true

#para mac o linux 
git config --global core.autocrlf input

 git config --global init.defaultBranch master

 #para inicializar git en un directorio
git init

git add .

git commit -m "first commit"

 #para traer los cambios 
 
 git pull origin nombre_de_la_rama

```