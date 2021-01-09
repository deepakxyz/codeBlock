## Classes and Instances
### Object
An object (instance) is an instanitiation of a class. When class is defined, only the description of the object is defined. Therefore, no memory or storage is allocated.

```python
class Circle():

    # class attribute
    coordinate_space = "cartisian"

    # instance attribute
    def __init__(self, radius, pos_x, pos_y, color):
        self.radius = radius
        self.pos_x = pos_x
        self.pos_y = pos_y
        self.color = color


# instances of the class Circle
circle_1 = Circle(4, 5, 5, "red")
circle_2 = Circle(5, 1, 1, "Yellow")

# show the class data as a dictonary
print(circle_1.__dict__)

# access the instance attribute
print(circle_1.radius)

# access the class attribute
print(circle_1.__class__.coordinate_space)
```


### Methods
Method are functions defined inside the body of a class. They are used to define the behaviour of an object.

```python
class Circle:

    # instance attribute
    def __init__(self, radius, name, pos_x, pos_y):
        self.radius = radius
        self.name = name
        self.pos_x = pos_x
        self.pos_y = pos_y

    # instance method
    def move(self, pos_x1, pos_y1):
        self.pos_x = self.pos_x + pos_x1
        self.pos_y = self.pos_y + pos_y1

    def giveMeName(self):
        return (f'The circle name is {self.name}')


circle_1 = Circle(3, "first", 2, 5)

circle_1.move(3, 6)
print(circle_1.pos_x, circle_1.pos_y)
print(circle_1.giveMeName())


#OUTPUT
# 5 11
# The circle name is first
```


### Inheritance
Inheritance is a way of creating a new class for using details of an existing class without modifying it. The newly formed class is a derived class(or child class). Similarly, the existing class is a base class(or parent class)

```python
# parent class
class Circle:
    def __init__(self, name, radius):
        self.name = name
        self.radius = radius
        print('This is Circle Class')

    def whoisThis(self):
        print("CIRCLE")

    def resize_up(self):
        # increase the radius
        self.radius = self.radius + 6
        print(f"The radius is {self.radius}")


# child class
class Sphere(Circle):
    def __init__(self, name, radius):
        # call super() function
        super().__init__(name, radius)
        print("This is Sphere Class")

    def whoisThis(self):
        print("SPHERE")

    def resize_down(self):
        # decrease the radius
        self.radius = self.radius - 2
        print(f"The radius is {self.radius}")


draw = Sphere("first", 2)

# child class override the parent class
draw.whoisThis()

print(draw.radius)

# resize up method is from the parent class
draw.resize_up()

print(draw.radius)

# resize_down method is from the child class
draw.resize_down()

print(draw.radius)
```


### Data Encapsulation
We can restict assess to methods and varialble. This prevent data from direct modification which is called encapsulation.

**self.__maxprice = 500**

```python
class Computer:
    def __init__(self):
        self.__maxprice = 500
        self.minprice = 100

    def sell(self):
        print(f"Selling Max-price: {self.__maxprice}")
        print(f"Selling Min-price: {self.minprice}")

    def setMaxPrice(self, price):
        self.__maxprice = price


c = Computer()
c.sell()

print('After changing')
c.minprice = 400
c.__maxprice = 600
c.sell()

print("After chaging using class method")
c.setMaxPrice(600)
c.sell()
```