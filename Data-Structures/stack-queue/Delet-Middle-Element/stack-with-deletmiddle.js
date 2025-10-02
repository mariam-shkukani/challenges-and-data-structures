const Stack = require('./stack');

class StackWithDeleteMiddle extends Stack {
  // يحذف العنصر الأوسط بحسب القاعدة، ويرجع العنصر المحذوف أو null لو فاضي
  deleteMiddle() {
    const n = this.size();
    if (n === 0) return null;

    const middle = (n % 2 === 0) ? (n / 2 - 1) : Math.floor(n / 2);

    const temp = new Stack();
    // ننقل العناصر من الأعلى حتى نصل للموضع الأوسط
    for (let i = 0; i < middle; i++) {
      temp.push(this.pop());
    }

    // نحذف العنصر الأوسط
    const deleted = this.pop();

    // نعيد العناصر الممسوكة في temp إلى الستاك الأصلي بنفس الترتيب
    while (!temp.isEmpty()) {
      this.push(temp.pop());
    }

    return deleted;
  }
}

module.exports = StackWithDeleteMiddle;
