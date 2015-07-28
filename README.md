Запуск сайта
----------------
### Для запуска сайта понадобиться
- git
- bower
- gulp (для создания мини сервера, для отображении картинок и шрифтов)
- npm (чтобы подтянуть все зависимости для gulp)

#### bower_components
- reset.css

#### node_modules
- gulp
- gulp-stylus
- gulp-connect
- nib
- jeet
- rupture

### Запуск сайта
*	Скачиваем репозиторий, прописывая в косноле
```{r, engine='bash'}
git clone https://github.com/adinvadim/video.mipt
```
*	Подтягиваем bower-components
```{r, engine='bash'}
bower update
```
*	Подтягиваем npm_modules
```{r, engine='bash'}
sudo npm update
```
*	Запускаем систему сборки
```{r, engine='bash'}
gulp
```
*	Открываем браузер
> [This link](http://localhost:8888/)
