/* 59
타입스크립트에서 클래스 사용하기
public, private 키워드를 필드에 사용할 수 있다.
하지만 컴파일하고나서, 런타임 때는 적용되지 않는다. 
*/
class Department {
  protected name: string; // protected 키워드는 private과 비슷하지만 상속받은 클래스에서도 접근이 가능하다.
  private employees: string[]; // private 키워드 사용 가능하다
  public phone: number; // public 키워드도 사용 가능하다. 생략하면 기본으로 public이 된다.

  constructor(n: string) {
    this.name = n;
    this.employees = [];
    this.phone = 123;
  }

  describe() {
    console.log('department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();

/* 63
클래스 내의 필드 선언을 줄여서 쓸 수 있다
생성자 함수 파라미터에 private, public을 붙이면 파라미터 이름대로 필드가 생성된다
*/
class Department2 {
  constructor(private employees: string[], public phone: number) {}
}

const d = new Department2(['test'], 1234);
console.log(d.phone);

/* 64
readonly 키워드를 사용하면 한번 초기화한 후, 값을 변경할 수 없게 된다.
private 필드에는 해봤자 소용없다(접근이 안되니)
위와 마찬가지로 런타임떄는 효과가 없다
 */
class Department3 {
  constructor(public readonly name: string) {}
}

/* 65
클래스를 상속받아서 만들때는 새로 만드는 클래스 이름 옆에 'extend 부모 클래스 이름'을 쓰면 된다.
그리고 constructor 함수 안에서 super()로 부모 클래스의 생성자 함수를 호출해야 한다.
*/
class ITDepartment extends Department {
  constructor(name: string, public admins: string[] = []) {
    super(name);
  }
}
const it_dept = new ITDepartment('it');

/* 66
클래스를 상속받아서 부모 클래스의 메소드를 오버라이딩할 수 있다.
간단하게 메소드를 재정의하면 된다.
그리고 부모 클래스의 private 필드는 접근할 수 없지만 protected 필드는 상속한 클래스에서 접근 가능하다.
*/
class Marketing extends Department {
  constructor(name: string) {
    super(name);
  }

  describe() {
    console.log('marketing: ' + this.name);
  }
}
const m = new Marketing('mkt');
m.describe(); // marketing: mkt
