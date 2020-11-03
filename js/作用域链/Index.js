function a() {
    function b() {
        function c() {
            
        }
        c()
    }
    b()
}
a()

// a定义 0:GO
// a执行 1:AO 0:GO
// b定义 1:AO 0:GO
// b执行 2:bAO 1:aAO 0:GO
// c定义 2:bAO 1:aAO 0:GO
// c执行 c:cAO 2:bAO 1:aAO 0:GO