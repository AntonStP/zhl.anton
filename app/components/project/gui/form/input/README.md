# Поле ввода

### pug
  параметры миксина input
  * _**content.tag** (значение по умолчанию input)_ - тэг используемый для поля ввода: input или textarea
  * _**content.usePlaceholderAsTitle** (значение по умолчанию true)_ - использовать плейсхолдер в качестве заголовока.
    При этом content.title игнорируется, вместо него используется attributes.placeholder.
  * _**content.title**_ - заголовок поля
  
### scss
  Функции
  
  * _**getTransform**_ - рассчет трансформации заголовка для того, что бы он совпадал с положением плейсхолдера
