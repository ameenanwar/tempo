[[JavaScript notes]]



- setting up a  link in header:
     ![[Pasted image 20250614115459.png]]

  - border ,padding,width and margin  for an object in #css
  ![[Pasted image 20250614120427.png]]
note:
#padding: the space between content and #border

#border: the protection of the content or the boundary of the content|(also there is border-bottom,border-top,border-right,border-left)
#margin: the seperator of the content from the other divs or elements
margin: vertical margin_px horizontal_margin_px/top-bottom, left-right/top right bottom left
 website do have a margin by default

margin can be both negative and positive


### height
.)hv:this works even if the parent containers height is not defined
.)height%:this works only if the parent container has no height.


#overflow:this content helos in control
![[Pasted image 20250620191814.png]]



![[Pasted image 20250620113303.png]]

## box styling:
.used to give a predefined set of values for margin and padding etc:
![[Pasted image 20250614121526.png]]
note:content-box is also available





# font properties


.) #font-size:to set the size of the text(in px);
.) #font-family: to set the font type of the text;
.) #font-weight: to set the font weight to bold;


#background color:
```div_name{
background-color:#colorname;
}
```
# filter property
![[Pasted image 20250621144043.png]]

### to fit sentences without overflowing the conainter (going out of it)
```
word-wrap: break-word;
this tells that if the senetence or words are to long to fit in the conainter then break it so it still stays in the same conianter and not out of it.
```
# box shadow:
![[Pasted image 20250621143817.png]]

#border-radius:to curl the edges of a box or rectangle:```

```
border radius:9px;

```



```
```


# display
## flex-box 

```
display:flex

```
this is used to make the conents of a container two align in terms of a horizontal or veritcal axis.

![[Pasted image 20250621214947.png]]```


```
flex-wrap: wrap;

justify-content:right;
```
### justify-content:right left centre;


### align-items: to align in the form of top middle bottom




gap:16px;=> the gap property is used to bring space between contents of flex-box.


## how to center contents of a div.
```

## 1. **A Button**

If the button is alone in a container:

html

CopyEdit

`<div class="container">   <button>Click Me</button> </div>`

css

CopyEdit

`.container {   display: flex;   justify-content: center;  /* horizontal centering */ }`

If you also want it **vertically centered**:

css

CopyEdit

`.container {   display: flex;   justify-content: center;   align-items: center;   height: 100vh; }`

---

## ✅ 2. **Plain Text**

html

CopyEdit

`<div class="text-container">   This is centered text. </div>`

css

CopyEdit

`.text-container {   text-align: center; }`

🧠 Only works for **inline content**, not block elements.

---

## ✅ 3. **A Label with Its Input**

### Structure:

html

CopyEdit

`<div class="form-line">   <label for="username">Username</label>   <input type="text" id="username"> </div>`

### Center both horizontally:

css

CopyEdit

`.form-line {   display: flex;   justify-content: center;   gap: 5px; }`

### Center vertically within a row:

css

CopyEdit

`.form-line {   display: flex;   align-items: center; }`
```

```
#the differences between block vs inline elemetns and how to convert to one another
<!DOCTYPE html>
<html>
<head>
  <title>Block vs Inline Demo</title>
  <style>
    /* Styling for clarity */
    .box {
      padding: 10px;
      color: white;
      font-weight: bold;
      font-family: sans-serif;
    border:0.5px solid black;
    }

    .block {
      background-color: #3498db;
    }

    .inline {
      background-color: #e74c3c;
    }

    .inline-block {
      background-color: #2ecc71;
    }

    .custom {
      width: 200px;
      height: 50px;
    }
  </style>
</head>
<body>

  <h2>Block Elements (default behavior)</h2>
  <div class="box block">Block 1</div>
  <div class="box block">Block 2</div>

  <h2>Inline Elements (default behavior)</h2>
  <span class="box inline">Inline 1</span>
  <span class="box inline">Inline 2</span>

  <h2>Inline-Block Elements (can set width/height)</h2>
  <span class="box inline-block custom" style="display:inline-block;">Inline-Block 1</span>
  <span class="box inline-block custom" style="display:inline-block;">Inline-Block 2</span>

  <h2>Block Elements turned Inline (via CSS)</h2>
  <div class="box block" style="display:inline;">Block-now-Inline 1</div>
  <div class="box block" style="display:inline;">Block-now-Inline 2</div>

</body>
</html>

```

block elements: the take up the enitre width of the parent continaer but inline container only takes up the width of the text.





# forms


![[Pasted image 20250623122829.png]]
```

.)fieldset: to divide the form into two or more divisions
.)type"text,email etc
.)label=for, inptu=id
.)<input required> mandatory fields
.)<form action='url'>, to submit this to the appropriate url


```



## radio buttons
```
<label><input type='radio'/></label>

.to be able to select only one button a t a time, we need give two or more set of radiobuttons the same name='' value.
eg:
<fieldset>

<label><input type="radio" name="account-type" checked/> Personal</label>

<label><input type="radio" name="account-type" /> Business</label>

</fieldset>; here the first radio button is selected by default and since both have the same name, only one can be selected



```
## text area
```
<label for="bio">Provide a bio:

<textarea id="bio" rows="3" cols="30"></textarea>

</label>

</fieldset>
```

## drop-down

```
<label for="referrer">How did you hear about us?

<select id="referrer">

<option value="">(select one)</option>

<option value="1">freeCodeCamp News</option>

<option value="2">freeCodeCamp YouTube Channel</option>

<option value="3">freeCodeCamp Forum</option>

<option value="4">Other</option>

</select>

</label>

```

### to select and style a seperate attribute of an item:
```
css
input[name="password"]
```


```

input[type='submit']

{

display:block;

width:60%;

}
```


