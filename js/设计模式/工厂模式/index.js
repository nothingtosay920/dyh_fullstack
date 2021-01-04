// 开放封闭原则
// 开放：拓展进行开放
// 封闭：修改进行封闭


class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS () {
    // throw new Error('抽象工厂方法不允许直接调用 你需要将我重写')
    return new AndroidOS()
  }

  // 提供硬件
  createHardWare () {
    // throw new Error('抽象工厂方法不允许直接调用 你需要将我重写')
    return new QualcommHardWare()
  }
}

class OS {
  controlHardWare() {
    throw new Error('抽象工厂方法不允许直接调用 你需要将我重写')
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式操作系统');
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用苹果的方式操作系统');
  }
}

// --------------------------------
class HardWare {
  oprateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用 你需要将我重写')
  }
}

class QualcommHardWare extends HardWare {
  oprateByOrder() {
    console.log('我会以高通的方式');
  }
}

class HuaWeiHardWare extends HardWare {
  oprateByOrder() {
    console.log('我会以华为的方式');
  }
}

const myPhone = new FakeStar()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controlHardWare()
myHardWare.oprateByOrder()

class newStarFactory extends MobilePhoneFactory {

}


