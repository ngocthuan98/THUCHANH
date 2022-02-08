// var fullName = 'Ten toi la \"Thuan\"'
// + 'hoc IT';
// console.log(fullName);
// alert('IT');

/**
 * Template string ES6:
 *  var firstName = 'Nguyen';
    var lastName = 'Thuan';
console.log(`Toi ten la: ${firstName} ${lastName}`);
 */

// var fullName = 'Dau \\'; 2 dau \ la bang 1 dau \
// console.log(fullName);

//hoc ve string keyword: javascript string methods

/**
 * 1.Length(kiem tra do dai ky tu )
 * console.log(myString.Length);
 * 
 * 2.Find index(tim vi tri ky tu nam trong 1 chuoi)
 * var myString = 'ngoc thuan 23 23 23';
 * console.log(myString.indexOf(23));--vi tri ky tu so 10
 * _indexOf chỉ tìm ký tự đầu tiên trong các ký tự giống nhau muốn tìm vị trí
 * ký tự giống khác thì dùng consolog.log(myString.indexOf(23,11)) -- bỏ qua vị trí ký tự giống nhau lúc đầu
 * _ tìm ký tự giống cuối cùng trong chuỗi thì dùng consolog.log(myString.lastIndexOf(23)
 * _cach tìm kiếm khác là consolog.log(myString.search(23)--vi tri ky tu thứ 10 nhưng không hỗ
 * trợ tìm vị trí ký tự giống và tìm kiếm biểu thức chính quý
 * 
 * 3.Cut string(cắt chuỗi )
 * var myString = 'ngoc thuan 23';
 * console.log(myString.slice (4,6));--ra ket qua chứ 'n'
 * cắt từ chuỗi theo chiều phải sang trái ta dùng 
 *  console.log(myString.slice (-3,-1));--ra kết quả '2'
 * 
 * 4.Replace(ghi đè)
 * var myString = 'ngoc thuan 23';
 * console.log(myString.replace ('23', 'IT'));-- in ra 'ngoc thuan IT'
 * var myString = 'ngoc thuan 23 23 23';
 * console.log(myString.replace (/23/g, 'IT'));   -- chuỗi lặp thì dùng 
 * biểU thức chính quy ta ra kết quả ' 'ngoc thuan IT IT IT'
 * 
 * 5.Convert to upper case(chuyển sang chứ hoa)
 *  console.log(myString.toUpperCase ());
 * 6.Convert to lower case(chuyển sang chữ thường)
 * console.log(myString.toLowerCase ());
 * 
 * 7.Trim(Loại bỏ khoản trắng 2 đầu 1 chuỗi)
 * var myString = ' ngoc thuan 23 23 23   ';
 *console.log(myString.trim());   -- thanh 'ngoc thuan 23 23 23'
 *
 * 8.Split(cắt 1 cái chuỗi thành array cần 1 điểm chung trong chuỗi)
 * var Languages = 'Javascript, PHP, Ruby';
 * console.log(Languages.split(', '));   --điểm chung ở đây là dấu , và dấu cách ', '
 * 
 * 9.Get a character by index(lấy 1 kĩ tự bởi index cho trước)
 *const myString = 'Ngoc Thuan';
 *console.log(myString.charAt(0)); -- trả ra ký tự 'N'
 *console.log(typeof myString.charAt(10)) --  trả ra kiểu dữ liệu 'string'
 * cách 2 là console.log(myString[1]) --  trả ra ký tự 'g'
 * console.log(typeof myString[10]); --  trả ra kiểu dữ liệU 'undefined'
 * 
 * 10.Cach kiem tra kieu du lieu 
 * 
 * var  result = 20;
 * console.log(typeOf result); -- kieu number
 * var  result = 20/'abc';
 * console.log(typeOf result); -- kieu NaN bi loi
 * cach check xem kieu du lieu con NaN hay k 
 * console.log(isNaN(result)); -- ket qua true ; con var result = 20; ket qua check se ra false.
 * 
 * KEYWORD: javascript number methods
 * 
 * 11.Chuyển kiểu dữ liệu number thành string(toString)
 * var result = 9;
 *console.log(result.toString()); -- kết quả là '9' nhưng trong dell tool nó hiện ra số 9 màu trắng
 *còn dữ liệu number sẽ có màu xanh
 *12.Làm tròn thành số thập phân(toFixed)
 * var number = 2.453;
 *console.log(number.toFixed(2)); -- ket qua la 2.45
 * 
 * 13.Tạo mảng(có thể đưa bất cứ dữ liệu vào)
 * var Languages = ['Javascrip','Ruby','Python',12,null,undefined,
 * function(){
 * },{}];
 *console.log(Languages);

 * *Cách 2:
 *  var Languages = new Array('Javascrip','Ruby','Python',12,null,undefined,
 *  function(){
 *  },{} );  -------Object ký hiệu dấu {}.
 *   console.log(Languages);
 * 
 * *Cách kiểm có phải kiểu dữ liệu array hay không bởi vì console.log(typeof Languages); ra ket qua la object
 * console.log(Array.isArray(Languages));--ra ket qua true
 * console.log(Array.isArray({})); truyền 1 biến object ra false;
 * 
 * 14.Truy xuất mảng
 * +Kiểm tra độ dài mảng : 
 * var Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages.length);
 * +Lấy phẩn tử theo index
 * var Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages[2]);--ket qua ra python.
 * 
 * 
 * LÀM VIỆC VS ARRAY(JAVASCRIPT ARRAY METHTHOD)
 * 
 * 1.toString
 * var Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages.toString());-- chuyển array sang 1 chuỗi kết quả Javascrip,Ruby,Python
 * 2.Join
 *  var Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages.join('-');-- chuyển array có dấu ',' nối các phần tử 1 mảng
 *  thành 1 chuỗi thành dấu '-' kết quả Javascrip-Ruby-Python
 * 
 * 3.Pop
 * Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages.pop()); //xoá phần tử cuối mảng và in ra phần tử đã xoá -- ket qua in ra 
 * 
 * 4.Push
 * var Languages = new Array('Javascrip','Ruby','Python' );
 * console.log(Languages.push('C++', 'java')); //thêm 1 hoặc nhiều phần tử vào cuối mảng và tính độ tài của mảng in ra mảng có chưa phần tử đã thêm
 * console.log(Languages);// in ra mảng có chưa phần tử đã thêm kết quả là 'Javascrip', 'Ruby', 'Python', 'C++', 'java'
 * 
 * 5.Shift(ngược pop xoá phần tử đầu mảng và trả về phần tử đã xoá)
 * chú ý khi mảng rổng xoá cho ra kết quả undefined
 * 
 * 6.Unshift(thêm 1 hoặc nhiều phần tử vào đầu mảng trái vs PUSH )
 * 
 * 7.Splicing(khi sử dùng là 'splice')
 * var Languages = ['Javascrip', 'Ruby','Python', 'java'];
 *   Languages.splice(1, 2); // xoá phần tử trong mảng ở vị trí thứ 1 đến vị trí thứ 2 tức xoá Ruby và Python
 *   console.log(Languages); --ket qua con 'Javascript','java'
 * muốn chèn 1 phần từ vào trong mảng thì 
 * Languages.splice(1, 2, 'C++'); tức nó sẽ chèn phần tử 'C++' vào trước vị trí số 1 sau đó tiếp tục xoá phần tử vị trí 1 đến 2
 * --kết quả 'Javascrip', 'C++', 'java' có thể thêm nhiều phần tử khác nữa bằng cách Languages.splice(1, 2, 'C++', 'PHP') 
 * thêm phần tử sau đó chú ý  1 là vị trí đầu xoá 2 là vị trí cuối cùng xoá còn lại là các phần tử thêm vào đầu vị trí cần xoá
 
 * 8.Concat(truyền 1 mảng vào mảng góc)
 * var Languages = ['Javascrip', 'Ruby','Python'];
 *   let languages2 = ['java','PHP'];
 *   console.log(Languages.concat(languages2)); --kết quả 'Javascrip', 'Ruby', 'Python', 'java', 'PHP' 
 * (trong trường hợp ni languages là mảng góc nên gọi concat tới mảng 2 languages2 để mảng 2 truyền dữ liệu qua mảng 1)
 * 
 * 9.slicing(dùng là slice)
 * var Languages = ['Javascrip', 'Ruby','Python'];
 * console.log(Languages.slice(1,2));// cắt phần từ ở đầu vị trí phần tử 1 đến vị trí đầu phần tử 2 xuất ra kết quả 'Ruby'
 * muốn cắt hết mảng thì bỏ tham số thứ 2 mình nhập console.log(Languages.slice(1));
 * Có thể truyền số âm về lấy phần tử ở cuối tức đầu chữ 'Python' là chữ -1 và đầu chữ 'Ruby' là -2 console.log(Languages.slice(-1,-2))
 * 
 * 
 * HÀM FUNCTION TRONG JAVASCRIPT
 * 
 * 1.Hàm
 * Tạo hàm: function showDialog() {
 *   alert('Xin chao');
 *};
 *showDialog();// ket qua ra Xin Chao
 * +hàm có thể chứa chữ cái a-z, A-Z, chứa số 0-9, gạnh dưới _ , $ *chú ý khi sử dụng số đặt tên hàm hoặc tên biến chúng ta k dc đặt số ở
 * ký tự đầu tiên sẽ bị lỗi
 * 
 * 2.Tham số hàm
 * function writeLog(message) { // message nghĩa là tham số 
 *     console.log(message);      // gọi tham số 
 * }
 * writeLog('xin chao');  //giá trị truyền vào tham số đó ra kết qua 'xin chao' có thể cho bất cứ kiểu dữ liệu vào trong tham số
 * ví dụ writeLog(12) // số 12  writeLog(true)// ra true kiểu dữ liệu boolean dùng typeof tren message để kiểm tra kiểu dữ liệu
 * +tham số có tính private chỉ sử dụng trong function nếu đêm ra ngoài k được định nghĩa
 * ví dụ ta console.log(message) ở ngoài function thì kết quả báo lỗi message chưa được định nghĩa nó chỉ định nghĩa trong function
 * +Truyền nhiều tham số
 * function writeLog(message,message2) { // ta thêm tham số bằng cách phẩy
    console.log(message);// tham số 1
    console.log(message2); //tham số 2
}
writeLog(true,12) // truyền dữ liễu cho tham số thứ 2 bằng cách ,  --kết quả là true  12
 * nếu ta k truyền dữ liệu cho tham số kết quả sẽ ra undefined
 * 
 * 3.Arguments( chỉ được định nghĩa trong function)
 * function writeLog() {
    console.log(arguments); // có thể sử dụng arguments thay cho các tham số truyền vào hàm.
    // arguments giống một Array nhưng không thực sự là một Array
}
writeLog(true,12) ra kết quả arguments(2) [true , 12] có thể gọi bao nhiêu dữ liệu từ ý ra kết quả nó tạo thành 1 array
 * vòng lặp for of
function writeLog() {
   for(var param of arguments){// tạo 1 vòng lặp in biến param 
       console.log(param)// in ra biến param
   }
}
writeLog(true,12) // truyền dữ liệu vào arguments vòn lặp 1 nó lấy biến true gán cho param rồi in ra sau đó
quay trở lại vòng lặp lấy biến number là 12 gắn cho arguments để truyền vào param in ra biến thứ 2 kết quả ra 


12
 *
 *function writeLog() { //muốn in ra các giá trị cách nhau dáu - trên 1 hàng ngang
    var myString = ''; //gọi 1 biến myString là chuỗi rỗng
   for(var param of arguments){ //dùng vòng lặp for
       myString += `${param} -`; // chuỗi rỗng cộng + dữ liệu truyền vào param + -
   }
   console.log(myString)// thược hiện vòng  lặp xong kết quả in ra true-12-thuan-
}
writeLog(true,12,'thuan') //cho 3 dữ liệu 

 *13.Function can bik
 + function trùng tên nhau thì function sau sẽ đề lên function trước để thực hiện bài toán
 + có thể khai báo biến trong function nhưng biến nó chỉ được sử dụng  trong function
 + có thể định nghĩa hàm trong hàm 
function cong {
    function sum(a,b) {
        return a+b
    }
    sum(1,2)
}
cong(); // ra ket qua 3

*14.CÁC LOẠI FUNCTION
+Declaration function: có thể được gọi ra kết quả trước khi được định nghĩa 
showMessage(); // ket qua ra 'Declaration function'
function showMessage() {
    console.log('Declaration function');
}

+Expression function: không thể được gọi ra kết quả trước khi được định nghĩa
cách 1:
var showMessage2 = function() {
}
cách 2:
setTimeout(function() {
});
cách 3:
var myObject = {
    myFunction : function() {
    }
}

+Arrow function:

*OBJECT TRONG JAVASCRIPT
*1.Cách tạo object
 var myInfo = {
     Name: 'ngọc thuận',  // key là name , age , sex 
     Age: 23,              // value là giá trị biến key đó 'ngọc thuận',23,'Nam'
     Sex: 'Nam'             // có thế ghi tên key vi phạm cách đặt biến bằng cách thêm dấu '' ví dụ 'my-sex': 'Nam
 };
 myInfo.address = 'Nguyen Hoang' // thêm key và value cho object còn muốn đặt tên key vi pham cách biến khi muốn thêm key vào
 //oject bằng cách   myInfo['my-address'] = 'Nguyen Hoang'
 console.log(myInfo) // lấy tất cả key và value trong object
 console.log(myInfo.Name) // lấy value của key Nam trong object
console.log(myInfo['address']); // cách 2 muốn lấy value của 1 keu mình muốn 

+ var myKey = 'address'; // tạo 1 biến là 1 key trong object
 console.log(myInfo[myKey]); // dùng cách này để láy giá trị myKey kết quả ra 'Nguyen Hoang'

+ chú ý :
var emailKey = 'email'; // tạo 1 biến có giá trị là 1 key trong object
 var myInfo = {
     Name: 'ngọc thuận',
     Age: 23,
     Sex: 'Nam',
     [emailKey]: 'ngocthuandn@gmail.com' // khai báo biến đó trong object
 };
 console.log(myInfo); // ra được tất cả thông tin trong object đặc biến 'emailKey' sẽ biến thành key 'email' đã khai báo ban đầu

+Xoá key trong object
 delete myInfo.Age //  sẽ mất đi tuổi trong object

 + Dùng function trong object
 var myInfo = {
     Name: 'ngọc thuận',
     Age: 23,
     Sex: 'Nam',
     getName: function(){
         return this.Name; // this trong ni được hiểu như myInfo
     }
 };
 console.log(myInfo.getName()); // câu lệnh ni được chạy như sau chạy functioon getName để gọi tới function trong object
 sau đó function trong object sẽ thực hiện dòng lệnh retrun lại giá trị Name trong object để ra kết quả 'ngọc thuận'

*OBJECT CONSTRUCTOR(hàm khởi tạo) chú ý có thể sử dụng Expression function và Declaration function để khởi tạo bản thiết kế

+  function User(firstName, lastName , avatar) {  // bản thiết kế để khởi tạo 1 đối tượng
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
         return `${this.firstName} ${this.lastName}`  // nối 2 giá trị firstName và lastName lại vs nhau
         // this trong đoạn này được hiểu đại diện cho  đối tượng  được gọi đến getName là author 
    }
} 
var author = new User('ngoc', 'thuan', 'avatar'); // tạo đối tượng author dựa trên bản thiết kế đã tạo
var user = new User('viet', 'ai', 'avatar');
author.title = 'người tạo code' // thêm thuộc tính title cho author nhưng là riêng lẻ không có trong bản thiết kế
console.log(author.constructor);// in ra kết quả bản thiế kế mà mình đã khởi tạo
console.log(user); // in ra kết quả thông tin đối tượng mình tạo trên bản thiết kế

*OBJECT PROTOTYPE - BASIC( nguyên mẫu tạo nên  đối tượng )
+định nghĩa : thêm phương thức và thuộc tính bên ngoài hàm tạo qua hàm prototype
User.prototype.className = 'F8'; // thêm thuộc tính className vào hàm khởi tạo 
User.prototype.getClassName = function() { //khởi tạo function cho thuộc tính mới className
    return this.className; // trả về giá trị của className this trong ni đại điện cho đối tượn user được gọi đến
}
console.log(user.getClassName()) gọi giá trị className đó ra
*CHÚ Ý: nhưng giá trị gọi riêng hàm khởi tạo sẽ không nhận dc các thuộc tính trong hàm khởi tạo khi được gọi đến

*DATE:
var date = new Date();// khai bao bien thoi gian hom nay gom ngay thang nam giờ phút giây hiện tại
console.log(date); // thoi gian hien tai
console.log(date.getFullYear());// lay ra nam
console.log(date.getDate());// tra ve ngay
var month = date.getMonth() + 1; // do month trong day khi lay ra dem từ 0 đến 11 nên muốn tháng đúng phải cộng thêm 1 
var year = date.getFullYear();
var day = date.getDate();
console.log(`${day}/${month}/${year}`)// ra ngày tháng năm hiện tại

*CHU Y:
Phương thức	Mô tả
getFullYear()	Trả về năm có gồm 4 chữ số
getMonth()	Trả về số đại diện cho tháng từ 0-11
getDate()	Trả về số đại diện cho ngày từ 1-31
getHours()	Trả về số giờ từ 0-23
getMinutes()	Trả về số phút từ 0-59
getSeconds()	Trả về số giây từ 0-59
getMilliseconds()	Trả về số mili giây từ 0-999
getTime()	Trả về số mili giây tính từ 00:00:00 01/01/1970
getDay()	Trả về số đại diện ngày trong tuần từ 0-6
Date.now()	Trả về số mili giây tính từ 00:00:00 01/01/1970

*Cách lấy timestamp
Trong Javascript ta có thể lấy ra số ra số milliseconds tính từ 00:00:00 ngày 01/01/1970. 
Vì 1 second bằng 1000 milliseconds nên ta có thể tính ra timestamp bằng công thức:

timestamp = milliseconds / 1000
Ví dụ:

// Lấy timestamp hiện tại
let timestamp = Math.floor(Date.now() / 1000)

// hoặc
const date = new Date()
timestamp = Math.floor(date.getTime() / 1000)

// hoặc
timestamp = Math.floor(+ new Date() / 1000)

// Lấy timestamp mốc thời gian cụ thể
const date = new Date('00:00:00 01/01/2021')
timestamp = Math.floor(date.getTime() / 1000)

// hoặc
timestamp = Math.floor(+ new Date('00:00:00 01/01/2021') / 1000)
Đặt toán tử + phía trước sẽ convert giá trị bên phải nó sang Number.

//Math.floor(number): đưa về số lớn nhất sau số number
*Các vòng lặp:
1.for -lặp với điều kiện đúng
2.for/in - lặp qua key  của đối tượng
3.for/of  - lặp qua value của đối tượng
4.while - lặp khi điều kiện đúng
5.do/while - lặp ít nhất 1 lần ,sau đó lặp khi điều kiện đúng
6.Break & Continue in loop
7.Nested loop(vong lap lòng nhau)

1)for
có thể để trống trong điều kiện vòng lặp for nếu đã có dữ liệu rồi 
vd: var i = 1;
for(;i<=1000;i++){ console.log(i)}

vd2:var myArray = ['java', 'python', 'C++'];

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}
1.1)For/In loop
var myInfo = {
    name: 'thuan',
    age: 24,
    address: 'nguyen hoang'
};

for (var key in myInfo) {
    console.log(key); // in ra cac key(bien) trong myInfo
    console.log(myInfo[key]);//in ra cac gia tri trong key
}

1.2)For/Of loop(lay ra tung  phan tu 1 mang )
var myInfo = [
    'thuan',
    '24',
    'nguyen hoang'
];

for (var value of myInfo) {
    console.log(value);//in ra tung phan tu trong array
}

** lay gia tri trong 1 object
var myInfo = {
    name: 'thuan',
    age: '24'
};

console.log(Object.keys(myInfo));//in ra object chua 2 key name and age
console.log(Object.values(myInfo));//in ra gia tri trong key la thuan and 24
for (var value of Object.keys(myInfo)) {
    console.log(value);
}

6:Break & Continue in loop
Break: var i = 0

for (i; i <= 10; i++) {
    console.log(i);
    if (i >= 5) {
        break; // dung lai vong lap 
    }
}
Continue: var i = 0

for (i; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // khi chia 2  ra so du khac 0 thi khong thuc hien tiep cau lenh trong for ma tiep tuc tang them i de thuc hien vong lap tiep theo de ra so chan chia het cho 2
    }
    console.log(i);
}

7:Nested loop
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) { //myArray[i] dai bieu cho phan tu trong mang myArray 
        console.log(myArray[i][j]) // j dai bieu cho phan tu trong mang cua phan tu myArray
    }

}

//******dung de qui de tinh giai thua cua 1 so number
function factorial(number) {
    if (number == 1 || number == 0 ) return 1;
    return number * factorial(number - 1);
}
console.log(factorial(6));


//****Viết hàm đệ quy trả lại mảng gồm các giá trị số nằm trong khoảng cho trước.

Đã cho hàm run và tham số x, y

Ví dụ:

Input: 1, 5. Output: [2, 3, 4]
Input: 4, 10. Output: [5, 6, 7, 8, 9]
Input: 100, 104. Output: [101, 102, 103]

LOI GIAI:
function run(x, y) {
    if(x + 1 < y){
        return [x + 1].concat(run(x+1, y));
    }
    return [];

}
console.log(run(1, 5));

**Array method (phuong thuc ve mang)
1.forEach() : duyet qua tung phan tu cua mang
var courses = ['java', 'php', 'html', 'css'];
courses.forEach(function(courses, index) {
    console.log(index, courses);
});

2.every(): kiem tra cac phan tu cua 1 mang phai thoa man 1 dk nao do (tra ve gia tri boolean) vd kiem tra xem coin tat ca co bang 0 hay k 
var courses = [{
        name: 'java',
        coin: 0
    },
    {
        name: 'html',
        coin: 50
    },
    {
        name: 'php',
        coin: 100
    }
];
var checkFree = courses.every(function(courses) {
    return courses.coin === 0;
});
console.log(checkFree); // ket qua ra false vi 2 cai coin lon hon 0
3.some(): kiem tra 1 phan tu  trong cac phan tu chi can 1 phan tu thoa man 1 dk nao do thi (tra ve gia tri boolean) trong qua trinh chay kt tra mang chi can 1 phan tu do dung dk dua ra nam o bat cu dau trong qua trinh chay qua dung lap tuc dung kiem tra k chay kt tiep trong mang nua

var checkFree = courses.some(function(courses) {
    return courses.coin === 0; // 1 phan tu dau la (java) co coin === 0 nen tra ve gia tri true;
});
console.log(checkFree);

4.find():tim trong phan tu co dk can tim neu co tra ve phuong thuc cua phan tu do chi tra ve 1 phan tu  neu k thi tra ve  undefined (chi tim 1 doi tuong du trong mang co 2 doi tuong trung nhau cung chi tim ra 1 doi tuong no kiem tra som truoc)

var course = courses.find(function(courses) {
    return courses.name === 'html';
});
console.log(course);

5.filter(): giong nhu "find()" nhung no se tra ra tất cả những dữ liệu thoả điều kiện ví dụ như trả ra hết các phần tử trùng nhau trong mảng

6.map(): tao ra 1 mang moi voi gia tri dc bien doi dua tren mang da cho
function courseDemo(course) {
    return {
        name: `Khoa Hoc: ${course.name}`,
        coin: course.coin
    };
}
var newCourses = courses.map(courseDemo);
console.log(newCourses)

7.reduce()
 */


var courses = [{
        name: 'java',
        coin: 0
    },
    {
        name: 'html',
        coin: 50
    },
    {
        name: 'php',
        coin: 100
    },
    {
        name: 'java',
        coin: 0
    }
];

for (var key of courses) {
    console.log(key.name)
}