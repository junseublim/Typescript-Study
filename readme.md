# Typescript Study

## Types

- boolean
- number
- string
- Array
  ```ts
  //선언 방식은 두가지가 존재
  let fruits : string[] = ["apple", "bananan", "kiwi"]; //방법 1
  let fruits : Array<string> = ["apple", "bananan", "kiwi"]; //방법 2
  ```
  ```ts
  //다중 타입 선언
  let numOrString: (string | number)[] = ["123", 123, "345"];
  let numOrString: Array<string | number> = ["123", 123, "345"];

  ```
- 튜플 타입 : 정해진 타입의 고정된 길이 배열을 표현
  ```ts
  let tuple : [string, number];
  tuple = ["hello", 123];
  ```

## readonly 
배열을 읽기 전용 타입을 정의할 때 사용. 혹은 ReadonlyArray를 사용할 수도 있다.
```ts
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];
```

## enum

Enum은 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입이다. 기본적으로 0부터 시작하여 1씩 증가한다.
```ts
enum Color {
  red, // 0
  green, // 1
  blue // 2
}

//수동으로 값 변경시 그 값부터 다시 1씩 증가
enum Color {
  red, // 0
  green = 10, // 10
  blue // 11
}

console.log(Color.red);
console.log(Color["green"]);
console.log(Color[10]); //reverse Mapping -> green
```


##  User type predicates

타입 Narrowing을 위해 사용자가 정의하는 함수의 리턴 값.
```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```
'pet is Fish' 가 type predicate에 해당한다.
isFish 함수가 어떤 변수를 받아서 실행 된다면 이후부터는 그 변수의 타입을 Fish로 narrowing 한다.


## Interfaces

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

## declare

기존의 존재하는 변수에 타입을 정의해준다.

## 함수 
화살표 함수를 이용하여 타입을 지정할 수 있다.
```ts

let myFunc : (arg1: number, arg2: number) => number;
```

## 타입 단언
명시적으로 타입을 단언하는 것.
```ts
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    (val as number).toFixed(2);
  }
}
```

## Non-null 단언 선언자

!를 사용하여 변수가 null 혹은 undefined가 아님을 단언하는 것.

```ts
function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}
```

특히 컴파일 환경에서 체크하기 어려운 DOM 사용에서 유용하다.

