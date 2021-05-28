# Typescript Study

- User type predicates

타입 Narrowing을 위해 사용자가 정의하는 함수의 리턴 값.
```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```
'pet is Fish' 가 type predicate에 해당한다.
isFish 함수가 어떤 변수를 받아서 실행 된다면 이후부터는 그 변수의 타입을 Fish로 narrowing 한다.



- Interfaces

객체의 타입을 정의할 수 있게 한다.
```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

## Type alaises와의 차이

둘은 매우 유사하고 많은 경우 둘 중 아무거나 사용해도 무방하다. 차이점은 interface는 extendable 하다는 것.
```ts
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```
```ts        
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.

```

- declare

기존의 존재하는 변수에 타입을 정의해준다.