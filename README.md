IDEABAG - приложения краутфандингового сайта ideabag.herokuapp.com

Данное приложение является прототипом, функцианал и возможности будут расширяться по мере продвежения идей на сайте и поддержки разработчиков приложения и сайта. 

Основная идея приложения - обеспечение возможности убонобного и быстрого просмотра и обсуждения идей, размещенных на сайте, в дали от компьютера.

Основной функционал приложения:
 - авторизация пользоватлей сайта ideabag.herokuapp.com
 - возможность просмотра размещенных на сайте стратапов, идей и новостей
 - возможность обсуждения темы в комментариях
 - редактирование профиля 
 - поиска чужих профилей 

краткое описание файлов и попок:

 - "App.js" - init file - первый файл, который открывается при включении приложения. Отвечает за передачу глобальных переменных/функций и за инициализацию навигации и приложения в общем.

 - "package.json" - Файл - список, в которой перечислены все установленные и используемые модули в приложении.

 - "./sotre/" - Папка в которой хранятся файлы отвичающие за глобальные переменные и функции.

 - "./routes/" - Папка в которой хранятся файлы отвичающие за навигаицю в приложении. В нем описаны какие файлы соеденены между собой, какие у них зависимости и какие у них свойства

 - "./pages/" - Папка в которой хранятся файлы отвичающие за отрисоку объектов, их связи между собой, настройки, свойства, зависимости, какие функции они выполняют при определенных действиях и.т.д.

 - "./assets/" - Папка в которой хранятся дополнительные файлы не выполняющие не влияющие, прямым образом, на основной фунционал приложения, например - медиафайлы, шрифты, изобрадения в формате base64 и.т.д.

Приложение было создано на React-Native Expo на JavaScript с вспомогательным модулем для организации глобальных переменных и функций - MobX