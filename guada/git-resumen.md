# 📌 Resumen Git + GitHub (TP2)

## 🚩 Remotos
- **origin** → mi repo en GitHub (fork).  
- **upstream** → repo del profe.  

---

## 📥 Traer lo nuevo del profe
git fetch upstream --prune  
git merge upstream/claseX  

---

## 🌱 Ramas
git switch nombre-rama  
git switch -c mi-rama  
git switch -c mi-rama origen/rama  

---

## 💾 Guardar cambios
git add .  
git commit -m "mensaje"  
git push  

---

## 🔄 Flujo de cada clase
1. git fetch upstream --prune  
2. git switch --track -c profe/claseX upstream/claseX  
3. git switch -c guada/clase-X upstream/claseX  
4. git add . / commit / push  

