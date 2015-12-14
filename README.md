# sign (wechat sign version1.0.0)
> wechat sign for user by judging the type of user to show different views.

**Examples**



  notice:you show add your judgement of "true" or "false" logic outside this directive.
  then you can use this sign directive as:

 ```html
     <sign-form is-focus="{{isfocus}}" qrcode-url="youlink"><sign-form/>
  ```
  the value "isfocus" change according to your logic
## Install

$ bower install signform --save

## Usage

if the user had focus the subscribers he may lead the a form for sign
```html
   <sign-from is-focus="true" qrcode-url="youlink"><sign-form/>
```
,those who had not focus will be lead to a focus view by show them a Qrcode of your subscribers.

```html
   <sign-form is-focus="false" qrcode-url="youlink"><sign-form/>
```









