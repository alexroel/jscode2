---
title: Example Guide
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.



## Apartados
Los apartados (también conocidos como “apartados” o ”contenido destacado”) son útiles para mostrar información secundaria junto al contenido principal de una página.

Starlight proporciona una sintaxis personalizada de Markdown para renderizar apartados. Los bloques de apartados se indican utilizando un par de triples dos puntos ::: para envolver tu contenido, y pueden ser de tipo note, tip, caution o danger.

Puedes anidar cualquier otro tipo de contenido Markdown dentro de un apartado, pero los apartados son más adecuados para fragmentos de contenido cortos y concisos.

## Nota de apartados

:::note
Starlight es un conjunto de herramientas para sitios de documentación construido con [Astro](https://astro.build/). Puedes comenzar con este comando:

```sh
npm run create astro@latest --template starlight
```

:::

## Títulos personalizados para los apartados
Puedes especificar un título personalizado para el apartado utilizando corchetes cuadrados después del tipo del apartado, por ejemplo, :::tip[¿Sabías esto?].


:::tip[¿Sabías esto?]
Astro te ayuda a construir sitios web más rápidos con la[“Arquitectura de Islas”](https://docs.astro.build/es/concepts/islands/).
:::

## Más tipos de apartados
Los apartados de caution y danger son útiles para llamar la atención del usuario sobre detalles que podrían generar problemas. Si te encuentras utilizando estos tipos de apartados con frecuencia, también puede ser una señal de que lo que estás documentando podría beneficiarse de una reestructuración o rediseño.

:::caution
Si no estás seguro de si deseas un sitio de documentación increíble, piénsalo dos veces antes de usar [Starlight](/es/).
:::

:::danger
Tus usuarios pueden ser más productivos y encontrar más fácil de usar tu producto gracias a las útiles características de Starlight.

- Navegación clara
- Tema de color configurable por el usuario
- [Soporte de i18n](/es/guides/i18n/)

:::

## Citas en bloque
Esto es una cita en bloque, que se utiliza comúnmente para citar a otra persona o documento.

Las citas en bloque se indican con un > al inicio de cada línea.

> Esto es una cita en bloque, que se utiliza comúnmente para citar a otra persona o documento.
>
> Las citas en bloque se indican con un `>` al inicio de cada línea.

## Bloques de código
Un bloque de código se indica con un bloque de tres comillas invertidas ``` al inicio y al final. Puedes indicar el lenguaje de programación que se está utilizando después de las comillas invertidas de apertura.

```js
// Código JavaScript con resaltado de sintaxis.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```


- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
