
Este es un ejercicio programado por Ale Grilli. Carga y muestra ciertos datos de [Rick and Morty API][ram-api].

Se puede ver aquí: https://agj.github.io/vue3-test-app/


## Tecnologías usadas:

- [Vue 3][vue], empleando su nueva _Composition API_.
- [Typescript][ts]
- Pruebas con [Vue Test Utils v2][vue-test] y [Jest][jest].

[ram-api]: https://rickandmortyapi.com/
[vue]: https://v3.vuejs.org/
[ts]: https://www.typescriptlang.org/
[vue-test]: https://next.vue-test-utils.vuejs.org/
[jest]: https://jestjs.io/
[node]: https://nodejs.org/

## Para compilar

Requiere [Node][node] (testeado en versión 15.12.0) y NPM. En la línea de comandos, primero instalar dependencias con:

```
npm install
```

Luego se puede compilar con:

```
npm run build
```

El resultado de la compilación estará en la carpeta `dist`.

Para ver localmente, usar:

```
npm run serve
```

…y luego abrir el URL que aparece.

## Para correr las pruebas

```
npm test
```
