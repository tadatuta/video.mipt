Сайт video.mipt
===============

## Содержание

* [Уровни](#levels)
* [Блоки](#blocks)
* [Поддерживаемы браузеры](#supported-browsers)
* [Технологии](#tech)
* [Инструменты](#tools)
* [Разработка](#development)

<a name="levels"></a>
## Уровни переопределения

* `common.blocks` - основные блоки

<a name="blocks"></a>
## Блоки

* [global](common.blocks/global/global.md)
* page
* header
* image
* search
* logo
* account
* menu
* icon
* slider
* banner
* title
* text
* link
* date


<a name="supported-browsers"></a>
## Поддерживаемые браузеры

Comming Soon

<a href="tech"></a>
## Технологии
* [BEMJSON](https://ru.bem.info/technology/bemjson/v2/bemjson/)
* [BEMHTML](https://ru.bem.info/technology/bemhtml/current/reference/)
* [DEPS](https://ru.bem.info/technology/deps/about/)
* [Stylus](https://learnboost.github.io/stylus/)


<a href="tools"></a>
## Инструменты

### Сборщики

* [ENB](http://enb-make.info/)
* [borschik](https://ru.bem.info/tools/optimizers/borschik/)

### Оптимизаторы

* ...

<a name="development"></a>
## Разработка

Скачивания репозитория:

```bash
git clone https://github.com/adinvadim/video.mipt.git
cd video.mipt
```

Установка зависимостей:

```bash
npm install
```

Установка зависимых библиотек

```bash
bower install
```

Запуск сервера для разработки

```bash
enb server
open http://localhost:8080/
```

Или, если не уставновлен enb глобально

```bash
./node_modules/enb/bin/enb server
open http://localhost:8080/
```
