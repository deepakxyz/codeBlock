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
