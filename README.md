# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
## Setup ngay sau khi clone project lần đầu
### Setup cơ sở dữ liệu MySQL và khởi chạy server MySQL trên máy
Trước hết, ***vui lòng cài đặt MySQL lên máy nếu chưa có, rồi nhập file `simbsc.sql` vào***. Nếu chưa biết cách cài đặt thì đây là hướng dẫn:
- Các bạn có thể cài trực tiếp ứng dụng MySQL lên máy, hoặc cài đặt ứng dụng tổng hợp XAMPP tại [đây](https://www.apachefriends.org/download.html).
- Nếu dùng XAMPP, cài đặt xong thì vui lòng run as administrator ứng dụng, khi cửa sổ bật ra thì bấm nút Start ở dòng MySQL và Apache. Sau đó vào trình duyệt bất kỳ trên máy, nhập localhost rồi enter. Trang Welcome sẽ hiện ra.
- Trên thanh điều hướng, nhấn vào mục `phpMyAdmin`. Trang quản lý sẽ hiện ra, và trên thanh điều hướng mới lúc này sẽ có nút Import hoặc nhập. Bấm vào đó, khi trang hiện lên sẽ thấy khung chọn tệp. Chọn tệp `simbsc.sql` rồi bấm nhập. Sau khi xong, để ý dashboard bên trái màn hình, cái list với mấy cái icon hình trụ ấy, nếu thấy một dòng tên `simbsc` xuất hiện nghĩa là file database đã nhập thành công. Có thể nhấp vào dòng đó để bắt đầu xem trong cái database đó có gì.
- Sau đó, trong ứng dụng XAMPP bạn có thể stop Apache đi nếu không cần vọc nữa (nếu cần tương tác trên môi trường tiếp thì giữ cũng được), nhưng tuyệt đối không tắt MySQL. Do hiện sử dụng localhost để host server database, nếu bạn tắt nó đi nghĩa là server database sẽ offline và web chắc chắn sẽ bị lỗi ở những trang cần truy cứu database. Chỉ stop MySQL đi khi bạn muốn tắt máy đi nghỉ không debug cho project này nữa, hoặc chỉ đơn giản là đã suffer với project này quá đủ rồi, đang muốn làm cái khác và không còn nhu cầu bật cái web của project này nữa thì tắt :). Nhớ mỗi khi cần bật cái web của project này lên thì phải start MySQL trong XAMPP trước.
- Mỗi khi kiểm tra thấy repo có cập nhật, nên drop cái database cũ, rồi import lại file `simbsc.sql` hiện tại trong project vì có thể có những thay đổi trên DB. Các bạn khi làm xong nếu có đổi gì trong database cũng export file sql mới rồi bỏ vào repo này để người sau còn cập nhật theo.
### Setup các thư viện cho project
Do việc push kèm thư mục node_modules (thư mục chứa các thư viện cho NodeJS và ReactJS) sẽ khiến project trở nên rất nặng (thư mục node_modules của ReactJS có dung lượng loanh quanh 300-400 MB), cũng như git sẽ không thể track được toàn bộ thay đổi.

Do đó, hai thư mục node_modules của NodeJS và ReactJS đã phải được đưa vào .gitignore.

Vì thế, ngay sau khi clone project này về lần đầu tiên, các thành viên vui lòng tiến hành cài đặt lại các thư viện này. Cụ thể như sau:

Với NodeJS, mở terminal và gõ:
```
npm install
```
Các thư viện cần thiết cho ReactJS sẽ được cài đặt.
## Khởi chạy web
Sau khi clone project này, mở terminal tại thư mục mà project được clone (nếu đang ở thư mục views thì phải quay ra thư mục cha nha) và gõ:
```
npm start
```
Trang [localhost:3000](http://127.0.0.1:3000/) sẽ khởi chạy tự động trên trình duyệt mặc định của máy sau vài giây nếu việc thiết lập thành công.

Lời cuối, chúc tất cả một ngày tốt lành!
