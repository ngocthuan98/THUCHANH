/*

LÝ THUYẾT VỀ DOM HTML
1.Element: ID(getElenmentById) ,class(getElenmentsByClassName),tag(getElenmentsByTagName), CSS selector(querySelector and querySelectorAll) , HTML collection

1*)ID

var headingNode = document.getElementById('heading); //goi toi element id trong html voi ten (heading)
console.log({
    element: headingNode
});

2*)class
var headingNodes = document.getElementsByClassName('heading');//goi toi element class trong html voi ten (heading) dong lenh "ElementsByClassName" có chữ s đằng sau element vì nhiều class trùng tên thì sẽ là số nhiều thêm s

console.log(headingNodes);
3*)Tag(tên thẻ trong html như thẻ h1 ,p)

var headingNodes = document.getElementsByTagName('h1');//gọi tới tên thẻ tag trong html trong trường hợp ni gọi tới tên thẻ h1
console.log(headingNodes);

4*)CSS selector

var headingNode = document.querySelector('.heading');//khi muốn làm css trong 1 class ta thường (.tenclass) nên giờ muốn chỉ tới class trong html đó bằng js ta dùng như vd trên heading trong đây là tên của class

console.log(headingNode);

**Trường hợp document.querySelectorAll('.heading') //tra ve cac CSS có tên class là heading

var boxNode = document.querySelector('.box1'); // tao 1 bien đưa ra các phần tử trong class box1 trong html
console.log(boxNode.querySelectorAll('li'));// boxNode đại diện cho class box1 chỉ vào các thẻ li trong box 1 để xuất ra các thể li đó

5*)HTML COLLECTION
console.log(document.forms['form-2']); // chi ra form 2 trong html  form là 1 html collection
cach 2:console.log(document.forms[1]);// 1 dai dien vi tri index trong form xuất hiện html ví dụ trong đây chỉ ra id thứ 2 trong form


***DOCUMENT.WRITE
document.write('hello') truyền vào 1 dòng chữ mong muốn vào html sử dụng thẻ script để đặt ở vị trí nào tuỳ thích thong html

2.ATTRIBUTE (id , class , title, src, href)

var headingElement = document.querySelector('h1');
headingElement.title = 'heading'; // thêm attribute title vào thẻ h1 kết quả trong html sẽ là <h1 title="heading">HTML<h1>  (lưu ý nó k thể thêm vào mã nguồn html của chúng ta được chỉ thay đổi trên dev tool còn mã source code chính html của ta k thay đổi gì )

+Luu ý: attribute thêm class thì phải dùng (className)
headingElement.setAttribute('class', 'heading') // có thể dùng setAttribute để đặt tên attribute là 'class' và tên của class đó là 'heading'
kết quả : <h1 class="heading">HTML<h1>

console.log(headingElement.getAttribute('class')) // lấy ra tên của của atribute class là 'heading-test' dùng getAttribute
+Luu ý: Có thể lấy ra được tên của attribute dù nằm trong html hay là được thêm attribute vào từ JS
-ví dụ: 
var headingElement = document.querySelector('h1');
headingElement.title = 'title-test';
console.log(headingElement.getAttribute('title'))

3.TEXT(innnerText , textContent): lấy nội dung trong các thẻ của HTML

1*)innerText: in ra nội dung text nhưng không in ra nội dung thẻ bị ẩn (do the span  có display : none cái này dung để ẩn thể span này đi )

<h1 class="heading">

        <span style="display:none">Java</span>
        <span>python</span>

</h1>
var headingElement = document.querySelector('.heading');
console.log(headingElement.innerText)// chỉ hiện ra chữ python

2*)textContent:in ra nội dung text và nội dung thẻ bên trong thẻ <h1> này 
var headingElement = document.querySelector('.heading');
console.log(headingElement.textContent)

//hiện ra :

        Java
        python

3*)innerHTML : them 1 the element vao trong class va ghi de len element trong class da co san html

var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1>Heading</h1>';    //them 1 the (h1) vao trong class box html lam xuat hien chu(Heading)

4*)outerHTML : lay ra ca class va element duoc them vao  class do.
 TH khac:
 boxElement.outet.

 var boxElement = document.querySelector('.box');
console.log([boxElement]) //xem thuoc tinh cua bien boxElement


**DOM CSS)

var boxElement = document.querySelector('.box');
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red'; // them style cho elementNode
-Cach 2:
var boxElement = document.querySelector('.box');
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'blue',
});
console.log(boxElement.style.height); // lay ra gia tri phan tu height trong css(chi xet trong css in line)

**ClassList property(thuoc tinh chi lay ra trong elementNode 'add , contains ,remove,toggle):
console.log(boxElement.classList.length) // lay ra chieu dai class trong html o dau chi co class box nen chieu dai la 1, neu ten class trung nhau thi chi xac dinh chieu dai 1 class

console.log(boxElement.classList[1])//chỉ mục vị trí trong class nếu 0 thì hiện tên class là box trong html còn 1 thì là tên box-1

console.log(boxElement.classList.value) //chỉ mục ra giá trị trong class chỉ đúng giá trị nằm trong class thêm cái gì vào class thì nó đưa ra hết trong class đó kể cả 'dấu cách'

+add(them class vao element))
var boxElement = document.querySelector('.box');
boxElement.classList.add('red','blue') //them class 'red' vao elementNode trong html,them class 'blue'

+contains(kiem tra 1 class co ton tai hay k):
var boxElement = document.querySelector('.box');
boxElement.classList.add('red', 'blue')
console.log(boxElement.classList.contains('blue')) // tra ve true vi co class red trong html

+remove(xoa 1 class):
boxElement.classList.remove('red');// xoa class 'red' cua elementNode trong html

+toggle(kiem tra trong elementNode co class do hay k ,nếu có thì nó sẽ xoá class đó đi còn nếu không thì nó thêm class đó vào)
setTimeout(() => {
        boxElement.classList.toggle('red')
    }, 3000) // sau 3 giay no them class red vao

-TH2:
var boxElement = document.querySelector('.box');
boxElement.classList.add('red')
setTimeout(() => {  //funcion setTimeout( tri hoan viec thuc thi viec gi do trong 3 giay '3000 mili giay->3giay')
        boxElement.classList.toggle('red')
    }, 3000) // sau 3 giay no xoa class red vao

-- 
setInterval(() => { //funcion setInterval thiet lập độ trễ của hàm sẽ thực hiện lặp đi lặp lại trong bao lau ví dụ như trong ni thì nó sẽ lặp đi lặp lại thêm vào nếu không có class 'red' và xoá đi nếu có class 'red' trong khoản thời gian là 1000mili giây tức cứ 1s nó sẽ chạy funtion
        boxElement.classList.toggle('red')
    }, 1000) // sau 3 giay no them class red vao



**DOM EVENTS
1) Attibute events( lắng nghe sự kiện diễn ra của hành vi người dùng bằng cách sử dụng attribute):chỉ làm bên html

-onclick: bấm vào để lệnh thực thi  <h1 onclick="console.log(Math.random())">DOM events</h1>
-onmouseover: dua chuot vao thi dong lenh thục thi <h1 onmouseover="console.log(Math.random())">DOM events</h1>

** luu y : https://www.w3schools.com/jsref/dom_obj_event.asp noi hoc cac dong lenh dom events

<h1 onclick="console.log(this.innerText)">DOM events</h1>  : lay ra text trong element 'h1'

2)Assign event using the element node(gán event sử dụng element node) //https://fullstack.edu.vn/learning/javascript-co-ban?id=82a1b3b1-3b78-433f-8718-b28abe5599b8

var h1Element = document.querySelectorAll('h1')

for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

3)DOM EVENTS (input/select):https://fullstack.edu.vn/learning/javascript-co-ban?id=270e6097-d6fe-422c-92eb-5d61060f70fa

var inputElement = document.querySelector('input[type="text"]'); //oninput 'input' gi vao thi su in ra cai do
inputElement.oninput = function(e) {
    console.log(e.target.value)
}

--(KEY UP / KEY DOWN)://onkeyup va onkeydown 
var inputElement = document.querySelector('input[type="text"]'); //oninput 'input' gi vao thi su in ra cai do
inputElement.onkeydown = function(e) {
    switch (e.which) {
        case 27: // vi phim esc tuc phim thoat la so 27 trong js
            console.log('exit');
            break;
    }

}

--preventDefault(loại bỏ hành vi mặc định của trình duyệt trên thẻ HTML):https://fullstack.edu.vn/learning/javascript-co-ban?id=6dd78909-0225-4d57-bee7-20bec5d89773

++anchors: lay element the 'a' có name
++link: lay ra the 'a' k can name

--stopPropagation(ngan chặn việc nổi bọt):

document.querySelector('div').onclick = function() {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();// k co thì khi bấm click me tren trình duyệt sẽ hiên luôn 'DIV'
    console.log('Click me!')
}

4)EVENT Listener:https://fullstack.edu.vn/learning/javascript-co-ban?id=2767ac26-f98a-4051-ada5-63a8df2ded10

5)JSON (javascript Object Notation):là 1 định dạng dữ liệu 'chuỗi'  , thể hiện kiểu dữ liệu dạng "number, Boolean, Null, Array, Object"
 https://fullstack.edu.vn/learning/javascript-co-ban?id=e907615b-943e-42f7-a2f4-d5d80c5f9cbd
 ++Stringify: Từ Javascript type --> Jason
++Parse : Từ Jason  --> Javascript type

var json = 'false' // đây là dữ liệu jason dạng chuỗi là false thể hiện bằng kiểu dữ liệu boolean

--Example : 
var a = 'false';
console.log(JSON.parse(a)); // chuyen kieu du lieu jason sang JS dang boolean

var json = '["java","PHP"]'; // json dạng array

var json = '{"Name":"thuan", "Age": 18}'; //json dạng object chuỗi cũng dấu "" và số thì k cần

var a = '1';
console.log(JSON.parse(a)); // chuyen kieu du lieu jason dang chuoi sang JS dang number

var a = '"thuan"'; // muon json dang chuoi thi bo trong dau ""

6)PROMISE(sync , Async): https://fullstack.edu.vn/learning/javascript-co-ban?id=f99f6a56-0568-4b59-a697-e8474b27de85

++Callback Hell(pain): 

setTimeout(function() {
    console.log(1); // viec 1 
    setTimeout(function() {
        console.log(2); //viec 2
        setTimeout(function() {
            console.log(3); //viec 3
        }, 1000)
    }, 1000)
}, 1000)

++PROMISE(LY THUYET): sinh ra trong qúa trình giải quyết vấn đề bất đồng bộ
https://fullstack.edu.vn/learning/javascript-co-ban?id=e21d5662-6dda-48e1-85e9-e71434760942

var promise = new promise( //khoi tao promise
    //tạo ra Executor function
    function(resolve,reject){ // goi 1 trong 2 hàm resolve và reject
         //Logic
         //Thanh công: resolve()
         //Thất bại : reject()
    }
)

promise
    .then(function(courses) {  // sử dụng then khi promise function có kết quả thao tác thành công resolve()
        console.log(courses);
    })

    .catch(function(error){ // sử dụng catch khi promise function có kết quả thao tác thất bại reject()
        console.log(error);
    })

    .finally(function(){
        console.log('Done!');
    })

++Example:

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(2000);
    })
    .then(function() {
        console.log(2);
        return sleep(2000);
    })
    .then(function() {
        console.log(3);
    })    


++PROMISE EXAMPLE :https://fullstack.edu.vn/learning/javascript-co-ban?id=5768fde8-6548-4505-9af3-a1752071c677

7)FETCH(lay du lieu back end tra ve):
https://fullstack.edu.vn/learning/javascript-co-ban?id=845b7b3e-86d9-4af9-987b-4d7cd124ed43

API : Application programing interface ( ứng dụng giao diện lập trình) cổng giao tiếp giữa các phần mềm.

Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascripts types -> Render ra giao diện  với HTML.

var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(function(response) {
        return response.json(); 
        //JSON.parse : JSON -> Javascripts types
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html;
    })

++JSON server (tạo ra 1 fake API server)
var informationApi = 'http://localhost:3000/Information';

function start() {
   getInformation(renderInformation);

    handleCreateForm();
}
start();

function getInformation(callBack) {
    fetch(informationApi)
        .then(function (response) {
            return response.json();
        })
        .then(callBack);

}

function createInformation(data,callBack) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(data)
    };

    fetch(informationApi, options)
        .then(function(response){
             response.json();
        })
        .then(callBack);
}

function renderInformation(information){
    var listStudentBlock = document.querySelector('#list-student');
    var htmls = information.map(function(information){
        return `
            <li class="information-item-${information.id}">
                <h4>${information.name}</h4>
                <p> ${information.age}</p>
                <button onclick="handleDeleteInformation(${information.id})">Xoá</button>
            </li>
        `
    });
    listStudentBlock.innerHTML = htmls.join('');
}

function handleDeleteInformation(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    };

    fetch(informationApi+ '/'+ id, options)
        .then(function(response){
             response.json();
        })
        .then(function(){
            var informationItem = document.querySelector('.information-item-'+id);
            if(informationItem){
                informationItem.remove();
            }
        });
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var age =  document.querySelector('input[name="age"]').value;

        var formData = {
            name:name,
            age:age
        };
        createInformation(formData,function(callback) {
            getInformation(renderInformation);
        });
        
    }
}


*/

