[[Express JS]
]# setinterval() and settimeout()

.)both has 2 parameters.
.)first is a function and the  next parameter is the time in ms
.)set interval is kept inside a variable which is prefered to be constant
.)clear #variable_name clears the variable and kind of breaks the loop pattern of the set interval().

eg:

timeout:


![[Pasted image 20250612210418.png]]

setinterval:
![[Pasted image 20250612210645.png]]



# literals
.)they are used for representing a variable value while in a string:
eg:
![[Pasted image 20250613155916.png]]
this will return:
      Hello,Ameen



# array reducers


.array_name.reduce(func(acc,curr),intial_acc_value)

here, acc is like a counter that can be used to store the conted values lke sum product etc.

curr will point to the current element in the array,not the index but the element itself.

useful for finding sum of array etc

eg:
![[Pasted image 20250613164826.png]]

# rest and spread(...)


.eg:

![[Pasted image 20250613165134.png]]
this is ***rest*** which is used in functions...here the  parameters could be n number of elements which will be treated as a list/array.


.)***spread*** element is used for concatenation as well copying elements of one element into another easily.

![[Pasted image 20250613165349.png]]


# ?.  and ??
eg:
***?.***
![[Pasted image 20250613171444.png]].)this is used to call an objects key or attribute and to not show an error or interupt .)when the called key  is not present
.)it can also be used for functions in this way:
user?. trial?.()


??
.)this is used for checking if a particular key exits and if it doesnt then print a predefined default value:
![[Pasted image 20250613172004.png]]
this prints uknown user if name is not an attribute of user


# importing and  exporting functions


##  module:

### exporting


![[Pasted image 20250613222424.png]]

### importing
![[Pasted image 20250613222718.png]]


# structuring and destrucutring



![[Pasted image 20250619172832.png]]