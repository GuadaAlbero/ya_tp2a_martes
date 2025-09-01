# í³Œ Resumen Git + GitHub (TP2)
## íº© Remotos
- origin â†’ mi repo en GitHub (fork).
- upstream â†’ repo del profe.

## í³¥ Traer lo nuevo del profe
git fetch upstream --prune
git merge upstream/claseX

## í³‚ Ramas
git switch nombre-rama
git switch -c mi-rama
git switch -c mi-rama origen/rama

## í²¾ Guardar cambios
git add .
git commit -m "mensaje"
git push

## í´„ Flujo de cada clase
1. git fetch upstream --prune
2. git switch --track -c profe/claseX upstream/claseX
3. git switch -c guada/clase-X upstream/claseX
4. git add . / commit / push
