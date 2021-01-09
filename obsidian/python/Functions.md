## Functions

### Docstrings
The first string after the function header is called the docstring and is short for documentaion string. It is briefly used to explain what a function does.

```python
def greet(name):
	"""
	This function greets to the person
	passed in as a parameter
	"""
	
	print("hello", + name + , ". Good Morning!")
	
greet("Paul")
```

For running the docstring

```python
print(greet.__doc__)

"""
This function greets to the person
passed in as a parameter
"""
```


### Arbitary Arguments
Sometimes, we do not know in advance the number of arguments that will be passed into a function. Python allows us to handle this kind of situation through function calls with an arbitrary number of arguments.

```python
def greet(*name):
	""" This function greets all the person
	in the name tuple."""
	
	#names is a tuple with arguments
	for name in names:
		print("Hello",name)
		
greet("Monica", "Luke", "Steve","Matt")

```
*OUTPUT*
Hello Monica
Hello Luke
Hello Steve
Hello Matt


### Anonymous Function
Lambda functions can have any number of arguments but only one expression.

```python
double = lambda x: x* 2
print(dobule(5))
```

*OUTPUT*
10


### Filter | Map | Reduce

```python
from functools import reduce

nums = [2, 3, 5, 6, 7, 8]

# Filter function
evens = list(filter(lambda a: a % 2 == 0, nums))
print(f"Even Fun: {evens})

# Map function
double = list(map(lambda n: n * 2, evens))
print(f"Map Fun: {double})

# Reduce function
''' Averages all the value in the list '''
red = reduce(lambda a, b: a + b, double)
print(f"Reduce Fun: {red})
```