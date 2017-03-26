

/*
1.1  函数定义：Node.js 正常
 */


/*
aa();

function aa() {
    console.log("aa");
}
*/



/*
1.2 函数定义 Chrome V8 正常
 */

/*
 <script type="text/javascript">
 aa();

 function aa() {
 alert("aa");
 }

 </script>
 */



/*
2.1 Function() 构造函数(不推荐使用) Node.js 异常
 */
/*
aa();

var aa = new Function('console.log(\'aa\')') ;
*/


/*
2.2 Function 构造函数(不推荐使用) Chrome V8 异常
 */
/*
<script type="text/javascript">

    aa();

var aa = new Function('alert(\'aa\')') ;
</script>
    */


/*
3.1 function 字面量  Node.js 异常
 */

/*
aa();
var aa = function () {
   console.log('aa');
};

    */


/*
3.2 function 字面量 Chrome V8 异常  Uncaught TypeError: aa is not a function
 */

/*
<script type="text/javascript">

    aa();
var aa = function () {
    alert('aa');
};
</script>
*/
