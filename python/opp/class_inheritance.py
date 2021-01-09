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
