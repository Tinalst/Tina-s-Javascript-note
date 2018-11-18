## 泛型理解

### 阅读先知
+ lambda表达式
  + 是什么： 形如 <k>(arg:k) => k 的箭头函数
  + 如何：

  ```
    // 指定一个变量是一个参数为泛型、返回值为泛型的泛型函数
    const myFunc(a: number) => string = function(a: number):string {
      return `hello${a}`;
    }
  ```

### 泛型类型
1. 函数式泛型
    
    ```
      // 1.定义函数式泛型
      // 注意返回值使用:T的形式
      funtion Hello<T>(args: T):T {
        return T;
      } 
      
      // 2. 使用函数式泛型的两种方式
      const myHello1<T>(args: T) => T = Hello;
      
      const myHello{<T>(args: T):T} = Hello;
    ```
2. 接口泛型
    
    ```
        // 1. 定义泛型接口
        interface Hello<T> {
            (arg: T):T;
        }
        
        // 2. 定义泛型函数
        function mineHello<T>(arg: T):T {
            return arg;
        }
        
        // 3. 使用
        const MH:Hello<String> = mineHello;
        alert(MH('string'));

    ```
